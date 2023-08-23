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

    --- example

        - kubectl run redis --image=redis123

        - kubectl run redis --image=redis123 --dry-run=client -o yaml > pod.yaml

        - kubectl apply -f pod.yaml

        - kubectl edit pod redis (for edit pod)

        - kubectl get pods