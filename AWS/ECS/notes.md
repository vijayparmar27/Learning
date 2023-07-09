
--- first create Cluster

    - give name 

    - select subnets

    - select Amazon EC2 instances

        - give all details

--- creaste Task definitions

    - Port mappings

        - Host port [80]

        - Container port [80]

        - Protocol [tcp]

        - App protocol [None]

    - Environment

        - CPU [.25 vCPU]

        - Memory [.5 GB]

        - select Task roles 

        - Task execution role [None]

        - Network mode [default]

    - create

--- create Service

    - Compute options

        - select Launch type

            - Launch type [EC2]

    - select Service

    - select Task Definition Family

    - select Load balancing

    - create