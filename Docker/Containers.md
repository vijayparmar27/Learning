
------------------------ Working With Containers -----------------------

_________________  L-46 (starting Containers) ___________________

- docker images

- docker ps 

- docker run react-app

- docker run -d react-app ([-d] detech also container run in background)

- docker ps 

- docker run -d --name blue-sky react-app (give container name)

- docker ps

_________________  L-47 (Viewing the logs) ___________________

- docker ps

- docker logs [CID]

- docker logs --help

- docker logs -n 5 -t [CID] ([-n] is last number of logs, [-t] timestamp)

_________________  L-48 (Publishing Ports) ___________________

- docker ps

- docker run -d -p 4000:3000 --name C1 react-app

- docker ps

_________________  L-49 (Executing Commands in Running Containers) ___________________

- docker exec c1 (if container already runing than use this command for run window or linux command)

- docker exec c1 ls

- docker exec -it c1 sh ([c1] is container name)

- ls 

- pwd

- exit

- docker ps

_________________  L-50 (Stopping and Starting Container) ___________________

- docker stop c1 ([c1] is container name)

- docker ps

- docker start c1

_________________  L-51 (Removing Container) ___________________

- docker container rm c1 ([c1] is container name)

- docker rm c1

- docker rm -f c1 ([-f] if container in run than forcely remove)

- docker ps

- docker ps -a

- docker ps -a | grep c1

- docker container prune

- docker ps

- docker ps -a

_________________  L-52 (Containers File System) ___________________

- docker ps

- docker exec -it [CID] sh (run primary container)

- echo data > data.txt 

- docker exec -it [CID] sh (run secondary container)

- ls | grep data

_________________  L-53 (Persisting Data using Volumes) ___________________

- docker volume (also create on cloude)

- docker volume create app-data (create volume)

- docker volume inspeact app-data

- docker run -d -p 4000:3000 -v app-data:/app/data react-app

- docker exec -it [CID] sh

- cd data

- echo data > data.txt

- cd ..

- ls -l

--- project docker file

- WORKDIR /app
- RUN mkdir data

- docker build -t react-app

- docker exec -it [CID] sh

- cd data

- echo data > data.txt

- exit

- docker rm -f [CID]

- docker run -d -p 5000:3000 -v app-data:/app/data react-app

- docker exec -it [CID] sh

- cd data

- ls

_________________  L-54 (Coping File Between the host and container) ___________________

- docker ps

- docker exec -it [CID]

- echo hello > log.txt

- exit

- dokcer cp [CID]:/app/log.txt . ([CID] is source and [/:app/log.txt] is destination)
    - container host copy

- docker cp secreat.txt [CID]:/app    

- docker exec -it [CID] sh

_________________  L-55 (Sharing the Source code with a container) ___________________

- docker run -d -p 5001:3000 -v app-data:/app/data react-app

- docker run -d -p 5001:3000 -v $(pwd):/app react-app

- docker run -d -p 3001:3000 -v ${PWD}:/app docker_demo

- docker logs -f [CID]
