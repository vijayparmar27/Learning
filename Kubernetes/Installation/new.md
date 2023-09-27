1  apt-get update
2  apt-get upgrade -y
3  apt-get install -y docker.io
4  systemctl enable docker
5  systemctl start docker
6  sudo apt-get install -y apt-transport-https ca-certificates curl
7  curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
8  echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list
9  apt-get update
10  apt-get install -y kubelet kubeadm kubectl
11  cd /var/run
12  ls
13  cd ..
14  cd /home/ubuntu/
15  sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab
16  swapoff -a
17  mount -a
18  cat /etc/hosts
19  kubeadm config images pull
20  kubeadm init   --pod-network-cidr=10.244.0.0/16   --cri-socket unix:///run/containerd/containerd.sock   --apiserver-advertise-address=172.31.40.192
21  mkdir -p $HOME/.kube
22  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
23  sudo chown $(id -u):$(id -g) $HOME/.kube/config
24  kubectl get nodes
25  kubectl get pod --all-namespace
26  kubectl get pod --all-namespaces
27  kubectl get nodes
28  kubectl get pod --all-namespaces
29  history
