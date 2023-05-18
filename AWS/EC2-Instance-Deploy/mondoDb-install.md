--- create ec2 instance

    - [https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-amazon/] for instanll mongodb in aws EC2 instance

    - sudo nano ./etc/yum.repos.d/mongodb-org-6.0.repo (open Editer)

    - [paste this code]
        - [mongodb-org-6.0]
          name=MongoDB Repository
          baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/6.0/x86_64/
          gpgcheck=1
          enabled=1
          gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc

    - sudo yum install -y mongodb-org (To install the latest stable version of MongoDB, issue the following command)


    - sudo systemctl start mongod ( Start MongoDB )

    - sudo systemctl daemon-reload

    - sudo systemctl status mongod

    -  sudo nano /etc/mongod.conf ([Command])
          - open editor than
            - change [bindIp] => 0.0.0.0
            - save

    - sudo systemctl restart mongod

    - mongo

    - use admin

    - db.createUser({user:"dev_swaggy",pwd:"Vijay123",roles:[{role:"root",db:"admin"}]})

    -  exit

    - sudo nano /lib/systemd/mongod.service

        - open editor than

          - ExecStart=/usr/bin/mongod --quiet --auth --config /etc/mongod.conf

          - save

    - mongosh -u dev_swaggy -p --authenticationDatabase admin

    - db.runCommand({connectionStatus:1})


--- Open MongoDB Compose

    - host : instance public ID

    - post : 27017

    - Authentication : [username/password]
