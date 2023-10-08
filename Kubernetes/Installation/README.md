- OPEN https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/

- OPEN https://kubernetes.io/docs/setup/production-environment/container-runtimes/

    - INSTALL CONFIGURATION FOR ANY CONTAINER RUNNER

        cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
        overlay
        br_netfilter
        EOF

        sudo modprobe overlay
        sudo modprobe br_netfilter

        # sysctl params required by setup, params persist across reboots
        cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
        net.bridge.bridge-nf-call-iptables  = 1
        net.bridge.bridge-nf-call-ip6tables = 1
        net.ipv4.ip_forward                 = 1
        EOF

        # Apply sysctl params without reboot
        sudo sysctl --system

        lsmod | grep br_netfilter
        lsmod | grep overlay

        sysctl net.bridge.bridge-nf-call-iptables net.bridge.bridge-nf-call-ip6tables net.ipv4.ip_forward

    - WE SELECT CONTAINERD

        - INSTALL CONTAINERD

            - https://github.com/containerd/containerd/blob/main/docs/getting-started.md

            - https://docs.docker.com/engine/install/ubuntu/

            - Set up Docker's Apt repository

                # Add Docker's official GPG key:
                sudo apt-get update
                sudo apt-get install ca-certificates curl gnupg
                sudo install -m 0755 -d /etc/apt/keyrings
                curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
                sudo chmod a+r /etc/apt/keyrings/docker.gpg

                # Add the repository to Apt sources:
                echo \
                    "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
                    "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
                    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

                sudo apt-get update

            - apt-get install containerd.io

            - systemctl restart containerd

            - systemctl status containerd

        - ps -p 1 

        - To use the systemd cgroup driver

            - remove clear file first

            - /etc/containerd/config.toml

                [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
                    [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
                        SystemdCgroup = true

            - save

    - Installing kubeadm, kubelet and kubectl

        - sudo apt-get update

        - sudo apt-get install -y apt-transport-https ca-certificates curl

        - curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

        - echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list

        - sudo apt-get update

        - sudo apt-get install -y kubelet kubeadm kubectl

    - Configuring the kubelet cgroup driver

        -    

    - Creating a cluster with kubeadm

        - sudo swapoff -a

        - sudo sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab

        - kubeadm init --pod-network-cidr=10.244.0.0/16 --apiserver-advertise-address=<ip-address>

        - kubeadm init --pod-network-cidr=192.168.0.0/16 --apiserver-advertise-address=172.31.37.198

        - ip add

        -  mkdir -p $HOME/.kube

        - sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config

        - sudo chown $(id -u):$(id -g) $HOME/.kube/config

    - https://www.weave.works/docs/net/latest/kubernetes/kube-addon/

    - kubectl apply -f https://github.com/weaveworks/weave/releases/download/v2.8.1/weave-daemonset-k8s.yaml

    - kubectl get pod -A

    - kubectl get ds -A

    - kubectl edit ds weave-net -n kube-system

    - find container name is weave and add new env varible

        - name: IPALLOC_RANGE
          value: 10.244.0.0/16

    - kubectl get pod -A

    - pkill kubelet

    - sudo systemctl restart kubelet
    
    - export KUBECONFIG=/etc/kubernetes/kubelet.conf


    kubeadm reset
    systemctl enable firewalld|
    systemctl start firewalld|
    firewall-cmd --permanent --add-port=6443/tcp|
    firewall-cmd --permanent --add-port=2379-2380/tcp|
    firewall-cmd --permanent --add-port=10250-10255/tcp|
    firewall-cmd –reload

    env | grep -i kube
    KUBECONFIG=/root/.kube/config

    - strace -eopenat kubectl version

    sudo -i

systemctl daemon-reload
systemctl restart kubelet

cd /var/log/pods/kube-system_kube-apiserver-ip-172-31-35-13_0203738862508cdb8eb2784e3924328a/kube-apiserver

journalctl -xeu kubelet
    
    sudo apt install golang

    sudo nano /etc/hostname
    systemctl status cri-docker.socket

    kubectl get pods | grep Evicted | awk '{print $1}' | xargs kubectl delete pod

    kubectl get pod -A | grep Evicted | awk '{print $2 " --namespace=" $1}' | xargs -n 2 kubectl delete pod

    df -h

    docker system prune -a

    docker system prune -a --volumes

    systemctl restart kubelet

    kubectl get nodes
