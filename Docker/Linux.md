 Docker (code with Mosh)

 - docker version 

 ---------------------------------- Linux (Ubuntu) -------------------------------------

*******************************
 ctrl + L (clear terminal)
 ctrl + W (remove type word)
******************************

_________________  L-13 (runing Linux) ___________________

--- hub.docker.com

-- search ubuntu

- docker pull ubuntu  || (or)

- docker run ubuntu

- docker ps (docker runing containers)

- docker ps -a (docker runing all containers)

- docker run -it ubuntu (for start ubuntu in docker)

--- Linux Commonds 

- whoami (show current )

- echo hello 

- echo $0 (location of shell program)

- history (show history of commands)

- !2 (use history commonds)

_________________  L-14 (Managing Packeges) ___________________

-- apt (packege manage like npm , yarn , ets...)

- apt (press Enter key)
   |
    ----> list install reinstall remove autoremove update upgrade full edit satisfy

- apt-get (also packege manager for more details search on google or youtube)

- apt list (all packege list in linix) 

- apt install nano (not work beacuse apt not that packege)

- apt update (packege database updated )

- apt install nano

- nano (Text Editor)

***** ctrl + L (clear terminal)

- apt remove nano (for remove packege)


_________________  L-16 (Navigation File System) ___________________

- pwd (print working directory)

- ls

- ls -1

-ls -l

- cd ect/ (press enter --> navigate to that directory)

- cd ../.. (navigate to back in directory)

- cd /root

- cd ~

_________________  L-17 (Manupulating File and Directories) ___________________

- cd ~

- mkdir test

- ls

- mv test docker (rename folder name test to docker)

- touch hello.txt (create file)

- touch file1.txt file2.txt (create multiple files)

- ls -1

- mv hello.txt hello-docker.txt (rename file hello.txt to hello-docker.txt)

- mv hello.txt /directory path (move file to that path directory path are relative or absolute)

- ***** ctrl + W (remove type word)

- rm hello.txt (remove file)

- rm file* (remove all file start name with "file")

- rm -r docker (remove folder)

_________________  L-18 (Editing And Viewing Files) ___________________

- apt install nano

- nano file.txt

- cat (concatenate or combine)

- cat file1.txt (read file)

- more file1.txt (read file for next page to go press space or enter)

- apt install less (for read file scroll up and down)

- less file1.txt (read file and go to next page down and previous page ^ )

- head -n 5 file1.txt (read for file fist number of lines)

- tail -n 5 file1.txt (read for file last number of lines)

_________________  L-19 (Redirection) ___________________


- cat file1.txt > file2.txt (write file2.txt from file1.txt or copy file inside contain)

- cat file1.txt file2.txt (read files )
    
- echo hello > hello.txt

- ls -l /etc >files.txt

-ls -1 /etc > files.txt

cat files.txt

---- also (<) is common if you want to more research go to google or youtube

_________________  L-20 (Search for text) ___________________

- grep (globel regular expression print)

- grep hello file1.txt (search in file1.txt)

- grap -i hello file1.txt (-i for case insensitive search)

- grep hello file* (all file search)

- grep -i -r hello . (-r for recursive)

- grep -ir hello . (. is path of directory)

_________________  L-21 (finding files and directories) ___________________

- ls 

- find

- ls -a (-a for all)

- find path

- find -type d (directory)

- find -type f (file)

- find -type f -name "f*"

- find -type f -iname "F*" (-iname case insensitive name)

- find / -type f -name "*.py" (find ".py" file from (/) root directory)

- find / -type f -name "*.py" > python-files.txt

- cat python-files.txt

_________________  L-22 (Chaning Commonds) ___________________

- mkdir test ; cd test ; echo done

- cd ..

- mkdir test && cd test && echo done (if any commonds fail this common not execute)

- mkdir test || echo "direactory exist"

- ls /bin

- less file.txt

- ls /bin | less

- ls /bin | head

- ls /bin | head -n 5

- mkdir hello;\
cd hello;\
echo done

_________________  L-23 (Environment variables) ___________________

- printenv (print all env)

- printenv PATH (path in windo or linux are view for programs)

- echo $PATH

- export DB_USER=dev (set in current turminal session)

- echo $DB_USER

- printenv DB_USER

- exit

- docker ps 

- docker ps -a

- docker start -i ContainerID(CID)

- echo $DB_USER (not value becouse sission not availble in current cmd)

- cd ~

- ls -a

- nano .bash (set environment variables permently)

- echo DB_USER=dev >> .bashrc (>> means append)

- cat .bashrc 

- docker ps -a

- docker start -i ContainerID(CID) 

- echo $DB_USER 

- echo COLOR=black >> .bashrc

- echo $COLOR (not value becuse .bashrc file reload only one time when linus start)

- source .basehrc

_________________  L-24 (Managing Processes) ___________________

- ps (all running programs or processes for view)

- sleep 3 & ([&] is backgraund run)

- sleep 100 &

- ps 

- kill 38 (38 is process id [PID] for process termination)

- ps

_________________  L-25(Managing Users) ___________________

-- useradd (add user)
-- usermod (modify user)
-- userdel (delete user)

- useradd (press enter for show options)

- user -m dev

- cat /etc/passwd (show all create users)

- usermod -s /bin/bash dev (-s shell)

- cat /etc/shadow

- docker ps

- docker exce -it [CID] bash (-it interactive) 

- exit

- docker exec -it -u dev [CID] bash

- cat /etc/shadow

- cd ~ (home directory)

- pwd (path for home directory)

- userdel dev

- adduser (this commond is new for add user)

_________________  L-26(Managing Groups) ___________________

-- groupadd (add group)
-- groupdel (delete group)
-- groupmod (modify group)

- groupadd developers

- cat /etc/group

- usermod (press enter for show options)

- usermod -a developers dev

- cat /etc/passwd | grep dev

- grep dev /etc/passwd

- groups dev

_________________  L-27(Permissions) ___________________

- cd/home

- echo echo hello > deploy.sh

- cat deploy.sh

- ls -l

- ./deploy.sh

-- chmod ( u(user) g(group) o(others))

- chmod u+x deploy.sh ([x] means exising permission [+] add permission [-] remove permission)

- ./deploy.sh

- cd ..

- chmod o+x deploy.sh

- chmod og+x+w-r deploy.sh