--- gitLab add environment variables

    - settings > CICD > Variables

        - select protected when branch is protected

    - for aws variables

        - AWS_ACCESS_KEY_ID

        - AWS_SECRET_ACCESS_KEY

        - AWS_DEFAULT_REGION 

--- gitLab Deployments 

    - select Environment

    - click on new environment

    - staging

        - add staging URL

    - 


----------------------------------------------------------------
stages:
    - .pre
    - build
    - test

build website:
    image: node:16-alpine        // docker image
    stage: build
    script:
        - yarn install
        - yarn build
    artifacts:
        paths:
            - build

linter:
    image: node:16-alpine
    stage: .pre
    script:
        - yarn install
        - yarn lint

test website:
    image: alpi ne
    stage: test
    rules : 
        - if : $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
    script:
        - test -f build/index.html

unit tests:
    image: node:16-alpine
    stage: .pre
    script:
        - yarn install
        - yarn test
---------------------------------------------------------------

stages:
    - build
    - test
    - deploy staging
    - deploy production

variables:
    APP_VERSION: $CI_PIPELINE_IID

build website:
    image: node:16-alpine
    stage: build
    script:
        - yarn install
        - yarn lint
        - yarn test
        - yarn build
        - echo $APP_VERSION > build/version.html
    artifacts:
        paths:
            - build

test website:
    image: node:16-alpine
    stage: test
    script:
        - yarn global add serve
        - apk add curl
        - serve -s build &
        - sleep 10
        - curl http://localhost:3000 | grep "React App"

.deploy:
    image: 
        name: amazon/aws-cli:2.4.11
        entrypoint: [""]
    rules:
        - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
    script:
        - aws --version
        - aws s3 sync build s3://$AWS_S3_BUCKET --delete
        - curl $CI_ENVIRONMENT_URL | grep "React App"
        - curl $CI_ENVIRONMENT_URL/version.html | grep $APP_VERSION

deploy to staging:
    stage: deploy staging
    environment: staging           // add staging environment in gitLab .... if BUCKET environment variable is same than select environment for that environment variable in cicd 
    extends: .deploy

deploy to production:
    stage: deploy production
    environment: production
    extends: .deploy


----------------------------------------------------------------

job:
    only :              // for this job run when only main branch is cicd run
        - main 
    when : manual       // cicd run manualy


---------------------------------------------------------------
stages:
    - build
    - package
    - test
    - deploy

variables:
    APP_VERSION: $CI_PIPELINE_IID

build website:
    image: node:16-alpine
    stage: build
    script:
        - yarn install
        - yarn lint
        - yarn test
        - yarn build
        - echo $APP_VERSION > build/version.html
    artifacts:
        paths:
            - build

build docker image:
    stage: package
    image: docker:20.10.12
    services:
        - docker:20.10.12-dind
    script:
        - echo $CI_REGISTRY_PASSWORD | docker login -u $CI_REGISTRY_USER $CI_REGISTRY --password-stdin
        - docker build -t $CI_REGISTRY_IMAGE -t $CI_REGISTRY_IMAGE:$APP_VERSION .
        - docker image ls
        - docker push --all-tags $CI_REGISTRY_IMAGE

test docker image:
    stage: test
    image: curlimages/curl
    services:
        - name: $CI_REGISTRY_IMAGE:$APP_VERSION
          alias: website
    script:
        - curl http://website/version.html | grep $APP_VERSION

deploy to production:
    image:
        name: amazon/aws-cli:2.4.11
        entrypoint: [""]
    stage: deploy
    variables:
        APP_NAME: My website
        APP_ENV_NAME: Mywebsite-env
    environment: production
    script:
        - aws --version
        - yum install -y gettext
        - export DEPLOY_TOKEN=$(echo $GITLAB_DEPLOY_TOKEN | tr -d "\n" | base64)
        - envsubst < templates/Dockerrun.aws.json > Dockerrun.aws.json
        - envsubst < templates/auth.json > auth.json
        - cat Dockerrun.aws.json
        - cat auth.json
        - aws s3 cp Dockerrun.aws.json s3://$AWS_S3_BUCKET/Dockerrun.aws.json
        - aws s3 cp auth.json s3://$AWS_S3_BUCKET/auth.json
        - aws elasticbeanstalk create-application-version --application-name "$APP_NAME" --version-label $APP_VERSION --source-bundle S3Bucket=$AWS_S3_BUCKET,S3Key=Dockerrun.aws.json
        - aws elasticbeanstalk update-environment --application-name "$APP_NAME" --version-label $APP_VERSION --environment-name $APP_ENV_NAME
        - aws elasticbeanstalk wait environment-updated --application-name "$APP_NAME" --version-label $APP_VERSION --environment-name $APP_ENV_NAME
        - curl $CI_ENVIRONMENT_URL/version.html | grep $APP_VERSION
