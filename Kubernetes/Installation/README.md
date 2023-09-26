- sudo apt-get update
- sudo apt-get upgrade -y
- sudo apt-get install -y docker.io
- sudo systemctl enable docker
- sudo systemctl start docker
- sudo swapoff -a

- kubeadm install from kubernetes doc 

- kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml
