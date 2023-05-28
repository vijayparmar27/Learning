

--- notes

    - create new role for ec2 instance

    - give permission for ecr

    - add in ec2 instance


-------------------------------------------------------------------------------


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
          host: 3.109.155.51
          username: ec2-user
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /home/ec2-user
            aws ecr get-login-password --region ap-south-1 | sudo docker login --username AWS --password-stdin 974898822426.dkr.ecr.ap-south-1.amazonaws.com
            sudo docker pull ${{env.ECR_REGISTRY}}/docker-learning:97bfc66f651b2442d05784227d394d41bc4012a2
