---
title: 'Klassen effektiver laden mit spl_autoload'
description: 'Mit steigender Komplexität eines Webprojektes in PHP wächst oft auch die Anzahl der Dateien. Deshalb ist es sinnvoll, Dateien von einem zentralen Punkt aus nach Bedarf zu laden. Doch was ist, wenn das Projekt weiter wächst und Dateien hinzukommen? Das Zauberwort heißt autoload.'
category: Development
tags:
  - PHP
created: 2013-07-14
sitemap:
  lastmod: 2024-03-19
---
PHP bietet ab Version 5 von Haus aus autoload-Funktionen. Sofern man sich an bestimmte Konventionen hält, kann man sehr effizient Klassen laden, ohne vorher zu wissen, ob es sie überhaupt gibt. Um das zu verdeutlichen erstelle ich ein einfaches Beispiel.
<br/><br/>

In meinem Webverzeichnis erstelle ich zuerst eine Datei&nbsp;**index.php** und einen Ordner&nbsp;**classes**. In dem Ordner&nbsp;**classes** werden nun alle meine Klassen-Dateien erstellt, die ich je nach Bedarf aufrufen möchte. Sowas könnte z.B. eine Datenbank-Klasse sein, die die Funktionen für eine Datenbankverbindung beinhaltet. Die entsprechende Datei nenne ich&nbsp;**Database.class.php**.
<br/><br/>

Wichtig ist, dass der Dateiname groß geschrieben wird. In den meisten Konventionen werden Klassen groß geschrieben. Da die Klasse meiner Datenbank-Datei genauso heißen soll wie die Datei, wird der Dateiname deshalb auch groß geschrieben. Der Einfachheit halber schreibe ich nur einen Konstruktor in die Klasse, der beim Aufruf der Klasse automatisch ausgeführt wird und gebe hier nur eine Info aus, dass die Klasse geladen wurde. Das Ganze sieht dann so aus:

```php
<?php
/*
 * Database.class.php
 */
class Database {
    function __construct() {
        echo "Database class loaded.";
    }
}
```

Bei kleineren Projekten lädt man nun einfach die notwendige Datei aus dem Ordner.

```php
<?php
/*
 * index.php
 */
include 'classes/Database.class.php';
```

Damit ist dann die notwendige Datei geladen. Das Ganze jetzt für 1000 Dateien durchzuführen wäre ziemlich umständlich. Natürlich könnte ich jetzt auch in einer Schleife alle Dateien innerhalb des Ordners abfragen und laden. Allerdings wäre das nicht gerade ressourcenfreundlich.
<br/><br/>

An dieser Stelle nutze ich lieber die autoload-Funktionen von PHP. Benötigt werden 4 Funktionen:&nbsp;**spl_autoload**,&nbsp;**spl_autoload_register**,&nbsp;**spl_autoload_extensions** und&nbsp;**set_include_path**. Um mir Schreibarbeit zu ersparen erstelle ich mir auch noch eine Konstante für den Ordner classes.

```php
<?php
/*
 *	index.php
 */
define('C', 'classes/');

function boot() {
	spl_autoload_extensions('.class.php');
	spl_autoload_register('autoLoad');
}

function autoLoad($className) {
	set_include_path(C);
	spl_autoload($className);
}

boot();
return new Database();
```

Nachdem ich die Konstante definiert habe, erstelle ich eine Funktion&nbsp;**boot**. Diese ruft zuerst die Funktion&nbsp;**spl_autoload_extensions** auf. Der Funktion wird ein Parameter&nbsp;**.class.php** mitgegeben. Die Funktion macht nichts anderes als dem Autoloader zu sagen, dass dieser auf Dateien mit der Dateiendung&nbsp;**.class.php** achten soll.
<br/><br/>

Als Nächstes wird die Funktion&nbsp;**spl_autoload_register** aufgerufen und der Parameter&nbsp;**autoLoad** mitgegeben. Hier wird dem Autoloader nun mitgeteilt, wie die Funktion heißt, die die benötigten Klassen automatisch lädt. Die weitere Funktion, die ich erstelle heißt demnach&nbsp;**autoLoad**.
<br/><br/>

Diese Funktion nimmt einen Parameter entgegen und zwar&nbsp;**$className**. Zuerst wird mit der Funktion&nbsp;**set_include_path** dem Autoloader gesagt, an welcher Stelle er nach Klassen ausschau halten soll. Danach wird mit der Funktion&nbsp;**spl_autoload** die Klasse&nbsp;**$className** geladen. Die Variable&nbsp;**$className** wird automatisch befüllt, sobald man versucht, eine unbekannte Klasse zu nutzen. Dies mache ich nach dem Aufruf meiner Funktion&nbsp;**boot** mit der Anweisung&nbsp;**return new Database();**.
<br/><br/>

Im Normalfall ist die Klasse&nbsp;**Database** nicht bekannt, so lange man nicht die dazugehörige Datei lädt. Dies übernimmt der Autoloader für mich. So muss ich mich nicht mehr um die Dateien kümmern. Ich muss nur noch wissen, welche Klasse ich aufrufen möchte.
<br/><br/>

P.S.: Natürlich müsste hier z.B. noch abgefragt werden, ob die zu ladenden Dateien überhaupt vorhanden sind. Es soll aber auch nur ein einfaches, kurzes Beispiel sein.
<br/><br/>

P.P.S.: Wenn euch der Beitrag gefällt, dann teilt ihn doch bitte. :)
