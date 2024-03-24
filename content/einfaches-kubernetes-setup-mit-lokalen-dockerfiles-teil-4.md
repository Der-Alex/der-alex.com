---
title: 'Einfaches Kubernetes Setup mit lokalen Dockerfiles - Teil 4'
description: 'Unser Kubernetes Setup ist vorbereitet für das Deployment von Anwendungen, die über eine Domain erreichbar sein sollen. Nun ist es an der Zeit eine Anwendung bereitzustellen. Ich baue mit euch eine kleine Nuxt Anwendung und deploye sie mit Kubernetes.'
category: DevOps
tags:
  - Kubernetes
  - Docker
  - Nuxt
created: 2024-03-24
sitemap:
  lastmod: 2024-03-24
---
## Zusammenfassung
In [Teil 1](/einfaches-kubernetes-setup-mit-lokalen-dockerfiles-teil-1) haben wir uns um die grundlegende Konfiguration von Kubernetes gekümmert und unseren Cluster lauffähig gemacht.

In [Teil 2](/einfaches-kubernetes-setup-mit-lokalen-dockerfiles-teil-2) haben wir Helm kennen gelernt und einen Helm Chart für Zertifikatsstellen installiert, sowie eine eigene Kubernetes Konfiguration für Let's Encrypt erstellt.

