--- Namespaces

    - kubectl get pods [for default namespace]

    - kubectl get pods --namespace=kube-system

    - kubectl create -f pod-def.yaml [for default namespace]

    - kubectl create -f pod-def.yaml --namespace=dev

    - for pods

        metadata:
            name: myapp-dev
            namespace: dev
            labels: 
                app: myapp
                type: frontend

    - kubectl create -f namespace dev

    - kubectl get namespace

    - kubectl config set-context $(kubectl config current-context) --namespace=dev [set name for default namespace as dev]

    - kubectl get pods

    - kubectl get pods --namespace=default

    - kubectl get pods --all-namespaces

    - kubectl get ns

    - kubectl get ns --no-headers
      
    - kubectl get ns --no-headers | wc -l

    - kubectl get pods --all-namespaces | grep blue

    - kubectl -n dev get svc

--- ResourceQuota

    - kubectl create -f resourcequota.yaml

