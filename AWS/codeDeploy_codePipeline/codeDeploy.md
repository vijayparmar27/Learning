// need appspec.yml in your code

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

--- create deployment 

    - select sourcec of code for deployment

        - Amazon S3 or Github

        - i select github beacuse i already create build on s3 useing codeBuild

        - give s3 URI (s3://codebuildapp-v/codebuild-codeBuildApp-service-role)


        - Revision file type

            - .Zip

        - create deployment


--- create deployment group with ASG [Auto Scaling Groups] and Load Balancers


    --- first create template for ec2 instance

        - click on Advanced details

        - IAM instance profile 

            - give role for s3 full access

        -  past on User data 

             #!/bin/bash
            sudo yum update
            sudo yum install ruby -y
            sudo yum install wget -y
            cd /home/ec2-user
            wget https://aws-codedeploy-us-east-1.s3.us-east-1.amazonaws.com/latest/install
            sudo chmod +x ./install
            sudo ./install auto
            sudo service codedeploy-agent status
            sudo service codedeploy-agent start

        - create a template


    --- Create target group 

        - give tg name

        - select http and port for your application like 4000

        - create target group

    --- first create security group for Aplication Load Balancer

        - create security group

        - give name

        - set Inbound rules

            - like http port 80

            - http port 4000

    --- create Aplication Load Balancer

        - give name 

        - select security group created for ALB

        - select port 80 and select we create a tg group

        - create application load balancer

    --- create Auto Scaling Groups

        - give name 

        - select ec2 - instance template

        - select create tg - group 

        - and etc options .....

    --- create codeDeloyGroup in codeDploy

        - select ASG

        - select create ASG 

        - select target group

        - select created target group



