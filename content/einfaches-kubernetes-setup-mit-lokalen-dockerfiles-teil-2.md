---
title: 'Einfaches Kubernetes Setup mit lokalen Dockerfiles - Teil 2'
description: 'Kubernetes Anwendungen lassen sich in vielen Fällen über Helm Charts verwalten. Dies spart den Aufwand, eigene Konfigurationen für Kubernetes Anwendungen zu schreiben. Ich zeige euch, wie man Helm Charts für unser Setup verwendet.'
category: DevOps
tags:
  - Kubernetes
  - Docker
  - Linux
created: 2024-03-23
sitemap:
  lastmod: 2024-03-25
---
## Zusammenfassung Teil 1
In [Teil 1](/einfaches-kubernetes-setup-mit-lokalen-dockerfiles-teil-1) haben wir uns um die grundlegende Konfiguration von Kubernetes gekümmert und unseren Cluster lauffähig gemacht.
Nun wollen wir sicherstellen, dass unsere Domain zukünftig automatisch ein SSL Zertifikat enthält und über&nbsp;**https** erreichbar ist. In den letzten Jahren hat sich die freie und gemeinnützige Zertifizierungsstelle [Let's Enctypt](https://letsencrypt.org/de/){:target="_blank"} für das Erstellen von SSL Zertifikaten etabliert. Damit wollen wir unser Zertifikat erstellen. Allerdings soll das möglichst automatisiert passieren. Um das zu ermöglichen, greifen wir auf passende Helm Charts zurück.

## Helm installieren
Bevor wir mit der Nutzung von Helm Charts beginnen können, müssen wir [Helm](https://helm.sh/de/){:target="_blank"} zunächst installieren. Helm bietet hier ein einfaches Script an, welches wir für die Installation ausführen können:

```bash
# lade das helm installations-script herunter
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
# mache das script für den aktuellen user ausführbar
chmod 700 get_helm.sh
# starte das script
./get_helm.sh
```

Nun haben wir Helm installiert. Es fehlt allerdings noch eine wichtige Konfiguration, damit Helm mit dem aktuellen User (der bekanntlich nicht root sein sollte) Helm im Kubernetes Kontext nutzen kann. Zwei Dinge sind hierfür notwendig: 
<br/><br/>
 - Kubernetes Konfigurationsdatei für den aktuellen Nutzer ablegen
 - Pfad der Kubernetes Konfigurationsdatei in eine Umgebungsvariable speichern
<br/><br/>

Nach der Installation hat&nbsp;**k3s** uns eine Konfigurationsdatei von Kubernetes angelegt. Diese wird in der Regel&nbsp;**Kubeconfig** genannt. Sie befindet sich unter&nbsp;**/etc/rancher/k3s/k3s.yaml** und hat aus Sicherheitsgründen nur Lese- und Schreibrechte durch den&nbsp;**root** User. Damit wir zukünftig Kubernetes Befehle und auch Helm Befehle mit unserem User ausführen können, müssen wir die Kubeconfig für unseren User bereitstellen. Standardmäßig legt man eine Kopie in dem durch Kubernetes erzeugten Verzeichnis&nbsp;**~/.kube/** ab und speichert dann den Pfad in einer Umgebungsvariable in der eigenen&nbsp;**.bashrc** ab:

```bash
# Datei kopieren
sudo cp /etc/rancher/k3s/k3s.yml ~/.kube/config
# Owner ändern
sudo chown DEIN_USER:DEINE_GROUP ~/.kube/config
# Umgebungsvariable in eigene .bashrc speichern mit dem Redirection Operator "append (>>)"
echo "export KUBECONFIG=/home/DEIN_USER/.kube/config >> ~/.bashrc"
# .bachrc im Terminal neu laden
source ~/.bashrc
# oder
. ~/.bashrc
```

Nun können wir Helm verwenden.

## Cert-Manager installieren

Damit wir zukünftig alle SSL Zertifikate automatisiert verwalten können, brauchen wir den [Cert-Manager](https://cert-manager.io/){:target="_blank"}. Dieser liegt in einem separaten Helm Repository vor, sodass wir dieses hinzufügen müssen. Danach können wir das fertige Helm Chart einfach starten: 

```bash
# Repository für Helm hinzufügen
helm repo add jetstack https://charts.jetstack.io --force-update
# Helm Repository Cache aktualisieren
helm repo update
# Cert-Manager CRD's hinzufügen
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.14.4/cert-manager.crds.yaml
# Helm Chart für Cert-Manager installieren (aktuelle Version zum Zeitpunkt des Artikels ist 1.14.4)
helm install cert-manager jetstack/cert-manager --namespace cert-manager --create-namespace --version v1.14.4
```

Somit haben wir den Cert-Manager installiert und dieser läuft auch schon. Als nächstes installieren wir&nbsp;**Let's Encrypt**!

## Let's Encrypt installieren
Für&nbsp;**Let's Enctypt** legen wir eine eigene Konfigurationsdatei im&nbsp;**yaml** Format an. Der Konfigurationstyp nennt sich&nbsp;**Cluster-Issuer**. Das ist eine Kubernetes Ressource, die vertrauenswürdige Zertifikatsstellen repräsentiert, welche zur Erstellung von ssl Zertifikaten genutzt werden können. Unsere Konfigurationsdatei sieht wie folgt aus:

```yaml
# Dateiname: letsencrypt.yaml

# API Version für diese Konfiguration
apiVersion: cert-manager.io/v1
# Typ der Ressource
kind: ClusterIssuer
metadata:
  # Name im cluster
  name: letsencrypt-prod
  # Namespace innerhalb des clusters
  namespace: default
# Spezifikationen des ClusterIssuer  
spec:
  # Konfiguration für das ACME Protokoll
  acme:
    # Deine E-Mail für die Registrierung des Zertifikats
    email: my-email@example.com
    # Zertifikatsserver
    server: https://acme-v02.api.letsencrypt.org/directory
    # Kubernetes Secret für Zertifikatsanforderungen, wird automatisch erzeugt
    privateKeySecretRef:
      # Name des Keys für das Secret. Kann frei vergeben werden
      name: letsencrypt-prod
    # Mechanismen zur Domain-Validierung
    solvers:
    # HTTP01-Challenge Verfahren
    - http01:
        # Welcher Ingress soll verwendet werden. Wir verwenden traefik
        ingress:
          class: traefik
```

Nachdem wir die Konfigurationsdatei gespeichert haben, aktivieren wir die Konfiguration: 

```bash
# Aktiviere die Ressource
kubectl apply -f letsencrypt.yaml
```

Hier verwenden wir das erste Mal das Tool&nbsp;**kubectl**. kubectl ist das Kommandozeilentool für die Verwaltung von Kubernetes. Hiermit lassen sich Cluster konfigurieren, Deployments erstellen und löschen, Ressourcen aktivieren und vieles mehr.
<br/><br/>
Somit haben wir die wichtigsten Vorbereitungen getroffen um zukünftig unsere Domains automatisiert in Kubernetes mit Zertifikaten zu versehen. In [Teil 3](/einfaches-kubernetes-setup-mit-lokalen-dockerfiles-teil-3) werden wir uns dann mit der Konfiguration von dem leichtgewichtigen Reverse-Proxy&nbsp;**Traefik** auseinandersetzen.