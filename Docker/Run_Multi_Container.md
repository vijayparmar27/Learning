
------------------------ Running Multiple Containers -----------------------

    - FrontEnd -> react
    - Backend  -> node
    - Database -> mongodb

    - docker compose
    - docker networking
    - database migration
    - Running automated test

_________________  L-57 (Installing Docker Compose) ___________________

- (website) doc.docker.com/compose/install

- docker-compose --version

_________________  L-58 (Cleaning Up Our Workspace) ___________________

- docker images

- docker ps

- docker image ls -q ([-q] for all images ids)

- docker container rm -f $(docker container ls -q)

- docker container rm $(docker ps -a -q) // for remove all containers

- docker images $(docker image ls -q)

- docker image rm -f $(docker image ls -q)

- docker images

- docker ps -a

_________________  L-59 (The Simple Web Application) ___________________

- docker-compose up

_________________  L-60 (JSON and YAML formats) ___________________

- data.json
    {
        "name" : "dev",
        "price" : 00,
        "is_pulisher" : true,
        "tags::["softwere","develops"]
        "auther" : {
            "first_name": "dev",
            "last_name": "v"
        }
    }

- data.yml

    name:dev
    price:"00"
    is_pulisher:true
    tags:
        - softwere
        - develops    
    auther:
         first_name:dev
         last_name:v    
_________________ L-61 (Creating a compose file) ___________________         

- create new file

    - docker-compose.yml

- version :

- website search (docker compose file)

- docs.docker.com/compose/compose-file/

-- version : "3.8"
-- services :
    web: 
        build : ./backend
        ports : 
            - 3000:3000
    api:
        build:./backend
        ports:
            - 3001:3001
        environment:
            DB_URL:mongodb://db/vidly
        volumes: ./backend:/app    
    db:
        image:mongo:4.0-xenial
        ports:
            - 27017:27017
        volumes:
            - vidly:/data/db                        
-- volumes:
    vidly:

_________________ L-62 (Building Images) ___________________           

- docker-compose (press enter)

- docker-compose build --help

- docker-compose build

- docker images

- docker-compose build --no-cache (rebuild not useing cache)

_________________ L-63 (stating and stoping the application) ___________________ 

- docker-compose up --help 

- docker-compose up  (for start)

- docker-compose up --build (rebuild)

- docker-compose up -d (run in background)

- docker-compose ps

- docker-compose down (for stop)

_________________ L-64 (docker networking) ___________________ 

- docker-compose up -d (run in background)

- docker network ls

- docker ps

- docker exec -it [CID] sh

- ping api

- exit

- docker exec -it -u root [CID] sh

- ifconfig (container ip address)

_________________ L-65 (Viewing Logs) ___________________ 

- docker-compose logs

- docker-compose logs --help

- docker ps

- docker logs [CID] -f ([-f] follow logs output)

_________________ L-66 (Publishing Changes) ___________________ 

