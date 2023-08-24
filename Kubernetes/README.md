--- Kubernetes Commands

        - kubectl version (for checking version and check installation)

        - kubectl run my-nginx --image nginx (for create pods)

        - kubectl delete pod my-nginx (# Delete the pod)

        - kubectl get pod [for get runing pods]

        - kubectl get all [for get all pods]

        - kubectl create deployment my-nginx --image=nginx  (# Create a deployment)
        - kubectl create deployment my-nginx --image nginx

        - kubectl get deployment (check for deployment)

        - kubectl delete deployment my-nginx (for remove deployment like pod, replicas etc)

        - this commands for scaleing
            - kubectl scale deployment my-nginx --replicas=2
            - kubectl scale deployment my-nginx --replicas 2
            - kubectl scale deploy/my-nginx --replicas=1
            - kubectl scale deploy/my-nginx --replicas 1
            - kubectl scale deployment.apps/my-nginx --replicas 2
            - kubectl scale deployment.apps/my-nginx --replicas=1
            
        - kubectl get deployment -o wide

        - kubectl logs deployment/my-nginx (for logs)
        - kubectl logs deployment/my-nginx --follow (this commads show new log as run time)
        - kubectl logs deployment/my-nginx --follow --tail 1 (give as only last one line)
        - kubectl logs -l run=my-nginx (l is lable ) 

        - kubectl get pods

        - kubectl describle pod/[podname]

        - kubectl get pods -w [w is watching]

        - kubectl delete pod/[podname] 

        

    --- Kubernetes Services

        - ClusterIP

            - kubectl get pods -w

            - kubectl create deployment httpenv --image=bretfisher/httpenv 

            - kubectl scale deployment/httpenv --replicas=5

            - kubectl expose deployment/httpenv --port 8888

            - kubectl get service

            - kubectl get service -o wide

            - kubectl get pods <pod-name> -o json

            - kubectl run --generator run-pod/v1 tmp-shell --rm -it --image bretfisher/netshoot -- bash

            - kubectl exec -it tmp-shell -- bash

            - curl httpenv:8888

            - kubectl get service

        - NodePort

            - kubectl get all

            - kubectl expose deployment/httpenv --port 8888 --name httpenv-np --type NodePort

            - NodePort Default Range : [30000 - 32767]

            - kubectl get services

            - curl localhost:8888

        - LoadBalancer

            - kubectl expose deloyment/httpenv --port 8888 --name httpenv-lb --type LoadBalancer

            - kubectl get services

            - kubectl delete service/httpenv service/httpenv-np

            - kubectl delete service/httpenv-lb deployment/httpenv





