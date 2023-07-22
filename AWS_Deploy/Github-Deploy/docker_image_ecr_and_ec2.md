

--- notes

    - in this github action file

    - fist build docker image

    - than push in ecr

    - in ec2-instance pull image from ecr


--------------------------------------------------------------------------------

name: Deploy to EC2 using ECR

on:
  push:
    branches:
      - main
env:
  ECR_REGISTRY: 974898822426.dkr.ecr.ap-south-1.amazonaws.com

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2
        with:
          repository: vijayparmar27/github-action-test
          token: ${{ secrets._GITHUB_TOKEN }}

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-south-1

      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v1

      - name: Build Docker image
        run: docker build -t docker-learning:${{ github.sha }} .

      - name: Tag Docker image
        run: docker tag docker-learning:${{ github.sha }} $ECR_REGISTRY/docker-learning:${{ github.sha }}

      - name: Push Docker image to Amazon ECR
        run: docker push $ECR_REGISTRY/docker-learning:${{ github.sha }}

      - name: SSH into EC2 instance and pull Docker image
        uses: appleboy/ssh-action@master
        with:
          host: 13.235.90.181
          username: ec2-user
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            aws configure set aws_access_key_id ${{ secrets.AWS_ACCESS_KEY_ID }}
            aws configure set aws_secret_access_key ${{ secrets.AWS_SECRET_ACCESS_KEY }}
            aws configure set default.region ap-south-1
            cd /home/ec2-user
            echo ${{env.ECR_REGISTRY}}
            echo "$ECR_REGISTRY"
            aws ecr get-login-password --region ap-south-1 | sudo docker login --username AWS --password-stdin ${{env.ECR_REGISTRY}}
            sudo docker pull ${{env.ECR_REGISTRY}}/docker-learning:${{ github.sha }}
