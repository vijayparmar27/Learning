stages:
  - deploy
    
deploy:
  stage: deploy
  image:
    name: amazon/aws-cli:2.12.3
    entrypoint: [""]
  before_script:
    - yum update
    - yum install -y openssh-clients
    - mkdir -p ~/.ssh
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' > ~/.ssh/id_rsa
    - chmod 600 ~/.ssh/id_rsa
    - echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
  script:
    - aws --version
    - aws iam list-users
    - ssh -o StrictHostKeyChecking=no -i ~/.ssh/id_rsa $SSH_USER@$SSH_HOST "mkdir -p /home/ec2-user/data"