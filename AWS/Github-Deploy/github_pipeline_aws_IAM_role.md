

--- create Identity providers

    - go to IAM console

    - click on Identity providers

    - click on Add provider

    - select OpenID Connect

    - Provider URL

        - https://token.actions.githubusercontent.com [paste]

    - Audience

        - sts.amazonaws.com [paste]

    - click on Assign role

        - create new role

        - select Audience : sts.amazonaws.com 

        - select policies

            - s3 full access

            - code Deploy full access

        - give role name

        - that role assign that provider

--- create s3 bucket

--- github

    - set secret in github action secret

    - create /.github/workflows/

    - create file and name is deploy.yml

    - create push code