--- docker and kubenetes similar Commands

    - docker run ubuntu

    - docker run ubuntu sleep 5

    - DockerFile

        FROM ubuntu
        CMD sleep 5

    - docker run build -t ubuntu-sleeper .

    - docker run ubuntu-sleeper

    - DockerFile

        FROM ubuntu
        ENTRYPOINT ["sleep"]
        CMD ["5"]

    - docker build -t ubuntu-sleeper .

    - docker run --name ubuntu-sleeper ubuntu-sleeper 10

    --- ubutu-sleeper.yaml

        apiVersion: v1
        kind: Pod
        metadata:
            name: ubutu-sleeper
        spec:
            containers:
                - name: ubuntu-sleeper
                  image: ubuntu-sleeper
                  args: ["10"]

    - kubectl create -f ubuntu-sleeper.yaml

    - docker run --name ubuntu-sleeper --entrypoint sleep2.0 ubuntu-sleeper 10

    --- ubutu-sleeper.yaml

        apiVersion: v1
        kind: Pod
        metadata:
            name: ubutu-sleeper
        spec:
            containers:
                - name: ubuntu-sleeper
                  image: ubuntu-sleeper
                  commad : ["sleep2.0"]
                  args: ["10"]


    -   dockerFile   |    kubernetesFile
        ---------------------------------
        ENTRYPOINT   |    commad
        CMD          |    args

    - kubectl get pods

    - kunectl describe pods <pod-name>

    - kubectl run webapp-green --image=kodekloud/webapp-color --restart=Never --dry-run -o yaml > pods.yaml

        - change args that file

        - args ["--color=green"]

--- ENV Variables in Kubernetes

    - docker run -e APP_COLOR=pink simple-webapp-color

    --- In Kubernetes environment variables

    -
        apiVersion: v1
        kind: Pod
        metadata:
            name: simple-webapp-color
        spec:
            containers:
                - name: simple-webapp-color
                  image: simple-webapp-color
                  ports :
                    - containerPort: 8080
                  env:
                    - name: APP_COLOR
                      value: pink
                    - name: APP_BACKGROUND_COLOR
                      value: blue

    - Plain key value

        env:
            - name: APP_COLOR
              value: pink
            - name: APP_BACKGROUND_COLOR
              value: blue

    - configMap

        env:
            - name: APP_COLOR
              valueFrom:
                configMapKeyRef:
                    name: app-config

    - secrets

        env:
            - name: APP_COLOR
              valueFrom:
                secretKeyRef:

--- ConfigMaps

    --- imperative ::

        - kubectl create configmap <configmap-name> --from-literal=APP_COLOR=blur --from-literal=APP_MOD=prod

        - .env
            APP_COLOR=blue
            APP_MOD=pro

        - kubectl create configmap <configmap-name> --from-literal=<filePath>

        - kubectl crate configmap app-config --from-literal=.env

        - kubectl get configmaps

        - kubectl describe configmap <configmap-name>

        - kubectl explain pods --recursive | grep env from -A3

    --- Declarative

        - confin-map.yaml

            apiVersion: v1
            kind: ConfigMap
            metadata:
                name: app-config
            data:
                APP_COLOR: blue
                APP_MOD: prod

        - kubectl create -f config-map.yaml

        - kubectl get configmaps

        - POD FILE WITH CONFIGMAP

            apiVersion: v1
            kind: Pod
            metadata:
                name: simple-webapp-color
                labels:
                    name: simple-webapp-color
            spec:
                containers:
                    - name: simple-webapp-color
                      image: simple-webapp-color
                      ports:
                        - containerPort: 8080
                      envFrom:
                        - configMapRef:
                            name: app-config

        - ENV

            envFrom:
                - configMapRef:
                name: app-config

        - SINGLE ENV

            env:
                - name: APP_COLOR
                  valueFrom:
                    configMapKeyRef:
                        name: app-config
                        key: APP_COLOR

        - VOLUME

        volumes:
            - name: app-config-volume
                configMap:
                name: app-config

--- SECRETES

    --- Imperative

        - kubectl create secret generic <secret-name> --from-literal=<key>=<value>

        - kubectl create secret generic app-secret --from-literal=DB_HOST=mysql --from-literal=DB_PASSWORD=password

        - <path-to-file>

            DB_Host: mysql
            DB_User: root
            DB_Password: paswrd

        - kubectl create secret generic <secret-name> --from-file=<path-to-file>

    --- Declarative

        - echo -n "mysql" | base64
        - echo -n "root" | base64
        - echo -n "paswrd" | base64

        - secret-data.yaml

            apiVersion: v1
            kind: Secret
            metadata:
                name: app-secret
            data:
                DB_HOST: <base64 value>
                DB_USER: <base64 value>
                DB_PASSWORD: <base64 value>

        - kubectl create -f secret-data.yaml

        - kubectl get secrets

        - kubectl describe secrets <secret-name>

        - echo -n "<encoded value>" | base64 --decode

        - POD WITH SECREATES

            apiVersion: v1
            kind: Pod
            metadata:
                name: simple-webapp-color
                labels:
                    name: simple-webapp-color
            spec:
                containers:
                    - name: simple-webapp-color
                      image: simple-webapp-color
                      ports:
                        - containerPort: 808
                     envFrom:
                        - secretRef:
                            name: app-secret

