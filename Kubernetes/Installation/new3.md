kubeadm init --pod-network-cidr=192.168.0.0/16 --apiserver-advertise-address=172.31.33.10 --cri-socket=unix:///var/run/cri-dockerd.sock

kubeadm join 172.31.33.10:6443 --token gupf1t.r72sztl8iz9rc2pz \
        --discovery-token-ca-cert-hash sha256:00a1fe2d1dc73aac6d2204f8e77bec07edd0b48b4016b94a7554a5456ae0a237

kubectl taint nodes master node-role.kubernetes.io/control-plane:NoSchedule-

kubectl taint nodes master node.kubernetes.io/disk-pressure:NoSchedule-

kubectl run nginx --image nginx


 Warning  ImageGCFailed            5m8s                 kubelet          wanted to free 359394508 bytes, but freed 0 bytes space with errors in image deletion: rpc error: code = Unknown desc = Error response from daemon: conflict: unable to remove repository reference "registry.k8s.io/pause:3.6" (must force) - container d3f0117ecd5c is using its referenced image 6270bb605e12


tigera-operator-94d7f7696-227dq

tigera-operator

kubectl describe pod tigera-operator-94d7f7696-227dq -n tigera-operator

Warning  Evicted    7m15s  kubelet            The node had condition: [DiskPressure].

