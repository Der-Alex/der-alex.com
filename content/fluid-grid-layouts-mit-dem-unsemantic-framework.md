---
title: 'Fluid Grid Layouts mit dem Unsemantic Framework'
description: 'Responsive Webdesign, responsive Layouts. Man liest es überall und für den modernen Webdesigner wird es auch immer wichtiger. Ein tolles Hilfsmittel für Responsive Webdesign sind Grid Layouts mit dem Unsemantic Grid Framework'
category: Webdesign
tags:
  - CSS
  - HTML
created: 2013-07-11
sitemap:
  lastmod: 2024-03-19
---
Webseiten so zu gestalten, dass sie sich bei Bedarf in Größe und Aussehen verändern. Klingt erst mal kompliziert. Noch komplizierter wird es, wenn man bedenkt wie viele unterschiedliche Auflösungen es mitlerweile gibt. Eine Möglichkeit um sich das Leben leichter zu machen ist das [Unsemantic Framework](https://unsemantic.com){:target="_blank"} von [Nathan Smith](https://sonspring.com){:target="_blank"}. Der Vorteil dabei: Durch das Fluid Grid Framework muss man sich um die Breite einer Auflösung keine Gedanken mehr machen.
<br/><br/>

**Unsemantic** ist ein in CSS geschriebenes&nbsp;**Fluid Grid Framework**. Das bedeutet, dass es CSS Klassen für Webseiten mit variabelen Breiten anbietet. Diese Klassen bindet man einfach in sein HTML Layout ein und den Rest der Magie erledigt das Framework. Um das Framework nutzen zu können, muss man vorher einmal die entsprechende CSS-Datei von [https://unsemantic.com](https://unsemantic.com){:target="_blank"} herunterladen und im eigenen HTML-Quelltext einbinden. Danach kann man auch schon los legen.
<br/><br/>

Hierzu ein kleines Beispiel mit einer 3-spaltigen Webseite. 

```html
<div id="mywrapper" class="grid-container">
   <div id="spaltelinks" class="grid-33">
   <p>Dies ist die linke Spalte mit einem total wichtigen Text.
    Deshalb steht er auf der linken Seite.</p>
   </div>
   <div id="spaltemitte" class="grid-33">
   <p>Dies ist die mittlere Spalte mit einem total wichtigen Text.
    Deshalb steht er auf der mittleren Seite.</p>
   </div>
   <div id="spalterechts" class="grid-33">
   <p>Dies ist die rechte Spalte mit einem total wichtigen Text.
    Deshalb steht er auf der rechten Seite.</p>
   </div>
</div>
```

Zuerst definiert man eine `grid-container` Klasse. So weiß das Framework, dass es an dieser Stelle arbeiten soll. In den weiteren 3 Div-Elementen definiert man dann jeweils die Klasse `grid-33`. Die Klassennamen für variabele Breiten im Framework sind mit `grid-x` definiert und können in&nbsp;**5%** Schritten genutzt werden. Ausnahmen sind die Breiten für&nbsp;**33%** und&nbsp;**66%**. Schön ist, dass die auch gleich auf mehrere Nachkommastellen genau sind. So wird z.B. das 3-Spalten Layout mit je 33% Breite relativ genau auf 100% Breite verteilt.
<br/><br/>

Nun möchte ich aber, dass meine Bereiche an anderer Stelle stehen sollen. Auch kein Problem. Dafür gibt es die Klassen `push-x` und `pull-x`. So lassen sich einzelne Elemente neu ausrichten.

```html
<div id="mywrapper" class="grid-container">
   <div id="spaltelinks" class="grid-33 push-66">
   <p>Dies ist die linke Spalte mit einem total wichtigen Text.
    Deshalb steht er auf der linken Seite.</p>
   </div>
   <div id="spaltemitte" class="grid-33">
   <p>Dies ist die mittlere Spalte mit einem total wichtigen Text.
    Deshalb steht er auf der mittleren Seite.</p>
   </div>
   <div id="spalterechts" class="grid-33 pull-66">
   <p>Dies ist die rechte Spalte mit einem total wichtigen Text.
    Deshalb steht er auf der rechten Seite.</p>
   </div>
</div>
``` 

Gar nicht so schwierig. Aber das ist noch nicht alles. Man kann auch Freiräume definieren. Hierfür gibt es die Klassen `prefix-x` und `suffix-x`.

```html
<div id="mywrapper" class="grid-container">
   <div id="spaltelinks" class="grid-20 prefix-10">
   <p>Dies ist die linke Spalte mit einem total wichtigen Text.
    Deshalb steht er auf der linken Seite.</p>
   </div>
   <div id="spaltemitte" class="grid-20 prefix-10 suffix-10">
   <p>Dies ist die mittlere Spalte mit einem total wichtigen Text.
    Deshalb steht er auf der mittleren Seite.</p>
   </div>
   <div id="spalterechts" class="grid-20 suffix-10">
   <p>Dies ist die rechte Spalte mit einem total wichtigen Text.
    Deshalb steht er auf der rechten Seite.</p>
   </div>
</div>
```

Wer es ganz verrückt haben möchte, kann die Grids auch noch verschachteln. Dazu dient die Klasse `grid-parent`.

```html
<div id="mywrapper" class="grid-container">
   <div id="spaltelinks" class="grid-33 grid-parent">
   <p class="grid-50">Dies ist 50% links links Text :-)</p>
   <p class="grid-50">Dies ist 50% links rechts Text :-)</p>
   </div>
   <div id="spaltemitte" class="grid-33">
   <p>Dies ist die mittlere Spalte mit einem total wichtigen Text.
    Deshalb steht er auf der mittleren Seite.</p>
   </div>
   <div id="spalterechts" class="grid-33">
   <p>Dies ist die rechte Spalte mit einem total wichtigen Text.
    Deshalb steht er auf der rechten Seite.</p>
   </div>
</div>
```

Zu guter letzt kann man dann auch noch – ganz ohne Media Querys – für Tablet oder Smartphone weitere Grid-Layouts definieren. Hierfür gibt es die Klassenpräfixe `tablet–` und `mobile-`. Der Einfachheit halber mache ich hier nur ein Mobile Beispiel.

```html
<div id="mywrapper" class="grid-container">
   <div id="spaltelinks" class="grid-33 mobile-grid-100">
   <p>Dies ist die linke Spalte mit einem total wichtigen Text.
    Deshalb steht er auf der linken Seite.</p>
   </div>
   <div id="spaltemitte" class="grid-33 mobile-grid-50">
   <p>Dies ist die mittlere Spalte mit einem total wichtigen Text.
    Deshalb steht er auf der mittleren Seite.</p>
   </div>
   <div id="spalterechts" class="grid-33 mobile-grid-50">
   <p>Dies ist die rechte Spalte mit einem total wichtigen Text.
    Deshalb steht er auf der rechten Seite.</p>
   </div>
</div>
```

Wenn man nun den Browser entsprechend skaliert, steht irgendwann die linke Spalte zu 100% oben und darunter die mittlere und rechte Spalte zu je 50%.

Ich hoffe ich konnte etwas verständlich erklären, wie sehr so ein Grid-Framework die Arbeit beim Webdesign erleichtert. Wenn euch der Beitrag gefällt, dann teilt ihn doch bitte. 🙂
