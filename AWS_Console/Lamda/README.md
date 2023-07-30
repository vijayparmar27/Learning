--- Lamda Function With ALB(application load balancer)

    - create lamda function

    - create Load Balancer for Lamda function

        - click on create load balancer

        - give name

        - select [Internet-facing]

        - select [IPv4]

        - select VPC subnets

        - create security group for ALB

            - give name

            - give description

            - Inbounds rules

                - type [HTTP]

                - Protocol [TCP]

                - POrt [80]

                - Source [AnyWhere]

            - create security group 

        - select created security group

        - create target group

            - Choose target type [Lambda Function]

            - give name

            - select Lembda function

            - click on create target group

        - Listen and routing 

            - Protocol [HTTP]

            - Port [80]

            - select craeted target group

        - click on create ALB

    - GOTO Lambda Function

        - select Monitor 

            - view Metrics

            - view Logs 
        
        - if you want to enable Multi value header for ALB than

            - select Attribute

                - click on edit

                - click on NO Butten

                - save chnages

        - ALB is Lambda function triger


        - select Configutarion

            - select Permission

                - view Resource-based policy statements

                - view policy statements from access policy for lambda function for ALB



--- Lambda function Asynchonous Invocation Settings


    - in Lambda function

    - select Configutarion

    - select Asychronous Invocation

    - you can edit the configuration

    - click on edit

    - you can edit Retry attempts for Fail Fuction

        - for 1 , 2 attempts for fail function for asynchonous invocation

    - if fail function select attempt than also we send in Dead-letter Queue

    - that for first we have to create SQS Or SNS

    - we Create SQS

    - GOTO SQS Console

        - create queue

        - select [Standard]

        - give name

        - create queue

    - GOTO Lambda function asynchonous invocation settings

    - select SQS

    -  select create queue (SQS)

    - save 

    - if any asynchonous invocation Lambda function failed given after retry than push in SQS



--- Lambda function With EventBridge

    - create fambda function

    - GOTO eventBridge Console

        - click on create rule

        - give name

        - Define pattern

            - select Schedule

            - select Fixed rate every 

                - give timer for cron

                - like [1 MIN]

        - Select target 

            - Target [Lambda Function]

            - select function name

        - click on crate

    - GOTO Lambda Function

    - click on Configuration

        - select Permission

        - view Resource-based policy statements

        - we can view policy statements for EventBridge

    - this eventBridge call lambda function every 1 minute 

    - we can view logs also



--- Lambda With S3 Notification Service

    - create lambda function

    - GOTO S3 Console

    - create S3 Bucket

        - give name

        - give same region as lambda function

        - create Bucket

    - Open Created Bucket

    - click on Properties

    - in Properties GOTO Event Notification

    - click on create Notification

        - give name

        - Event Types

            - select All object create events

        - Destination

            - select Lambda function

            - save changes

    - GOTO Lambda Function Console

    - we view add one trigger in lambda Function Console

    - trigger is S3

    - click on Configuration

    - click on Permission

    - view Resource-based policy statements

    - we can view policy statements for S3 policy

    - this s3 Lambda function trigger is Work on if any Object Put on S3 Bucket

    - this Lambda function trigger 


--- Lambda Event Source Mapping in SQS

    - create Lambda function

    - GOTO SQS Console

        - give name

        - create Queue

    - GOTO lambda function 

    - click on Configurations

        - In Execution role

            - click on Role and Edit

            - add policy for SQS Lambda

                - AWSLambdaSQSQueueExecutionRole
            - add and save

        - this role allows to Lambda function to SQS

    - click on Add trigger

        - select SQS

        - how many messages received in single batch

        - Enable trigger [true]

        - add

    - if any message add in SQS than Lambda function triggers








        
