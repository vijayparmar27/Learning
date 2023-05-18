--- create role for codeDeploy

    - create new role

    - select CodeDeploy 

    - give role name

--- create role for EC2-Instance for s3 full access

    - create new role

    - seletc ec2

    - select S3

    - give role name


--- create ec2 instance [amazonLinux] [install codeDeploy Agent]

    - sudo yum update

    - sudo yum install ruby -y

    - sudo yum install wget -y

    - wget https://aws-codedeploy-us-east-1.s3.us-east-1.amazonaws.com/latest/install

    - chmod +x ./install

    - sudo ./install auto

    - sudo service codedeploy-agent status

    - sudo service codedeploy-agent start

--- EC2 instance give tags 
    - key : Name
    - value : dev



-------------- code Deploy create codeDeploy Aplication and codeDeloy Group -----------------

--- create apllication and group

    - select (Deploy -> Applications)

    - give application name

    - select( EC/On-premises ) [computer platform]

    - select ( create deployment group)

    - give group name 

    - give role we created CodeDeployRole

    - select (IN-place)

            - Amazon EC2 instance

            - give instance tag (key : Enviroment , value : Development)

            - install aws codeDeploy Agent (Never)

            - deployment settings (CodeDeployDefaultAllAtOnce)

            - load balancer [descable]

            - create deployment group (click)

--- 









