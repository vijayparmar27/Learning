

------------------------------------------- first  -------------------------------------------------------------------------------------


name: ci-cd pipeline deploy to prod

on:
  push:
    branches: ["main"]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Get Github action IP
        id: ip
        uses: haythem/public-ip@v1.2

      - name: Add Github Actions IP to Security group
        run: |
          aws ec2 authorize-security-group-ingress --group-name ${{ secrets.AWS_SG_NAME }} --protocol tcp --port 22 --cidr ${{ steps.ip.outputs.ipv4 }}/32
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_DEFAULT_REGION: ${{ secrets.AWS_DEFAULT_REGION }}

      - name: Deploy to prod server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOST_IP }}
          username: ubuntu
          key: ${{ secrets.SSH_KEY }}
          script: |
            export NVM_DIR=~/.nvm
            source ~/.nvm/nvm.sh
            cd /home/ec2-user/
            sudo mkdir nodejs-ssl-server
            cd /home/ec2-user/nodejs-ssl-server
            git stash
            git pull origin main
            npm install
            pm2 restart nodejs-ssl-server

      - name: Remove Github Actions IP from security group
        run: |
          aws ec2 revoke-security-group-ingress --group-name ${{ secrets.AWS_SG_NAME }} --protocol tcp --port 22 --cidr ${{ steps.ip.outputs.ipv4 }}/32
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_DEFAULT_REGION: ${{ secrets.AWS_DEFAULT_REGION }}
        if: always()




--------------------------------------------------------------------------------------------------------------------------------------------------

name: Deploy to EC2

on:
  push:
    branches: [main]

env:
  AWS_REGION: ap-south-1
  AWS_INSTANCE_ID:  65.2.168.208
  AWS_SSH_PRIVATE_KEY: ${{ secrets.SSH_KEY }}

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Install dependencies
        run: npm install

      - name: SSH into EC2 instance
        uses: appleboy/ssh-action@master 
        with:
          host: ${{ env.AWS_INSTANCE_ID }}
          username: ec2-user
          key: ${{ env.AWS_SSH_PRIVATE_KEY }}
          script: |
            cd /home/ec2-user
            git stash
            git pull origin main
            npm install
            pm2 restart index.js.js




git clone https://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@github.com/vijayparmar27/Github-EC2Instance-AWS-Deploy.git



----------------------------------------------------------
name: Deploy to EC2

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest 

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up SSH key
        uses: webfactory/ssh-agent@v0.7.0
        with:
          ssh-private-key: ${{ secrets.SSH_KEY }}

      - name: Configure Git
        run: |
          git config --global user.email "vijayparmar0027@gmail.com"
          git config --global user.name "vijayparmr27"

      - name: Authenticate with GitHub
        run: |
          echo "${{ secrets.GITHUB_TOKEN }}" > ~/.github_token
          git config --global credential.helper 'store --file ~/.github_token'

      - name: SSH into EC2 instance
        uses: appleboy/ssh-action@master 
        with:
          host: ec2-user@ec2-35-154-158-70.ap-south-1.compute.amazonaws.com
          username: ec2-user
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /home/ec2-user
            git stash
            git pull origin main



-----------------------------------------------------------------------------------------------
-- work 

name: Deploy to EC2

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Install dependencies
        run: npm install

      - name: Deploy to Server
        uses: easingthemes/ssh-deploy@main
        env:
            SSH_PRIVATE_KEY: ${{ secrets.SSH_KEY }}
            ARGS: "-rlgoDzvc -i --delete"
            SOURCE: ./
            REMOTE_HOST: 13.234.204.102
            REMOTE_USER: ec2-user
            TARGET: /home/ec2-user





--------------------------------------------------

-- work

name: EC2 Deployment

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2
        with:
          repository: vijayparmar27/Github-EC2Instance-AWS-Deploy
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Deploy code to EC2 instance
        uses: appleboy/ssh-action@master
        with:
          host: 13.233.130.84
          username: ec2-user
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /home/ec2-user/Github-EC2Instance-AWS-Deploy
            git pull origin main
            npm install
