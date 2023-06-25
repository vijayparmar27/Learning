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



---------------------add---------------

    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - ssh-keyscan $EC2_INSTANCE_IP >> ~/.ssh/known_hosts


    - scp -o "StrictHostKeyChecking=no" -r ./path/to/code ec2-user@$EC2_INSTANCE_ID:/path/to/destination


    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - ssh-keyscan -H $EC2_INSTANCE_IP >> ~/.ssh/known_hosts
    - chmod 644 ~/.ssh/known_hosts
    - ssh -i "$SSH_PRIVATE_KEY" ec2-user@$EC2_INSTANCE_IP "cd /path/to/your/code && git pull"

