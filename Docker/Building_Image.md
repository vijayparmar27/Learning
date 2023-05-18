
------------------------ Building Image -----------------------

 - docker version 

 - docker pull ubuntu  || (or)

- docker run ubuntu

- docker ps (docker runing containers)

- docker ps -a (docker runing all containers)

- docker start -i ContainerID(CID)

_________________  L-29 (Image and Container) ___________________

---- IMAGE
    - A Cut Down Os
    - Third party libraries
    - Application Files
    - Environment Variables

---- CONTAINER
    - provides an isolated environment
    - can be stopped & restarted
    - is just a process !

- docker ps

- docker run -it ubuntu (for new start container)

_________________  L-31 (Dockerfile Instructions) ___________________

---- Dockerfile
    - FROM
    - WORKDIR
    - COPY
    - ADD
    - RUN
    - ENV
    - EXPOSE
    - USER
    - CMD
    - ENTRYPOINT
 
_________________  L-32 (Choice the Right Base Image) ___________________

- in project directory create new file

- Dockerfile (that create new file name)

- FROM  
    - Base of Image
    - like operating system like window or linux
    - and also run time environment

- docker web site
    - docs.docker.com/sample

    - hub.docker.com (search node)

- FROM node:latest (nor use and also specify version)

- in web site search node -> tag -> search version for node
    - browser search (alpine)

- FROM node:14.16.0-alpine3.13

- docker build -t react-app . ([-t] tag , react-app is folder name , [.] is directory)

- docker image ls

- docker run -it react-app

- docker run -it react-app sh

- node --version

_________________  L-33 (Coying File and Folder) ___________________

- FROM node:14.16.0-apline3.13

-- COPY
    - copy one or more files or dictionaries from current directory to docker

- docker build -t react-app . ( [.] current directory)

- COPY packege.json /app ( [/] is create directory in docker if is not exist)

- COPY package.json README.md /app/ ( [/app/] for multiple file copy in that directory)

- COPY package*.json /app/

- COPY . /app/ ([.] copy all files)

- also 

- WORKDIR /app (for docker current working directory)

- COPY . . 

- COPY ("hello world.txt",".")

- FROM node:14.16.0-apline3.13
- WORKDIR /app
- COPY . .

- ADD (use when compress files or file from url get)

- docker build -t react-app .

- docker run -it react-app sh

- ls

_________________  L-34 (Excluding File and Directory) ___________________

- create new file that name is

- .dockerignore 
    - just like .gitignore

- node_modules/

- docker run -it react-app sh

- ls -1

- npm install 

_________________  L-35 (Runung Commonds) ___________________

- FROM node:14.16.0

- WORKDIR /app

- COPY . .

- RUN npm install

- docker build -t react-app . (build docker Image)

- docker run -it react-app sh

- ls -l

_________________  L-36 (Setting Environment Variables) ___________________

- FROM node:14.16.0

- WORKDIR /app

- COPY . .

- RUN npm install

- ENV API_URL=https://api.myapp.com/

- docker build -t react-app .

- docker run -it react-app sh

- printenv

- printenv API_URL

- echo $API_URL

_________________  L-37 (Exposing Ports) ___________________

- EXPOSE 3000 (app runing port)

_________________  L-38 (Setting User) ___________________

- docker run -it alpine

- adduser (this commmond for add user)

- addgroup app (this group create for set user primary group)

- adduser -S -G app [username] ([-S] for system user ,[-G] set user primary group)

- groups app ([app] is user name, this commond for show user groups)

- addgroup app && adduser -S -G app [username]

- groups [username]

- FROM node:14.16.0
- WORKDIR /app
- COPY . . 
- RUN npm install
- ENV API_URL=https://api.myapp.com/
- EXPOSE 3000
- RUN addgroup app && adduser -S -G app [username] (this comond for create linux user)
- USER [username] (create linux user username)

- docker build -t react-app .

- docker run -it react-app sh

- whoami (for current linux user)

- ls -l

-----------
- FROM node:18.13.0-alpine3.17
- RUN addgroup docker_demo && adduser -S -G docker_demo app
- WORKDIR /app
- COPY package*.json .
- RUN chown -R app:docker_demo /app (for permission)
- USER app
- RUN npm install
- COPY . .
- ENV API_URL=http://api.myapp.com/
- EXPOSE 3000

_________________  L-39 (Defining Entrypoints) ___________________

- docker run react-app npm start 

- FROM node:14.16.0
- RUN addgroup [groupName] && adduser -S -G app [username] 
- USER [username]
- WORKDIR /app
- COPY . .
- RUN npm install
- ENV API_URL=https://api.myapp.com/
- EXPOSE 3000

- docker build -t react-app .

- docker run react-app npm start

# shell form

- CMD npm start

- ENTRYPOINT npm start

# Exec form 

- CMD ["npm","start"]

- ENTRYPOINT ["npm","start"]

- if use [ENTRYPOINT] than docker run react-app --entrypoint

--- after difine CMD then not need to 
    - docker run -it docker_demo sh ([sh] not nedd)
    - docker run -it docker_demo
_________________  L-40 (speed Up Build ) ___________________

- docker history react-app

- FROM node:14.16.0
- RUN usergroup [groupName] && adduser -S -G [groupName] [username]
- USER [userName]
- WORKDIR /app
- COPY package*.json .
- RUN npm install
- COPY . .
- ENV API_URL=https://api.muyapp.com/
- EXPOSE 3000
- CMD npm start

- docker build -t react-app .

_________________  L-41 (Removing Images) ___________________

- docker images

- docker image prune

- docker ps 

- docker ps -a

- docker container prune

- docker image prone

- docker images

- docker image (press Enter)

- docker image rm [imageName || imageID]

- docker images

_________________  L-42 (Tagging Images) ___________________

- docker build -t react-app .

- docker images

- docker build -t react-app:1 .

- docker images

- docker image remove react-app:1

- docker image tag react-app:latest react-app:1 (first exsiting tag , second is new tag )

- docker images

--- change in code

- docker build -t react-app:2 .

- docker images

- docker image tag [IID] react-app:latest 

- docker images

_________________  L-43 (Sharing Images) ___________________

- website
    -hub.docker.com
    - create new account
    - create repository
    - give name of repository
    -- also if we want so link with github than if we push code in github docker auto create images
    - create -> click

- [username]/[repositoryName]

- docker image tag [IID] [username]/[repositoryName]:2

- docker login
    - username : 
    - password :

- docker push [username]/[repositoryName]:2

--- change in project file

- docker images

- docker image tag react-app:3 [username]/[repositoryName]:3

- docker push [username]/[repositoryName]:3

_________________  L-44 (saving and loading images) ___________________

- docker image save --help

- docker image save -o react-app.tar react-app:3 ([.tar] is like .zip file in window and .tar file in linux, [react-app:3] is specify image)
    |   
     -- this commond use for saving file in dir

- docker image load -help

- docker image rm react-app:3

- docker images

- docker image load -i react-app.tar