_________________ L-69 (Deployment) ___________________ 

    - deployment operation
    - getting a vitual private server (vps)
    - using Docker Machine
    - Create Optimized Production Images

_________________ L-70 (Deployment Options) ___________________ 

 - single-host deployment

 - cluster deployment

 - cluster Solutions
    - docker swarm
    - kubernetes

_________________ L-71 (Getting A Virtual Private Server) ___________________ 

- VPS Options
    - Digital Ocean
    - Google Cloud Platform
    - Microsoft Azure
    - Amazon Web Services(AWS)

_________________ L-72 (Installing Docker Machine) ___________________  

- website
    - github.com/docker/meachine/releases

_________________ L-73 (Provisioning A host) ___________________      

- digital ocen
    - Account -> API -> Generate new token
        - tocken name

- docker-machine create ` ([\] for linux)
>> --driver digitalocean `
>> --digitalocean-access-token [token]
>> [name]

- website
    - docs.docker.com/machine/drivers

    
_________________ L-74 (connection to the host) ___________________

- docker-machine ls

- docker-machine ssh vidly


_________________ L-75 (Defining the Production Configuration) ___________________

- create new file
    - docker-compose.prod.yml

- service:
    web:
        build: ./frontend
        ports:
            - 80:3000    
        restart: unless-stopped        

    api:
        build: ./backend
        ports:
            - 3001:3001
       environment:
            DB_URL : mongodb://db/vidly
       command:./docker-entrypoint.sh
       restart: unless-stopped

    db:    
        image:mongo:4.0-xenial
        ports:
            - 27017:27017
        volumes:
            -vidly:/data/db
        restart: unless-stopped

volumes:
    vidly:                     

_________________ L-76 (Reducing the Image size) ___________________    

- cd frontend

- npm run build

- create new file in front-end
    - Dockerfile.prod

-
    ## Step 1 : Build Stage ##

    - FROM node:14.16.0-apline3.13 AS build-stage
    - WORKDIR /app
    - COPY package*.json
    - npm install
    - COPY . .
    - RUN npm run build 

    ## Step 2 : Production ##

    - FROM nginx:1.12.alpine
    - RUN addgroup add && adduser -S -G app app
    - USER app
    - COPY --from=build-stage /app/build /usr/share/nginx/html
    - EXPOSE 80
    - ENTRYPOINT ["nginx","-g", "daemon off;]

- docker build -t vidly_web_opt -f Dockerfile.prod . (for front-end folder check image size)    

- docker images

- in docker compose file

    web:
        build:
            context:./frontend
            dockerfile:Dockerfile.prod
        ports:
            - 80:80    

- docker images       

_________________ L-77 (Deploying the application) ___________________

- docker-machine ls

- docker-machine env vidly

- eval $(docker-machine env vidly)

- docker images

- docker-compose -f docker-compose.prod.yml up -d

--- in backend Dockerfile

    - RUN addgroup add && adduser -S -G app app
    - RUN mkdir /app && chown app:app /app (fisrt is user , second is group)
    - USER app

- docker-compose -f docker-compose.prod.yml up -d --build (for re-build)    

_________________ L-78 (Troubleshooting Deployment Issues) ___________________

- docker-machine ls

- [ip]:3001/api (hit in browser) this for back-end

- docker logs [CID]

--- RUN addgroup add && adduser -S -G app app
--- USER app
    - remove from front-end file 
    - if we want to use then nginx config read and set user

- docker-compose -f docker-compose.prod.yml up --build    

- docker ps


-   ENV REACT_APP_API_URL= http://[ip]:3001/api (add in react docker file)

- docker-compose -f docker-compose.prod.yml up --build

--- recapt

    - docker-machine ls
    - docker-machine env vidly
    - eval $(docker-machine env vidly)
    - docker-compose up
        (create .sh file for this commonds)

_________________ L-79 (Publishing Changes) ___________________        

- docker ps

- server:
    web:
        build:
            context:./frontend
            dockerfile:Docker.prod
        image:vidly_web:1

- docker-compose -f docker-compose.prod.yml up -d --build            

- docker ps