--- Security

    --- docker security

        - docker run ubuntu sleep 3600

            - run as root user

        - ps aux

        - DockerFile

            FROM ubuntu
            USER developer

        - docker build -t ubuntu-image .

        - docker run ubuntu-image sleep 3600

        - docker run --cap-add MAC_ADMIN ubuntu

        - docker run --privileged ubuntu

    --- kubenets security

        - pod.yaml [pod level]

            apiVersion: v1
            kind: Pod
            metadata:
                name: web-pod
            spec:
                securityContext:
                    runAsUser: developer
                containers:
                    - name: ubuntu
                      image: ubuntu
                      command: ["sleep", "3600"]
                      securityContext:
                        capabilities:
                            add: ["MAC_ADMIN"]

        - pod.yaml [container level]

            apiVersion: v1
            kind: Pod
            metadata:
                name: web-pod
            spec:
                containers:
                    - name: ubuntu
                      image: ubuntu
                      command: ["sleep", "3600"]
                      securityContext:
                        runAsUser: developer
                        capabilities:
                            add: ["MAC_ADMIN"]

--- SERVICE ACCOUNTS

    - kubectl create serviceaccount dashboard-sa

    - kubectl get serviceaccount

    - kubectl describe serviceaccount dashboard-sa

    - kubectl describe secret dashboard-sa-token-kbbdm

    - 
        apiVersion: v1
        kind: Pod
            metadata:
            name: my-kubernetes-dashboard
        spec:
            containers:
                - name: my-kubernetes-dashboard
                  image: my-kubernetes-dashboard

    - kubectl describe pod my-kubernetes-dashboard

    - kubectl exec -it my-kubernetes-dashboard ls /var/run/secrets/kubernetes.io/serviceaccount

    - kubectl exec -it my-kubernetes-dashboard cat /var/run/secrets/kubernetes.io/serviceaccount/token

    - kubectl get serviceaccount

    - 

        apiVersion: v1
        kind: Pod
        metadata:
            name: my-kubernetes-dashboard
        spec:
            containers:
                - name: my-kubernetes-dashboard
                  image: my-kubernetes-dashboard
            serviceAccount: dashboard-sa

    - kubectl describe pod my-kubernetes-dashboard

    - 
        apiVersion: v1
        kind: Pod
        metadata:
            name: my-kubernetes-dashboard
        spec:
            containers:
                - name: my-kubernetes-dashboard
                  image: my-kubernetes-dashboard
            automountServiceAccountToken: false

--- Resource Requirements

    - 
        apiVersion: v1
        kind: Pod
        metadata:
            name: simple-webapp-color
            labels:
                name: simple-webapp-color
        spec:
            containers:
                - name: simple-webapp-color
                  image: simple-webapp-color
                    ports:
                     - containerPort: 8080
                  resources:
                    requests:
                        memory: "1Gi"
                        cpu: 1
                    limits:
                        memory: “2Gi"
                        cpu: 2

    - 0.1 as 100m 

    - 1m minimum give as a containers requirements


--- Taints And Tolerations 

    Taint-Effect : 

        NoSchedule:
            When a node is tainted with Effect: NoSchedule, it means that new pods will not be scheduled on that node unless they have a corresponding toleration that matches the taint.
            Existing pods running on a node that gets tainted with NoSchedule are not immediately evicted. They continue to run, but no new pods without tolerations for this taint will be scheduled on the tainted node.

        PreferNoSchedule:
            A taint with Effect: PreferNoSchedule suggests that the node should be avoided for scheduling pods without matching tolerations, but it doesn't strictly prevent scheduling in the absence of tolerations.
            The Kubernetes scheduler will try to avoid scheduling pods without tolerations on nodes with this taint, but if no other nodes are available or suitable, it may still place pods on the node.

        NoExecute:
            When a node is tainted with Effect: NoExecute, it has a stronger impact than NoSchedule.
            Nodes with this taint not only prevent new pods without matching tolerations from being scheduled, but they also trigger the eviction of existing pods that do not tolerate the taint.
            The eviction of pods due to a NoExecute taint is a safety mechanism to ensure that pods that were running on a node before it was tainted are rescheduled to other nodes to maintain application availability.

    - kubectl taint nodes <node-name> <key>=<value>:<taint-effect>

    - kubectl taint nodes worker-node1 app=blue:Noschedule

    - 
        apiVersion: 
        kind: Pod
        metadata:
            name: myapp-pod
        spec:
            containers:
                - name: nginx-container
                  image: nginx
            tolerations:
              - key: "app"
                operator: "Equal"
                value: "blue"
                effect: "NoSchedule"

    - kubectl describe node <node-name> | grep -i taint

    - kubectl get nodes

    - kubectl run mosquito --image=nginx --restart=Never

--- Node Selector 

    - kubectl label nodes <node-name> <label-key>=<label-value>

    - kubectl label nodes node-1 size=Large

    - 

        apiVersion: 
        kind: Pod
        metadata:
            name: myapp-pod
        spec:
            containers:
                - name: data-processor
                  image: data-processor
            nodeSelector:
                size: Large

--- Node Affinity

    apiVersion: v1
    kind: Pod
    metadata:
    name: nginx-pod
    spec:
    containers:
    - name: nginx-container
        image: nginx:latest
    affinity:
        nodeAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
             - matchExpressions:
             - key: environment
                operator: In
                values:
                 - production
                 - dev


    - 

        preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 1
            preference:
                matchExpressions:
                - key: environment
                  operator: In
                  values:
                    - development

    -

        nodeAffinity:
            requiredDuringSchedulingIgnoredDuringExecution:
                nodeSelectorTerms:
                    - matchExpressions:
                        - key: size
                          operator: Exists


