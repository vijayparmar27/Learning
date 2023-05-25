name: Copy Code to EC2

on:
  push:
    branches:
      - main

jobs:
  copy_code:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2
        with:
          repository: vijayparmar27/github-action-test
          token: ${{ secrets._GITHUB_TOKEN }}

      - name: Copy Code to EC2
        uses: appleboy/scp-action@v0.1.4
        with:
          host: 3.108.185.123
          username: ec2-user
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          source: ./
          target: /home/ec2-user

      - name: Run Command on EC2
        uses: appleboy/ssh-action@master
        with:
          host: 3.108.185.123
          username: ec2-user
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
              cd /home/ec2-user
              sudo mkdir code