In [Teil 3](/einfaches-kubernetes-setup-mit-lokalen-dockerfiles-teil-3) haben haben wir einen Traefik Reverse Proxy eingerichtet und Middleware für die Umleitung zu www und zu https eingerichtet.
<br/><br/>
Nun ist es an der Zeit, eine Anwendung live zu bringen. Hierzu erstellen wir eine [Nuxt](https://nuxt.com/){:target="_blank"} Applikation, verdockern diese und erstellen dann ein Deployment in Kubernetes.

## Nuxt Applikation erstellen
**Nuxt** ist ein Web Framework, welches auf [Vue](https://vuejs.org/){:target="_blank"} aufbaut und dieses um serverseitiges sowie statisches Rendering erweitert. Unsere Nuxt Applikation wird in diesem Fall eine einfache Hello World Seite sein, da es in dieser Serie nicht um Nuxt, sondern um das Deployment mit Kubernetes geht. 

Ich gehe daher davon aus, dass&nbsp;**NodeJs** in der aktuellen LTS Version installiert ist. Nuxt installieren und starten wir folgendermaßen: 

```bash
# Aktuelle Nuxt Version in einem Projektverzeichnis bereitstellen
npx nuxi@latest init projektname
# In das Projektverzeichnis wechseln
cd projektname
# Pakete installieren
npm i
# Nuxt starten
npm run dev
```

Danach öffnen wir das Projektverzeichnis mit dem Editor unserer Wahl. Ich empfehle [Visual Studio Code](https://code.visualstudio.com/){:target="_blank"}, da es recht leichtgewichtig ist und eine gute Unterstützung für Frontend Frameworks wie Vue oder React bietet.

Wir öffnen die Datei&nbsp;**app.vue** und ändern den Inhalt:

```vue
<template>
  <h1>Hallo Welt!</h1>
</template>
```

## Dockerfile anlegen
Als nächstes wird unsere tolle, in Nuxt erstellte Webseite verdockert. Hierzu legen wir ein Dockerfile in dem Projektverzeichnis an. Dann erstellen wir ein Image basierend auf dem Docker Image der aktuellen&nbsp;**NodeJs** LTS Version. Auch hier gehe ich davon aus, dass Docker bereits installiert ist:

```bash
# Dateiname: Dockerfile

# Nimm node:lts als Basis Image
FROM node:lts
# Kopiere den Inhalt aus dem Projektverzeichnis in unseren Container
COPY . .
# Installiere die Pakete
RUN npm i
# Erzeuge einen Nuxt Build
RUN npm run build
# Starte Nuxt mit dem Node Befehl
ENTRYPOINT ["node"]
CMS [".output/server/index.mjs"]
```

Mit den Projektdateien und dem Dockerfile auf unserem Kubernetes Server können wir nun ein Docker Image erstellen, welches von Kubernetes weiter verwendet werden kann:

```bash
# Erzeuge ein Docker Image aus dem Projektverzeichnis heraus mit dem dort vorliegenden Dockerfile
docker build --no-cache -t image_name .

# Prüfe ob das Image erstellt wurde
docker image ls

REPOSITORY    TAG     IMAGE ID       CREATED         SIZE
image_name    latest  xxxxxxxxxxxx   1 minute ago    1.39GB
```

## Kubernetes Deployment erstellen
Als nächstes erstellen wir eine Deployment Konfiguration für unsere Anwendung:

```yaml
# Dateiname: my-app-deployment.yaml

# API Version
apiVersion: apps/v1
# Ressourcentyp
kind: Deployment
metadata:
  name: nuxt-deployment
  # Das Label muss vergeben werden, damit es in anderen Konfigurationen identifiziert und wiederverwendet werden kann
  labels:
    app: my-app
  namespace: default
# Spezifikationen, wie unsere Deployment ablaufen soll  
spec:
  # Wir wollen nur einen Pod laufen lassen. Hier kann man die Anzahl an Replikas / Pods für den Start bestimmen
  replicas: 1
  selector:
    # Pods müssen folgendes Label haben, um Teil des Deployments zu sein
    matchLabels:
      app: my-app
      env: production
  # Pod Vorlage
  template:
    metadata:
      labels:
        app: my-app
        env: production
    spec:
      securityContext:
        # Gruppen ID innerhalb des Containers
        fsGroup: 101
      # Der Docker Container den wir erzeugen
      containers:
      - name: my-app
        # Das von uns erstellte Image
        image: image_name
        # Kubernetes soll nie in Repositories wie der Docker Registry nach Images suchen oder diese herunterladen
        # Wir nutzen nur unser lokales Image
        imagePullPolicy: Never
        # Nuxt läuft standardmäßig auf Port 3000, dieser muss bekannt gemacht werden
        ports:
        - containerPort: 3000
      
```

Danach aktivieren wir unsere Ressource:

```bash
kubectl apply -f my-app-deployment.yaml
``` 

Wir können mit folgenden Befehlen testen, ob das Deployment läuft und Pods erstellt wurden:

```bash
# Zeige alle Deployments in allen Namespaces an (-A)
kubectl get deployments -A

NAMESPACE      NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
default        nuxt-deployment           1/1     1            1           1m

# Prüfen ob Pods gestartet wurden
kubectl get pods -A
          
NAMESPACE      NAME                    READY   STATUS      RESTARTS   AGE
default        nuxt-deployment-xxx     1/1     Running     0          1m
``` 

Das Deployment hat geklappt und der Pod läuft! Als nächstes starten wir einen dazugehörigen Service.

## Kubernetes Service und Ingress erstellen

Für den Service brauchen wir ebenfalls eine Konfigurationsdatei. Hier geben wir Kubernetes mit, wie innerhalb des Clusters mit der Anwendung kommuniziert werden kann:

```yaml
# Dateiname: nuxt-service.yaml

# API Version
apiVersion: v1
# Ressourcentyp
kind: Service
metadata:
  name: nuxt-service
  namespace: default
spec:
  # Die Anwendung soll in Kubernetes über eine interne IP erreichbar sein
  type: ClusterIP
  ports:
      # Port, über den eingehender Verkehr empfangen wird. 
    - port: 80
      # Port zu dem weitergeleitet werden soll. Der Port unseres Containers
      targetPort: 3000
  selector:
    # Der Name unserer Applikation
    app: my-app
```

Wieder aktivieren wir unseren Service mit: 

```bash
kubectl apply -f nuxt-service.yaml
```

Nun fehlt uns nur noch der Ingress für die Kommunikation von außen:

```yaml
# Dateiname: nuxt-ingress-tls.yaml

apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nuxt-tls-ingress
  namespace: default
  # Hier definieren wir, welche Erweiterungen
  annotations:
    # Der Ingress Typ, den wir verwenden wollen. Wir haben Traefik eingerichtet
    spec.ingressClassName: traefik
    # Der ClusterIssuer, den wir nutzen wollen, um Zertifikate zu erstellen. Wir haben Let's Encrypt eingerichtet
    cert-manager.io/cluster-issuer: letsencrypt-prod
    # Unsere Traefik Middleware Konfigurationen. www redirect und https redirect 
    traefik.ingress.kubernetes.io/router.middlewares: default-redirect-www@kubernetescrd,default-redirect-https@kubernetescrd
spec:
  # Die Proxy / Webserver Regeln
  rules:
  - host: example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            # Über welchen Service kommuniziert werden soll
            name: nuxt-service
            port:
              number: 80
  # Das gleiche für www
  - host: www.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: nuxt-service
            port:
              number: 80
  # Ab hier die Konfiguration für https
  tls:
  - hosts:
    - example.com
    # Secret Name kann frei vergeben werden
    secretName: my-app-tls
  - hosts:
    - www.example.com
    secretName: www-my-app-tls
``` 

Das war eine gane Menge an Konfigurationen, die wir erstellt haben. Letzendlich läuft fast alles in Kubernetes mit Konfigurationsdateien ab. Das schwierigste dabei ist, den Überblick über die einzelnen Ressourcentypen und deren Konfigurationen zu behalten.

Zum Schluss aktivieren wir noch unseren Ingress:

```bash
kubectl apply -f nuxt-ingress-tls.yaml
```

Nach eine kurzen Wartezeit sollte unsere Hallo Welt Anwendung auf **htt<span/>ps://www.example.com** erreichbar sein.

## Zusammenfassung
Wir haben nun auf unserem Server&nbsp;**k3s** installiert und konfiguriert. Wir haben&nbsp;**Helm** installiert und Helm Charts für den Cert-Manager genutzt. Wir haben eine Grundkonfiguration für das automatische Erstellen von Zertifikaten mit&nbsp;**Let's Encrypt** eingerichtet. Dann haben wir&nbsp;**Traefik** so konfiguriert, dass non-www zu www und http zu https umgeleitet wird. Zum Schluss haben wir unsere Anwendung verdockert, ein Image daraus erstellt und dieses mit Konfigurationsdateien deployt.

Wenn unsere Anwendung nun Codeänderungen erhalten hat, müssen wir nur noch das Image neu bauen und einen neuen Kubernetes Pod starten:

```bash
docker build --no-cache -t image_name .
kubectl delete pod pod_name 
```

Danach wird sofort ein neuer Pod mit dem neuen Image gestartet. Diese beiden Schritte kann man natürlich auch noch automatisieren. 
Ich hoffe, ich konnte dir das Deployment mit Kubernetes etwas näher bringen. 