--- create ec2 instance [amazonLinux]

     - sudo yum update

     - sudo yum upgrade

--- install node js in instance

     - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

     - . ~/.nvm/nvm.sh

     - node -v

     - npm -v

---  git clone [gitURLRepository]

    - ls

    - cd [repoName]

    - npm install

    - npm start

--->> if port is 4000 than in instance security group add inbound rule for that port