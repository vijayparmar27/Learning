--- create cluster for ecs [vijayparmar000/node-app:latest]

    - click on create cluster

    - give name

    - select default VPC

    - In Infrastructure

        - select Amazon EC2 instance

        - create new ASG

        - Amazon Linux 2 [operating system]

        - t2.micro [EC2 Instance type]

        - min (0) max (1) [Desired capacity]

        - select SSH key pair

    - create cluster

--- create Task definitions

    - give name (nginxdemos-hello)

    - Container

        - give name (nginxdemos-hello)

        - nginxdemos/hello [image url]

        - 80 [Container port]

        - TCP [protocol]

    - AWS Fargate [App environment]

    - linux [operating system]

    - select lowest available CPU anf memory

    - if want api call than

        - select Task role

    - create Task definations

--- create security groups

    - create fisrt group

        - sg-alb-ecs [give name]

        - ABL for ECS SG [Desciption]

        - Inbound rules

            - 80 : anywhere

        - create

    - create second securty groups

        - nginx-demo-sg [give name]

        - SG for NGINX [Desciption]

        - Inbound rules

            - port All TCP : sg-alb-ecs [select]

            - Allow traffic from ALB [Description]

        - create

--- In Cluster create Deploy

    - Deployment configuration

        - Service [Application type]

        - nginxdemos-hello [Family]

        - nginxdemos [Sservice name]

    - Load balancer

        - Appication Load Balancer [select]

        - create a new load balancer

        - DemoALB (give name)

        - 80 [port]

        - HTTP [Protocol]

        - nginx-esc [Target group name]

        - HTTPS [Protocol]

        - / [Health check path]

        - 20 [health check period]

    - Networking

        - nginx-demo-sg [select security group]

    - Deploy

--- changes

    - ALB security group [sg-alb-ecs]

    - HTTP : 80 [ALB listeners]

---------------------------------------------


--- create cluster

    - select cluster template

        - Networking only

    - give cluster name

    - create new vpc

    - craete

--- create Task Definition

    - select launch type compatibility

        - FARGATE

    - give name

    - select Task role

    - 









-------------------------------------------------------------

--- create cluster

    - click on create cluster

    - Select cluster template

        - Networking only

    - give cluster name

    - create new VPC

    - create cluster

---- create task Definition

    - click on create new defination 

    - give name for task definition

    - select Task Role [for api calls]

    - operating Linux

    - Add container

        - give constainer name

        - Image [kodekloud/ecs-project1]

        - 3000 [Port mapping] : tcp

    - create task definition

---- In cluster create service

    - click on create

    - Lunch Type

        - AWS fargate

    - Linux [OS]

    - select task defination 

    - give server name

    - Number of tasks [2]

    - select that VPC for created spacific 

    -  create new security group

        - TCP :: 3000 : anywhere

    - create service

--- 
 