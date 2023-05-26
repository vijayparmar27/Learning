--- first create docker image in local 

    - dockcer build -t docker-learning .

--- aws login in local 

    - aws configure

    - aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 974898822426.dkr.ecr.ap-south-1.amazonaws.com [for ECR access]

    - docker tag docker-learning:latest 974898822426.dkr.ecr.ap-south-1.amazonaws.com/docker-learning:latest [give tag]

    - docker push 974898822426.dkr.ecr.ap-south-1.amazonaws.com/docker-learning:latest [push image into aws ECR]

--- docker install in ec2 instance
    
    - sudo yum install docker

    - sudo service docker start

    - sudo docker info

--- in ec2-instance aws confid and ecr permission

    - aws configure

    - aws ecr get-login-password --region ap-south-1 | sudo docker login --username AWS --password-stdin 974898822426.dkr.ecr.ap-south-1.amazonaws.com [for ECR access]

    - docker push 974898822426.dkr.ecr.ap-south-1.amazonaws.com/docker-learning:latest [pull image into aws ECR]

    - docker run -d --name docker-learning -p 4000:4000 974898822426.dkr.ecr.ap-south-1.amazonaws.com/docker-learning [for run image]





