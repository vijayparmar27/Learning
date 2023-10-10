sudo swapoff -a

free -m

sudo su

docker --version


hostnamectl set-hostname master

kubeadm init --pod-network-cidr=192.168.0.0/16 --apiserver-advertise-address=172.31.32.20 --cri-socket=unix:///var/run/cri-dockerd.sock

-  systemctl status cri-docker.socket

- kubectl logs calico-kube-controllers-7468876fcb-ccpdn -n calico-system

- kubectl taint nodes ip-172-31-32-20 node-role.kubernetes.io/control-plane:NoSchedule-

- kubectl taint nodes ip-172-31-32-20 node.kubernetes.io/disk-pressure:NoSchedule-

- kubectl taint nodes ip-172-31-32-20 node.kubernetes.io/disk-pressure:NoSchedule-

 node-role.kubernetes.io/control-plane:NoSchedule
                    node.kubernetes.io/disk-pressure:NoSchedule
