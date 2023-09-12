--- PODS

    - kubectl run my-nginx --image=nginx 

    - kubectl get pods

    - kubectl get all

    - kubectl describe pod my-nginx (for all details of that pod)

    - kubectl get pods -o wide (for details like Ip,NOMINATED NODE etc)

    - kubectl delete pod my-nginx

    - kubectl get pods -w [w is watching]

    - kubectl logs -l run=my-nginx (l is lable)

--- Create With YAML File

    -   apiVersion:  
        kind: 
        metadata: 
            name: 
            lables: 
                env:
        spec:
            containers : 
                - name : my-nginx
                  image : nginx


        |     kind       |  apiVersion  |
        ---------------------------------
        |   POD          |      v1      |
        |   Service      |      v1      |
        |   ReplicaSet   |    apps/v1   |
        |   Deployment   |    apps/v1   |


    - kubectl get pod

    - kubectl describe pod my-nginx-1

    - kubectl get pod my-nginx

--- PODS

    - kubectl run redis --image=redis123

    - kubectl run redis --image=redis123 --dry-run=client -o yaml > pod.yaml

    - kubectl apply -f pod.yaml

    - kubectl edit pod redis (for edit pod)

    - kubectl get pods

    - kubectl describe pod redis | grep -i image

    - kubectl delete pod redis

--- Replication

    -- ReplicationController

        - kubectl create -f ReplicationController_def.yaml

        - kubectl get replicationcontroller

        - kubectl get pods

        - kubectl delete replicationcontroller myapp-rc

    -- ReplicaSet

        - kubectl create -f ReplicaSet.yaml

        - kubectl get replicaset

        - kubectl get pods

        - change in ReplicaSet.yaml file replicas: 6

        - kubectl replace -f ReplicaSet.yaml

        - kubectl get replicaset

        - kubectl get pods

        - kubectl scale replicaset myapp-rs --replicas=2

        - kubectl scale [type] [name] --replicas=2

        - kubectl scale --replicas=4 -f ReplicaSet.yaml

        - kubectl describe replicaset myapp-rs

        - kubectl edit replicaset myapp-rs

        - kubectl delete replicaset myapp-rs

--- Deployment

    - kubectl create -f deployment.yaml

    - kubectl get deployment myapp

    - kubectl get replicaset

    - kubectl get pods

    - kubectl get all

    - kubectl get describe myapp

    - kubectl describe deployment myapp | grep -i image

--- Deployment Upadet and Roleback

    - kubectl rollout status deployment myapp

    - kubectl rollout history deployment myapp

    - kubectl set image deployment myapp nginx-container=nginx:1.9.1

    - kubectl rollout undo deployment myapp

    - kubectl create -f deployment.yaml --record

--- Services

    --- NodePort

        - kubectl create -f NodePortService.yaml

        - kubectl get services

        - minikube service myapp-sc --url




    