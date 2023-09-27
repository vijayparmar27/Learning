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

        - kubeadm init --pod-network-cidr=10.244.0.0/16 --apiserver-advertise-address=<ip-address>

        - ip add

        -  mkdir -p $HOME/.kube

        - sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config

        - sudo chown $(id -u):$(id -g) $HOME/.kube/config

    - https://www.weave.works/docs/net/latest/kubernetes/kube-addon/

    - kubectl get pod -A

    - 