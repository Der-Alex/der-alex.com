---
title: 'Eine einfache, mehrfarbige Navigation'
description: 'Auf meinem Blog habe ich meine Kategorien farblich unterteilt. Ein leichtes Lila für die Hauptkategorie Development, Orange für die Kategorie Design und Blau für WordPress. Die dazugehörigen Untermenüpunkte haben einen farblich passenden Hover Effekt. Mit einem einfachen Beispiel möchte ich zeigen, wie das geht.'
category: Webdesign
tags:
  - CSS
  - HTML
  - WordPress
created: 2013-07-07
---
Zuerst erstellt man eine Navigation. Nach altbewährter Methode macht man dies mit einer Liste.

```html
<ul>
  <li>
    <a href="#">Kategorie 1</a>
    <ul>
      <li>
        <a href="#">Menuepunkt</a>
      </li>
      <li>
        <a href="#">Menuepunkt</a>
      </li>
      <li>
        <a href="#">Menuepunkt</a>
      </li>
    </ul>
  </li>
  <li>
  <a href="#">Kategorie 2</a>
    <ul>
      <li>
        <a href="#">Menuepunkt</a>
      </li>
      <li>
        <a href="#">Menuepunkt</a>
      </li>
      <li>
        <a href="#">Menuepunkt</a>
      </li>
    </ul>
  </li>
</ul>
```

Die Liste besteht aus 2 Ebenen. Die erste Ebene steht für die Hauptkategorien. Die zweite Ebene zeigt die Unterpunkte der jeweiligen Kategorie an. Damit die Kategorien nun unterschiedliche Farben bekommen können, müssen die Listenelemente der ersten Ebene mit einem Attribut versehen werden, damit sie später beim Stylen mittels CSS auch unterschieden werden können.

```html
<ul>
  <li class="kat1">
    <a href="#">Kategorie 1</a>
    <ul>
    ...
    ...
  </li>
  <li class="kat2">
    <a href="#">Kategorie 2</a>
    <ul>
    ...
    ...
```

Mit diesen Informationen kann man sich dann ans Stylen mittels CSS machen. Dazu bearbeite ich hauptsächlich die a-Tags.

```css
a {
  display:block;
  height:30px;
  width:100px;
  line-height:1.725em;
}
```

Das a-Tag ist ein Inline-Element. Um etwas mehr Möglichkeiten beim Designen zu bieten, stelle ich dieses als Block-Element um. Dadurch kann ich dem Element eine Höhe und Breite zuweisen. Als nächstes möchte ich der Hauptkategorie etwas Farbe mitgeben.

```css
.kat1 a {
  background:#99CC99;
}
```

Dazu spreche ich das Attribut – besser gesagt die Klasse – an, die ich dem Listenelement mitgegeben habe. Gleiches gilt für die zweite Kategorie.

```css
.kat2 a {
  background:#99CCCC;
}
```

Dummerweise reicht das noch nicht aus, denn nun sind auch alle Untermenüpunkte farbig hinterlegt. Das soll so nicht sein. Deshalb nehme ich die Farbe aller Untermenüpunkte wieder weg.

```css
.kat1 ul li a,
.kat2 ul li a {
  background:none;
}
```

Zum Schluss sollen noch die Menüpunkte – auch die Untermenüpunkte – einen Hover Effekt bekommen.

```
.kat1 a:hover {
  background:#B8DBB8;
}
.kat2 a:hover {
  background:#CCE6E6;
}
```

Das wars auch schon. Der Rest ist Designen nach Geschmack.
