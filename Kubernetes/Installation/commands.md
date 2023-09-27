- sudo apt-get update
- sudo apt-get upgrade -y
- sudo apt-get install -y docker.io
- sudo systemctl enable docker
- sudo systemctl start docker
- sudo swapoff -a
- sudo sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab
- sudo vim /etc/fstab
- swapoff -a
- mount -a
- free -h

- kubeadm install from kubernetes doc 

- sudo kubeadm init --pod-network-cidr=10.244.0.0/16 --apiserver-advertise-address=<your_master_ip>

- 192.168.0.0/16 

- sudo kubeadm init --pod-network-cidr=10.244.0.0/16 --apiserver-advertise-address=172.31.45.107

- kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml

- kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.26.1/manifests/custom-resources.yaml


kubeadm init \
  --pod-network-cidr=192.168.0.0/16 \
  --apiserver-advertise-address=172.31.39.32 \
  --ignore-preflight-errors Swap


# Enable kernel modules
sudo modprobe overlay
sudo modprobe br_netfilter

# Add some settings to sysctl
sudo tee /etc/sysctl.d/kubernetes.conf<<EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
EOF

# Reload sysctl
sudo sysctl --system



# Add repo and Install packages
sudo apt update
sudo apt install -y curl gnupg2 software-properties-common apt-transport-https ca-certificates
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/docker-archive-keyring.gpg
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt install -y containerd.io docker-ce docker-ce-cli

# Create required directories
sudo mkdir -p /etc/systemd/system/docker.service.d

# Create daemon json config file
sudo tee /etc/docker/daemon.json <<EOF
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
EOF

# Start and enable Services
sudo systemctl daemon-reload 
sudo systemctl restart docker
sudo 

- lsmod | grep br_netfilter

- sudo systemctl enable kubelet

- sudo kubeadm config images pull

# Containerd
sudo kubeadm config images pull --cri-socket unix:///run/docker.sock

### With Docker CE ###
sudo sysctl -p
sudo kubeadm init \
  --pod-network-cidr=172.24.0.0/16 \
  --cri-socket unix:///run/docker.sock

sudo vim /etc/hosts

sudo kubeadm init \
  --pod-network-cidr=10.244.0.0/16 \
  --cri-socket unix:///run/containerd/containerd.sock \
  --apiserver-advertise-address=172.31.40.192

- kubectl cluster-info

- curl -O https://raw.githubusercontent.com/projectcalico/calico/v3.26.1/manifests/tigera-operator.yaml
- curl -O https://raw.githubusercontent.com/projectcalico/calico/v3.26.1/manifests/custom-resources.yaml

- kubectl create -f tigera-operator.yaml

- sed -ie 's/192.168.0.0/172.24.0.0/g' custom-resources.yaml

- kubectl get pods --all-namespaces -w



sudo apt-get install -y apt-transport-https ca-certificates curl

curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list

apt-get update

apt-get install -y kubelet kubeadm kubectl
