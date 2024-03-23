---
title: 'Einfaches Kubernetes Setup mit lokalen Dockerfiles - Teil 1'
description: 'Ein Deployment-Prozess mit Kubernetes eignet sich vor allem, wenn man minimale oder keine Ausfallzeiten und eine zuverlässigere Infrastruktur anstrebt. Ich erkläre dir in dieser mehrteiligen Reihe, wie man relativ einfach ein Kubernetes-Setup erstellen und eigene lokale Docker-Images damit bereitstellen kann.'
category: DevOps
tags:
  - Kubernetes
  - Docker
  - Linux
created: 2024-03-23
sitemap:
  lastmod: 2024-03-23
---
## Was ist Kubernetes?
Bevor wir mit dem Setup beginnen, erkläre ich einmal kurz, was Kubernetes überhaupt ist:
<br/><br/>
Kubernetes ist ein System zur Verwaltung von container-basierter Infrastruktur, wie z.B. Docker-Containern. Dies wird in der Regel als Orchestrierung bezeichnet. Hierbei wird die Infrastruktur in mehrere Bereiche unterteilt. Die wichtigsten für uns sind dabei folgende:

### Cluster
Ein Cluster ist sozusagen die Zusammenfassung mehrerer Ressourcen innerhalb der Kubernetes Infrastruktur. Innerhalb des Clusters wird sichergestellt, dass Anwendungen skalierbar und hochverfügbar sind.

### Deployment
Ein Deployment ist in Kubernetes der Teil, der beschreibt, welche Anwendungen mit welchen Ressourcen skaliert werden sollen. Hier bestimmt dann zum Beispiel auch, wieviele Pods für bestimmte Anwendungen gestartet werden sollen. 

### Pod
Ein Pod ist eine Sammlung von einer oder mehrerer Container Anwendungen. Innerhalb der Pods werden die Anwendungen ausgeführt.

### Service
Ein Service stellt in Kubernetes den Anwendungen ein eigenes Netzwerk zur Verfügung. So können Anwendungen, die zusammen gehören innerhalb des Clusters miteinander kommuniztieren.

### Ingress
Ein Ingress stellt die Kommunikation von Anwendungen außerhalb des Clusters bereit. Hier können z.B. IP Adressen für die Außenwelt oder auch Domains bereitgestellt werden.

### Middleware
In Kubernetes nutzt man Middleware um Ressourcen zwischen Anwendungen bereitzustellen. Damit kann man sozusagen die Funktionen von Anwendungen innerhalb von Kubernetes erweitern.
<br/><br/>

Wer sich mit dem Thema intensiver auseinandersetzen möchte, dem empfehle ich die [Kubernetes Dokumentation](https://kubernetes.io/docs/setup/){:target="_blank"}

Wer sich lieber Videos anschaut, dem kann ich nur den [Kubernetes Kurs von TechWorld with Nana](https://www.youtube.com/watch?v=X48VuDVv0do){:target="_blank"} empfehlen!

## Was wollen wir damit machen?

So eine Kubernetes Infrastruktur kann natürlich beliebig komplex sein. Ich beginne hier mit einem einfachen **Nuxt** Projekt. Wir verdockern **Nuxt** und legen das Dockerfile in ein Verzeichnis auf unserem Server. Von dort aus erstellen wir ein Docker Image und nutzen dieses dann für unser Kubernetes Deployment. 
<br/><br/>
Natürlich wollen wir die Nuxt Anwendung nicht über eine IP von außen erreichen, sondern über eine Domain. Als Beispiel nehmen wir **`example.com`**. Also müssen wir diese in unserem Kubernetes Setup verfügbar machen. Ein Redirect zu **`www.example.com`** wäre natürlich auch noch gut. Zumindest ist das ein häufiger Anwendungsfall. Was dann noch nicht fehlen darf, ist eine Umleitung zu **HTTPS**. Damit wir uns nicht um eine manuelle Bereitstellung von Zertifikaten kümmern müssen, wollen wir unsere Domain automatisch mit einem **Let's Encrypt** Zertifikat versehen.

### Projekt Setup:
 - Nuxt Anwendung als lokales Dockerfile
 - Erreichbar über die Domain **example.com**
 - Umleitung von **non-www** zu **www**
 - Automatische Zertifikatserstellung und -aktualisierung
 - Automatisches Umleiten zu **https**

## Installation und Konfiguration von Kubernetes

Für kleine und mittelgroße Projekte empfehle ich [k3s](https://k3s.io/){:target="_blank"}. K3s ist eine leichtgewichtige Kubernetes Distribution, die dadurch heraussticht, dass sie mit sehr wenig Aufwand installiert und konfiguriert werden kann.
Für unsere Zwecke also völlig ausreichend. Für detaillierte Infos zu k3s, empfehle ich euch, einmal in die [Doku](https://docs.k3s.io/){:target="_blank"} zu schauen.
<br/><br/>
Das Besondere an k3s ist, dass man es im Terminal mit einem Einzeiler installieren und starten kann: 

```bash
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --cluster-init --secrets-encryption --docker" sh -s -
```

Der Befehl macht folgendes: Zuerst wird k3s von der Webseite heruntergeladen. Danach gibt man den auszuführenden Befehl samt Argumenten als Umgebungsvariable **INSTALL_K3S_EXEC** mit. 
 - **server**: Starte einen k3s Server
 - **cluster-init**: Starte den Server im Cluster Modus
 - **secrets-encryption**: Secrets werden verschlüsselt erzeugt und abgelegt
 - **docker**: Benutzer Docker als Container innerhalb der gesamten k3s Infrastruktur. **Wichtig**: Diese Einstellung ist wichtig, damit später lokale Dockerfiles in unserem Kubernetes Setup gefunden und verwendet werden können!
