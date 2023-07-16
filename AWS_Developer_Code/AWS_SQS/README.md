

--- create SQS in aws 

    - click on "Create queue"

    - type [Standard]

    - give queue name

    - visibility timeout

        - it use for if someone pull queue and not delete than queue will appear after given time (0s - 12h)

    - Message retention period

        - for how many periods of time queue will be stored and after given time queue will be deleted (1m - 14d)

    - Maximum message size

        - 256 kb

    - Delivery delay

        - for if you send message than queue massage show after given in SQS (0s - 15m)

    - Receive message wait time

        - this for pulling messages from queue time if queue is empty (0-20s)

--- SQS with S3 Bucket

    - create 

    - add policy for accessing sqs for s3 bucket

    - {
        "Version": "2012-10-17",
        "Id": "example-ID",
        "Statement": [
            {
                "Sid": "Example SNS topic policy",
                "Effect": "Allow",
                "Principal": {
                    "Service": "s3.amazonaws.com"
                },
                "Action": [
                    "SNS:Publish"
                ],
                "Resource": "SNS-topic-ARN", // change this for your's
                "Condition": {
                    "ArnLike": {
                        "aws:SourceArn": "arn:aws:s3:*:*:[[bucket-name]]" // give s3 bucket name
                    },
                    "StringEquals": {
                        "aws:SourceAccount": "[[bucket-owner-account-id]]" // give your aws account id
                    }
                }
            }
        ]
     } 

    - update policy

    - add queue in s3 bucket

