
--- Install GitLab Runner in EC2 (amazon linux)


--------------------------------------------------------------

sudo yum update
sudo rpm --import https://packages.gitlab.com/runner/gitlab-runner/gpgkey
sudo nano /etc/yum.repos.d/gitlab-runner.repo


        [gitlab-runner]
        name=GitLab Runner
        baseurl=https://packages.gitlab.com/runner/gitlab-runner/el/7/$basearch
        repo_gpgcheck=1
        gpgcheck=0
        enabled=1
        gpgkey=https://packages.gitlab.com/runner/gitlab-runner/gpgkey


sudo yum install -y gitlab-runner
sudo gitlab-runner register
sudo systemctl start gitlab-runner
sudo systemctl enable gitlab-runner
sudo gitlab-runner status

mv /home/gitlab-runner /usr/local/bin/

sudo nano /etc/systemd/system/gitlab-runner.service

/usr/local/bin/gitlab-runner (change working directory)

systemctl daemon-reload
sudo systemctl restart gitlab-runner
sudo gitlab-runner start
sudo systemctl enable gitlab-runner
sudo chmod +rx /home/ec2-user



--------------------------------------------------

sudo chmod 755 /home/ec2-user
sudo chown gitlab-runner:gitlab-runner /home/ec2-user
sudo chown -R gitlab-runner:gitlab-runner /home/ec2-user

demo :
    stage: deploy
    script :
        - cd /home/ec2-user/gitlab-self-runner
        - echo hello 
        - echo $USER 
        - git pull https://new:iTwu9WRGQxzC5s8cMxxv@gitlab.com/dev.v.test.27/gitlab-self-runner.git -f main
        - git clone https://$user:$pwd@gitlab.com/dev.v.test.27/gitlab-self-runner.git -f main

