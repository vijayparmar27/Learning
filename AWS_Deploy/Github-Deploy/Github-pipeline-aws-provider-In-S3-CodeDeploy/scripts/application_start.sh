#!/bin/bash

# Stop all servers and start the server as a daemon
# forever stopall
# cd /home/ec2-user/nodeapp
# node start 

#!/bin/bash
sudo chmod -R 777 /home/ec2-user/nodeapp
#navifate into our worling directory where we have all our github files
cd /home/ec2-user/nodeapp

#add npm and node to path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # loads nvm bash_copletion (node is in)

#install node modules
npm install 
npm install pm2 -g
pm2 delete index.js
pm2 start index.js
# npm start
# pm2 start npm --name "myApp" 
# #start our node app in the background
# node app.js > app.out.log 2> app.err.log < /dev/null &