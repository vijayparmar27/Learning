--- first create instance [amazonLinux]

    - sudo yum update

    - sudo yum upgrade

--- install node js on instance

    - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

    - . ~/.nvm/nvm.sh

    - nvm --version
    
--- install fileZila on your pc

    - Host : EC2 public Ip
    - Select [SFTP](SSh File Tranfer Protocol)
    - Logan Type : Key File
    - upload key file
    - User : ec2-user

    - connect

    - upload code

--- In instance 

    - ls

    - cd [directory]

    - npm install

    - node start