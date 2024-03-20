---
title: 'Mehr Websicherheit durch Linux Zugriffsrechte'
description: 'Heute habe ich meinen Apache Webserver etwas auf Vordermann gebracht. Dabei war mir ein Aspekt besonders wichtig: Sicherheit. Allein durch das Bearbeiten der Ordner- und Dateirechte innerhalb des Webverzeichnisses kann man schon für ein wenig mehr Websicherheit sorgen. Bevor es jedoch an die Zugriffsrechte geht, müssen noch ein paar Änderungen vorgenommen werden.'
category: DevOps
tags:
  - Linux
created: 2013-07-08
sitemap:
  lastmod: 2024-03-19
---
Der Webserver läuft unter einem separaten Benutzerkonto `www-data`. Dieses Konto sollte allerdings nicht als Besitzer in der Webverzeichnisstruktur genutzt werden. Deshalb sollte hierfür ein weiteres Benutzerkonto angelegt werden. Dies macht man wie folgt in der Linux Konsole. Den Benutzer nenne ich einfach mal `www-user`.

```bash
adduser www-user
```

Die Shell fragt auch gleich nach einem Passwort. Dieser Benutzer wird im späteren Verlauf dann auch für die Bearbeitung einzelner Dateien genutzt. Nachdem das Benutzerkonto angelegt ist, kann man sich nun an die Zugriffsrechte für Dateien und Ordner wagen. Als Erstes wird der neu angelegte Benutzer zum Besitzer (Owner) aller Dateien und Unterordner des Webverzeichnisses `/var/www` gemacht.
**Wichtig:** Das darf nur für das Verzeichnis `/var/www` und dessen Dateien und Unterverzeichnisse durchgeführt werden.

```bash
cd /var
chown -R www-user www
```

Das Benutzerkonto für den Webserver `www-data` bleibt weiterhin als zugriffsberechtigte Gruppe eingetragen. Sollte dies nicht der Fall sein, kann man die Berechtigung mit folgendem Befehl einrichten.

```bash
chgrp -R www-data www
```

Als Nächstes können die Lese-, Schreib- und Ausführrechte für den Owner, die Gruppe und Sonstige definiert werden. In der Regel sollte es ausreichen, wenn der Owner Vollzugriff auf Ordner sowie Lese- und Schreibzugriff auf Dateien bekommt. Die Zugriffsberechtigte Gruppe erhält Lese- und Ausführberechtigung für Ordner und ebenfalls Lese- und Schreibzugriff auf Dateien. Letzteres ist z.B. wichtig für Zugriff von Content-Management Systemen wie `WordPress`, um .htaccess-Dateien weiterhin konfigurierbar zu machen. Ist dies nicht notwendig, reicht auch ein reiner Lesezugriff für die Gruppe. Sonstige Nutzer benötigen in der Regel keine Berechtigungen. Die Zugriffsrechte werden mit dem Befehl chmod durchgeführt. Die Rechte werden mit 3 Ziffern angegeben, die von Links nach Rechts für Owner, Gruppe und Sonstige Nutzer stehen. Jede Ziffer erhält über das Oktalsystem von 0 bis 4 ein spezifisches Recht und je nach Berechtigung werden die Oktaltzahlen wie folgt addiert.
<br/><br/>
<div class="block p-4 rounded-2xl bg-rhino-950">

Wert | Recht
---- | -----
0 | kein Recht
1 | Ausführen
2 | Schreiben
4 | Lesen

</div>
<br/>
Die Ordnerrechte werden also wie folgt vergeben.

```bash
chmod 750 ordner
```

Für die Dateien sieht das Ganze dann folgendermaßen aus.

```bash
chmod 640 datei
```

Da ich jedoch recht viele Unterverzeichnisse und Dateien habe, möchte ich natürlich nicht für jeden Ordner einzeln die Rechte vergeben. Dank Linux Sucher und ein paar Shell Befehlen ist das auch einfacher möglich. Wichtig: Erst sollte man sich vergewissern, dass man die Befehle nicht vom Rootverzeichnis, sondern aus dem Verzeichnis `/var/www` ausführt.

```bash
cd /var/www
chmod 750 $(find . -type d)
```

Der Befehl `find . -type d` macht nichts anderes als im bestehenden Verzeichnis alle Ordner zu suchen. Gleiches kann man auch für Dateien ausführen.

```bash
chmod 660 $(find . -type f)
```

Das wars auch schon. Nun sind die Ordner und Dateien innerhalb der Webverzeichnisstruktur ausschließlich für Owner und Gruppe nutzbar.
