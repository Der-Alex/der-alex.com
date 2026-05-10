---
title: 'Wie man WordPress aus einem Unterverzeichnis im Rootverzeichnis aufrufbar macht'
description: 'Die letzten 2 Tage hatte ich eine kleine Herausforderung. Es sollte ein WordPress Blog, der in einem Unterverzeichnis liegt, direkt per FQDN – also über die Domain – aufrufbar sein. Der Haken an der Sache: Ich hatte keinen Zugriff auf die Domainverwaltung. Daher konnte ich die Domain nicht direkt auf das Unterverzeichnis routen. Was also tun?'
category: Development
tags:
  - WordPress
  - Linux
created: 2013-07-05
sitemap:
  lastmod: 2024-03-19
---

Nach etwas Recherche bin ich auf 2 WordPress Artikel gestoßen, die die Lösung relativ gut beschreiben.

[http://codex.wordpress.org/Giving_WordPress_Its_Own_Directory](http://codex.wordpress.org/Giving_WordPress_Its_Own_Directory){:target="_blank"}

[http://codex.wordpress.org/Moving_WordPress#When_Your_Domain_Name_or_URLs_Change](http://codex.wordpress.org/Moving_WordPress#When_Your_Domain_Name_or_URLs_Change){:target="_blank"}
<br><br>
Ich gehe mal von einem vorinstallierten WordPress Blog in einem Unterverzeichnis aus. Als Beispiel nehme ich einen Blog, erreichbar unter `www.example.com/blog`.
<br><br>
Im Ersten Schritt muss man WordPress klar machen, dass das Unterverzeichnis und die Seiten-URL an 2 unterschiedlichen Stellen liegen. Im Adminmenü geht man dazu auf Einstellungen > Allgemein. Unter WordPress-Adresse sollte schon das Unterverzeichnis eingetragen sein also `www.example.com/blog`. Unter Seiten-Adresse nimmt man das Unterverzeichnis `/blog` nun weg und speichert die Änderungen. Wahrscheinlich ist der Blog jetzt nicht mehr aufrufbar. Aber keine Panik!
<br><br>
Im nächsten Schritt loggt man sich auf dem Webserver ein (per ftp, ssh oder wie auch immer) und kopiert nun die `index.php` und die `.htaccess` aus dem Unterverzeichnis in das Rootverzeichnis, auf das die Domain zeigt. Man sollte sich auch noch vergewissern, dass die Dateiberechtigungen weiterhin stimmen.
<br><br>
Als Nächstes öffnet man die index.php aus dem Rootverzeichnis und ändert folgende Zeile.
<br><br>
Von:
`require('./wp-blog-header.php');`

Nach:
`require('./blog/wp-blog-header.php');`
<br><br>
Nun sollte der Blog wieder erreichbar sein. Also loggt man sich als Admin ein und aktualisiert sicherheitshalber noch einmal die Permalinkstruktur.
<br><br>
Der Blog war für mich erreichbar. Allerdings funktionierte keine Seite, kein Menü und auch kein Admin Login mehr. Alle Anfragen resultierten in einem Error 404. Eine Überprüfung der `.htaccess` ergab auch keinen Hinweis, da die Permalinkstruktur weiterhin korrekt war:

```
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
# END WordPress
```

Wo lag nun der Fehler? Da die Permalinkstruktur vorher funktionierte, musste auf dem Apache Webserver `mod_rewrite` schon laufen. Also konnte es eigentlich nur noch ein Fehler in der Apache Konfiguration sein.
<br><br>
Und genau so war es auch. Wichtig ist, dass in der Apache Konfiguration in dem Directory Kontext die `.htaccess` Datei für das Root Verzeichnis beschreibbar sein darf. Das macht man mit AllowOverride. In der `apache.conf` findet man folgenden Eintrag:

```
# Mein Rootverzeichnis
<Directory "/var/www">
    Options Indexes FollowSymLinks
    AllowOverride None
    Order allow,deny
    Allow from all
</Directory>
```

Hier ändert man den Parameter `AllowOverride`:

```
# Mein Rootverzeichnis
<Directory "/var/www">
    Options Indexes FollowSymLinks
    AllowOverride All
    Order allow,deny
    Allow from all
</Directory>
```

Danach noch einmal den Apache Dienst neustarten und schon läuft der Blog wieder wie gewohnt.
Die Änderung muss in der `apache.conf` durchgeführt werden. Auch wenn man den Parameter in der `.htaccess` einträgt wird er von der apache.conf wieder überschrieben.
