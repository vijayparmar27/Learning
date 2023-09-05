--- Kubernetes Commands

        - kubectl version (for checking version and check installation)

        - kubectl run my-nginx --image nginx (for create pods)

        - kubectl delete pod my-nginx (# Delete the pod)

        - kubectl get pod [for get runing pods]

        - kubectl get all [for get all pods]

        - kubectl create deployment my-nginx --image=nginx  (# Create a deployment)
        - kubectl create deployment my-nginx --image nginx

        - kubectl get deployment (check for deployment)

        - kubectl describe deployment my-nginx

        - kubectl edit deployment my-nginx

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

        - kubernetes DNS

            - kubectl get namespaces


--- Management Technique

    - kubectl create deployment sample --image nginx --dry-run -o yaml
    - kubectl create deployment sample --image nginx --dry-run=client -o yaml

        - --dry-run -o yaml [you can output those templates with]

    - kubectl create job test --image nginx --dry-run -o yaml

    - kubectl expose deployment simple --port 80 --name test --dry-run=client -o yaml

    - kubectl run test --image nginx --dry-run=client -o yaml

    - kubectl run test --image nginx --restart OnFailure --dry-run=client -o yaml

    - kubectl run test --image nginx --restart Never --dry-run=client -o yaml

    - kubectl create cronjob test-cronjob --image=nginx --schedule="*/1 * * * *" --dry-run=client -o yaml

--- Kubernetes YAML

    - kubectl apply -f filename.yaml [for file]

    - kubectl apply -f myYAML/ [for directory]

    - kubectl apply -f https://bret.run/pod.yml 

--- Kubernetes YAML Multiple Config in Single File

- app.yml

        apiVersion: v1
        kind: Service
        metadata:
        name: app-nginx-service
        spec:
        type: NodePort
        ports:
        - port: 80
        selector:
            app: app-nginx
        ---
        apiVersion: apps/v1
        kind: Deployment
        metadata:
        name: app-nginx-deployment
        spec:
        replicas: 3
        selector:
            matchLabels:
            app: app-nginx
        template:
            metadata:
            labels:
                app: app-nginx
                dude: "true"
            spec:
            containers:
            - name: nginx
                image: nginx:1.17.3
                ports:
                - containerPort: 80

    - multiple file separators using [---]




