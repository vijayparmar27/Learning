- sudo apt-get update
- sudo apt-get upgrade -y
- sudo apt-get install -y docker.io
- sudo systemctl enable docker
- sudo systemctl start docker
- sudo swapoff -a
- sudo sed -i '/ swap / s/^\(.\*\)$/#\1/g' /etc/fstab

- sudo kubeadm init --pod-network-cidr=192.168.0.0/16 --apiserver-advertise-address=172.31.45.107

- kubeadm init \
  --pod-network-cidr=192.168.0.0/16 \
  --apiserver-advertise-address=172.31.40.200 \
  --ignore-preflight-errors Swap

  sudo apt-get install -y apt-transport-https ca-certificates curl

curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list

apt-get update

apt-get install -y kubelet kubeadm kubectl


kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml


 mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config


 kubectl apply -f https://github.com/weaveworks/weave/releases/download/v2.8.1/weave-daemonset-k8s.yaml