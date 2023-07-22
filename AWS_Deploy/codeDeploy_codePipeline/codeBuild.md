// need buildspec.yml in your code

--- create codeBuild

    - go to codebuild

    - click o create build project

    - give name

    - select Scource 

        - AWS CodeCommit

        - Amazon S3

        - GitHub

        - etc...

    - select Environment Image

        - i select Managed image

    - select Operating System

        - Amazon Linux 2

    - select new servoce role

    - select Use a buildspec file

    - [Artifacts] select Amazon s3

    - give s3 bucket name

    - Artifacts packaging

        - select Zip

    - Create build project