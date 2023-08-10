--- create API Gateways

    - GOTO Lambda Function Console

        - create lambda function

            - give name

            - create function

        - create test event

    - GOTO API Gateway Console

    - we create REST API

    - click on Build

    - Choose the protocol [REST]

    - Create new API

        - New API

        - give API name

        - Endpoint Type [Regional]

        - clickon Create API

    -   API > Resources

    - click on Actions

        - click on create Method

        - Method [GET]

        - click on vaildate

    - /- GET - Setup

        - Integration type [Lambda Function]

        - Use Lambda Proxy integration [Enable]

        - select region

        - click created Lambda Function

        -  save

    - GOTO Lambda Function Console

        - click on Permission

        - view permissions for API Gateway

    - GOTO Lambda Function Console

        - Click on Action

            - click on create Resources

            - Resource Name [houses]

            - Resource path [/houses]

            - create Resources

            - Click on Action

                - create Method

                - select Method [GET]

                - same as we created before

        - Click on Action

            - click on Deploy API

                - Deploy stage [create new stage]

                - give stage name

                - click on Deploy

        - GOTO TO Stage

            - copy Invoke url

--- API Gateways Stages And Deployment

    - change in first lambda function

        - change respone like V1

        - save

        - Click on Action

            - Pubilsh new version

            - click on publish

        - change respone like V2

        - save

        - Click on Action

            - Pubilsh new version

            - click on publish

        - click on Actions

            - click on create Alias

            - give name [DEV]

            - version [$LATEST]

            - click on create

        - click on Actions

            - click on create Alias

            - give name [TEST]

            - version [2]

            - click on create

        - click on Actions

            - click on create Alias

            - give name [PROD]

            - version [1]

            - click on create

    - GOTO API Gateways Console

        - API > Resources 

        - Click On Create Resources

            - give Resource Name [stagevariables]

            - click on Create Resource

        - Click On Action

            - in created resource in create method

            - click on Create Methods

                - select [GET]

                - Integration type [lanbda function]

                - Use Lambda Proxy integration [Enable]

                - give lambda function we create alias [name:${stageVariables.lambdaAlias}]

                - save


            - that give this type of resource for add in resource

                --function-name "arn:aws:lambda:ap-south-1:974898822426:function:apiGateWays-proxiy:${stageVariables.lambdaAlias}"  --source-arn "arn:aws:execute-api:ap-south-1:974898822426:kb4hcxmefl/*/GET/stagevariables"  --principal apigateway.amazonaws.com  --statement-id 2ebf67e5-5b6b-4b9c-8514-1de83e52999e  --action lambda:InvokeFunction

    - GOTO Lambda Function Console

        - click on Configuration 

        - click on Permisssion

            - goto Resource-based policy statements

            - click on add

                - select [AWS service]

                - Service [API Gateways]

                - Statement ID  [2ebf67e5-5b6b-4b9c-8514-1de83e52999e] from above responce

                - Source ARN [arn:aws:execute-api:ap-south-1:974898822426:kb4hcxmefl/*/GET/stagevariables]

                - Action [lambda:InvokeFunction]

                - save

    - GOTO API Gateway Console

        - click on /stagevariables - GET

        - click on test

        - Stage Variables

            - lambdaAlias [PROD] [TEST] [DE]

        - Click on Action 

            - click on Deploy API

            - create new stage (dev)

            - create

        - API > Stages

            - click on Stage Variables

            - lambdaAlias [DEV]

        - Click on Action 

            - click on Deploy API

            - create new stage (test)

            - create

        - API > Stages

            - click on Stage Variables

            - lambdaAlias [TEST]

        - Click on Action 

            - click on Deploy API

            - create new stage (prod)

            - create

        - API > Stages

            - click on Stage Variables

            - lambdaAlias [PROD]

        - and check with url

--- 

