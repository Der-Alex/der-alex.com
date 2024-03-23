---
title: 'Einfaches Kubernetes Setup mit lokalen Dockerfiles - Teil 1'
description: 'Ein Deployment-Prozess mit Kubernetes eignet sich vor allem, wenn man minimale oder keine Ausfallzeiten und eine zuverlässigere Infrastruktur anstrebt. Ich erkläre dir in dieser mehrteiligen Reihe, wie man relativ einfach ein Kubernetes-Setup erstellen und eigene lokale Docker-Images damit bereitstellen kann.'
category: DevOps
tags:
  - Kubernetes
  - Docker
created: 2024-03-23
sitemap:
  lastmod: 2024-03-23
---
## Was ist Kubernetes?
Bevor wir mit dem Setup beginnen, erkläre ich einmal kurz, was Kubernetes überhaupt ist: 
Kubernetes ist ein System zur Verwaltung von container-basierter Infrastruktur, wie z.B. Docker-Containern. Dies wird in der Regel als Orchestrierung bezeichnet. Hierbei wird die Infrastruktur in mehrere Bereiche unterteilt. Die wichtigsten für uns sind dabei folgende:

### Cluster
Ein Cluster ist sozusagen die Zusammenfassung mehrerer Ressourcen innerhalt der Kubernetes Infrastruktur. Innerhalb des Clusters wird sichergestellt, dass Anwendungen skalierbar und hochverfügbar sind.

### Deployment
Ein Deployment ist in Kubernetes der Teil, der beschreibt, welche Anwendungen mit welchen Ressourcen skaliert werden sollen. Hier bestimmt dann zum Beispiel auch, wieviele Pods für bestimmte Anwendungen gestartet werden sollen. 

### Pod
Ein Pod ist eine Sammlung von einem oder mehreren Container Anwendungen. Innerhalb der Pods werden die Anwendungen ausgeführt.

### Service
Ein Service stellt in Kubernetes Anwendungen ein eigenes Netzwerk zur Verfügung. So können Anwendungen, die zusammen gehören innerhalb des Clusters miteinander kommuniztieren.

### Ingress
Ein Ingress stellt die Kommunikation von Anwendungen außerhalb des Clusters bereit. Hier können z.B. IP Adressen für die Außenwelt oder auch Domains bereitgestellt werden.

### Middleware
In Kubernetes nutzt man Middlewares um Ressourcen zwischen Anwendungen bereitzustellen. Damit kann man sozusagen die Funktionen von Anwendungen innerhalb von Kubernetes erweitern.

Wer sich mit dem Thema intensiver auseinandersetzen möchte, dem empfehle ich die [Kubernetes Dokumentation](https://kubernetes.io/docs/setup/){:target="_blank"}

Wer sich lieber Videos anschaut, dem kann ich nur den [Kubernetes Kurs von TechWorld with Nana](https://www.youtube.com/watch?v=X48VuDVv0do){:target="_blank"} empfehlen!

## Was wollen wir damit machen?



Für kleine und mittelgroße Projekte empfehle ich [k3s](https://k3s.io/){:target="_blank"}. K3s ist eine leichtgewichtige Kubernetes Distribution, die dadurch heraussticht, dass sie mit sehr wenig Aufwand installiert und konfiguriert werden kann. 