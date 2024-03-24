---
title: 'Einfaches Kubernetes Setup mit lokalen Dockerfiles - Teil 3'
description: 'In unserem Kubernetes Setup verwenden wir den leichtgewichtigen Reverse-Proxy Traefik, um unsere Anwendungen nach außen erreichbar zu machen. Wie man Traefik Middleware erstellt und wofür die gut sind, werde ich dir erklären.'
category: DevOps
tags:
  - Kubernetes
  - Docker
  - Linux
created: 2024-03-24
sitemap:
  lastmod: 2024-03-25
---
## Zusammenfassung Teil 1 und 2
In [Teil 1](/einfaches-kubernetes-setup-mit-lokalen-dockerfiles-teil-1) haben wir uns um die grundlegende Konfiguration von Kubernetes gekümmert und unseren Cluster lauffähig gemacht.

In [Teil 2](/einfaches-kubernetes-setup-mit-lokalen-dockerfiles-teil-2) haben wir Helm kennen gelernt und einen Helm Chart für Zertifikatsstellen installiert, sowie eine eigene Kubernetes Konfiguration für Let's Encrypt erstellt.
<br/><br/>
Als nächstes wollen wir uns darum kümmern, unsere zukünftigen Anwendungen über einen Reverse-Proxy nach außen Erreichbar zu machen. Hierfür nutzen wir [Traefik](https://traefik.io/traefik/){:target="_blank"}, einen leichtgewichtigen Reverse-Proxy und LoadBalancer. In unserer Kubernetes Standardinstallation ist Traefik schon in Form eines&nbsp;**Ingress-Controller** vorhanden. Dabei handelt es sich um eine Ressource, die für eingehenden http und https Verkehr zuständig ist. Da Traefik schon vorhanden ist, verwenden wir es auch für unsere Anwendungen. Alternativ kann man auch Nginx, HAProxy oder andere Proxies verwenden.

## WWW Redirect Middleware einrichten
Für unsere zukünftigen Anwendungen fehlt noch der automatische Redirect von non-www zu www, sowie die automatische Umleitung von http zu https. Beides lässt sich einfach durch eine Middleware Konfiguration einrichten. Beginnen wir mit der Middleware Konfiguration für den Redirect zu www:

```yaml
# Dateiname: traefik-redirect-www.yaml
# API Version
apiVersion: traefik.io/v1alpha1
# Typ der Ressource
kind: Middleware
metadata:
  # Name unserer Middleware
  name: redirect-www
  namespace: default
spec:
  # Regex, der beschreibt, von wo nach wo umgeleitet werden soll
  # In unserem Fall von http://example.com oder https://example.com zu http://www.example.com bzw. https://www.example.com
  redirectRegex:
    regex: "^https?://(?:www\\.)?(.+)"
    replacement: "https://www.${1}"
```

Das war's auch schon. Wie zuletzt für unsere Let's Encrypt Konfiguration aktivieren wir unsere Middleware mit&nbsp;**kubectl**:

```bash
kubectl apply -f traefik-redirect-www.yaml
```

## HTTPS Redirect Middleware einrichten
Für den Redirect zu https erstellen wir eine weitere Middleware Konfiguration: 

```yaml
# Dateiname: traefik-redirect-https.yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: redirect-https
  namespace: default
spec:
  # Beschreibung, wie umgeleitet werden soll. In unserem Fall immer zu https
  redirectScheme:
    scheme: https
    permanent: true
```

Auch diese Konfiguration ist recht übersichtlich. Wieder aktivieren wir sie mit&nbsp;**kubectl**:

```bash
kubectl apply -f traefik-redirect-https.yaml
```

Das war's auch schon! Wir haben für unsere zukünftigen Anwendungen alles vorbereitet. 

In [Teil 4](/einfaches-kubernetes-setup-mit-lokalen-dockerfiles-teil-4) können wir dann endlich unsere Anwendung erstellen und deployen.