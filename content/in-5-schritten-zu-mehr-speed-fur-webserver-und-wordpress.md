---
title: 'In 5 Schritten zu mehr Speed für Webserver und WordPress'
description: 'WordPress kann man mit ein paar einfachen Optimierungen zu einem schnellen Blog werden lassen. Ich zeige euch heute, wie man mit 5 einfachen Schritten mehr Performance aus einem WordPress Blog heraus holt!'
category: DevOps
tags:
  - Linux
  - WordPress
created: 2013-07-18
---
Gestern habe ich meinen Webserver und meinen WordPress Blog weiter getuned. Mich hat es vor allem gestört, dass mein Server teilweise 4 Sekunden benötigt hat, um meine Seite anzuzeigen. Zuerst dachte ich, es liegt an dem Virtuellen Server und dass dieser mit anderen Kunden geteilt wird und dadurch Bandbreite verloren geht. Doch damit wollte ich mich nich zufrieden geben. Ebenso wollte ich nicht auf meine bestehende Apache-PHP-MySQL Installation verzichten und diese komplett austauschen. Letzendlich habe ich ein wenig recherchiert und bin auf 5 wesentliche Schritte gestoßen, die bei der Optimierung von WordPress und Webserver einiges an Geschwindigkeit herauskitzeln können.

## Apache Webserver entschlacken

In einer Apache Standardinstallation sind einige Module vorinstalliert und auch schon aktiv. Die meisten werden allerdings für einen einfachen WordPress Blog gar nicht benötigt. Daher ist es durchaus sinnvoll nicht benötigte Module zu deaktivieren. Zuerst prüft man, welche Module überhaupt aktiv sind.

```bash
apache2ctl -M

Loaded Modules:
 core_module (static)
 log_config_module (static)
 logio_module (static)
 mpm_prefork_module (static)
 http_module (static)
 so_module (static)
 alias_module (shared)
 authn_file_module (shared)
 authz_host_module (shared)
 autoindex_module (shared)
 deflate_module (shared)
 dir_module (shared)
 expires_module (shared)
 headers_module (shared)
 mime_module (shared)
 negotiation_module (shared)
 php5_module (shared)
 rewrite_module (shared)
 setenvif_module (shared)
Syntax OK
```

In meinem Fall sind die unnötigen Module schon deaktiviert. Die Liste beinhaltet also nur die für mich notwendigen Module. Möchte man ein Modul deaktivieren, kann man dies mit dem Befehl [a2dismod](http://manpages.ubuntu.com/manpages/hardy/man8/a2dismod.8.html){:target="_blank"} tun.

```bash
a2dismod modulname
```

Um besitmmte Module zu aktivieren gibt es den Befehl [a2enmod](http://manpages.ubuntu.com/manpages/hardy/man8/a2enmod.8.html){:target="_blank"}.

```bash
a2enmod modulname
```


## Apache Webserver für schwache Hardware umkonfigurieren

Der Apache Webserver bietet ein Modul, welches vor allem für schwächere Hardware interessant ist. Ich habe auf meinem Virtual Server beispielsweise nur einen Single Core Prozessor und 1GB Ram. Hier bietet sich das Multi-Processing-Modul [MPM-Prefork](https://httpd.apache.org/docs/2.2/mod/prefork.html){:target="_blank"} an. Das Modul installiert man auf Debian Derivaten wie Ubuntu mit **apt**.

```bash
apt-get install apache2-mpm-prefork
```

Danach kann man in der apache.conf das Modul konfigurieren. 

```bash
<IfModule mpm_prefork_module>
    StartServers            3
    MinSpareServers         3
    MaxSpareServers        10
    MaxClients             50
    MaxRequestsPerChild  2000
</IfModule>
```

**StartServers** gibt die Anzahl der Serverprozesse nach dem Start des Apache Deamons an. **MaxSpareServers** steht für die Maximale Anzahl der unbeschäftigten Kindprozesse des Servers. **MinSpareServers** demnach für die minimalte Anzahl. Mit **MaxClients** wird die maximale Anzahl der Kindprozesse zur Behandlung von Anfragen angegeben.

Mit **MaxRequestsPerChild** kann man die Obergrenze für die Anzahl von Anfragen pro Kindprozess bestimmen.
Interessierte können sich [hier](https://httpd.apache.org/docs/2.2/mod/mpm_common.html){:target="_blank"} die entsprechenden Direktiven genauer ansehen. Nach der Konfiguration wird noch einmal der Webserver neu gestartet und schon kann es mit dem nächsten Schritt weiter gehen.

## PHP Caching mit APC-Cache

Zum Cachen des PHP Codes benutze ich den [APC-Cache](https://de.wikipedia.org/wiki/Alternative_PHP_Cache){:target="_blank"}. Installieren lässt sich dieser via **apt**. 

```bash
apt-get install php-apc
```

Nach der Installation des APC Moduls findet man die Konfigurationsdatei unter **/etc/php5/conf.d/apc.ini**. Fürs erste reichen folgende Einstellungen.

```bash
extension=apc.so
apc.enabled=1
apc.shm_segments=1
apc.shm_size=64M
```

In meiner Konfiguration ist ein Shared Memory Segment mit der Größe von 64MB angegeben. Genauere Infos zur Konfiguration von APC findet man hier. Nun muss man WordPress auch noch das APC Caching beibringen.

## Den APC Cache auf WordPress anwenden

Die einfachste Möglichkeit APC mit WordPress zu nutzen ist das Plugin [APC Object Cache Backend](https://wordpress.org/plugins/apc/){:target="_blank"}. Das Plugin lässt sich über das WordPress Admin Menü installieren. Danach muss noch die Datei **object-cache.php** aus dem Plugin Verzeichnis in das Verzeichnis wp-content kopiert werden. Womit wir auch schon beim letzten Punkt angekommen sind.

## Zusätzlicher Filecache für WordPress

Neben dem PHP Opcode Cache APC habe ich noch [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/){:target="_blank"} laufen. Dieser erzeugt komprimierte Dateien für WordPress Posts und Seiten, was noch mal einiges an Performance heraus holt. Aus dieses Plugin lässt sich einfach über das Admin Menü installieren.
<br/><br/>
Das sind nur einige wenige Möglichkeiten um den eigenen Server mit WordPress zu optimieren. Aber allein diese haben es schon in sich. So konnte ich z.B. meine Ladezeiten auf gute 1.5 Sekunden herabsetzen.

