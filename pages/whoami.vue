<script setup lang="ts">
import { useIconNameStore } from '~/store/iconNameStore';

const iconNameStore = useIconNameStore();
</script>
<template>
  <div class="w-full max-w-5xl px-4 mx-auto wrapper">
    <Meta name="robots" content="noindex, nofollow" />
    <AwArticleDetail class="flex flex-col gap-4" :classes="'bg-rhino-800'">
      <div class="flex flex-col items-center sm:flex-row justify-between">
        <h1 class="transition-all font-bold text-xl mb-4 sm:mb-0 sm:text-3xl sm:mx-auto text-rhino-950">Hallo! Ich bin
          Der Alex</h1>
        <figure class="rounded-2xl max-w-64 sm:max-w-44 bg-rhino-950 shadow-extra overflow-hidden text-center">
          <img src="/img/alex.webp" alt="Alex hat VR für sich entdeckt" class="contrast-100 grayscale scale-x-[-1]" />
          <figcaption class="text-xs text-rhino-400 px-4 py-2">Alex hat VR für sich entdeckt</figcaption>
        </figure>
      </div>
      <div class="py-4 text-rhino-300 md:text-xl space-y-4 reset">
        <p>Hey! Schön, dass du dich auf meine Seite verirrt hast. Ich bin der Alex, Vollzeit-Doppel-Vater und mache
          irgendwas mit Webseiten.
          Dass es zumindest irgendwas mit Computern
          werden soll, war mit eigentlich schon mit 6 Jahren klar, als ich zum Geburtstag einen <strong>Amiga
            500</strong> geschenkt bekommen habe.
        </p>
        <p>Nach meine Ausbildung und vielen langen Jahren im Bereich der Webentwicklung habe ich irgendwann
          <strong>Matthäus</strong> kennengelernt.
          Als er sich entschied, eine Firma zu gründen, bin ich einfach mit ihm gegangen. Seitdem arbeiten wir
          gemeinsam bei der tollsten Firma der Welt!
        </p>
        <a href="https://www.bitsandlikes.de" alt="Bits & Likes" target="_blank" class="block py-8">
          <figure class="mx-auto max-w-64 sm:max-w-44 overflow-hidden text-center">
            <img
              src="https://camo.githubusercontent.com/60fa6375fc72c8469b7a6b16cd722a5d90f234b488a1436df6fec6c00f12ab14/687474703a2f2f6465722d616c65782e6769746875622e696f2f626c2e737667"
              alt="Bits & Likes GmbH" />
            <figcaption class="text-xs text-rhino-400 px-4 py-2">Bits & Likes GmbH</figcaption>
          </figure>
        </a>
        <h2 class="text-lg sm:text-xl text-rhino-400">
          <Icon :name="iconNameStore.getIconName('techstack')" alt="Tech Stack" />
          Tech Stack
        </h2>
        <p>
          Ich komme aus einer Zeit, in der es den Begriff <strong>Frontend-Developer</strong> noch gar nicht gab. Damals
          waren wir alle einfach <strong>Webdesigner</strong>.
          Zu der Zeit habe ich viel mit <strong>WordPress</strong> und eigenen in <strong>PHP</strong> geschriebenen
          Applikationen gemacht. Mittlerweile hat sich
          mein Tech Stack auf <strong>JavaScript</strong> basierte Frameworks spezialisiert:
        </p>
        <h3 class="text-lg sm:text-xl text-rhino-400">
          <Icon name="material-symbols:rocket-launch" alt="Rakete" />
          Backend
        </h3>
        <ul class="list-none">
          <li>
            <Icon :name="iconNameStore.getIconName('nodejs')" alt="NodeJs" />
            NodeJs
          </li>
          <li>
            <Icon :name="iconNameStore.getIconName('nestjs')" alt="NestJs" />
            NestJs
          </li>
          <li>
            <Icon :name="iconNameStore.getIconName('graphql')" alt="NodeJs" />
            GraphQL
          </li>
        </ul>
        <h3 class="text-lg sm:text-xl text-rhino-400">
          <Icon name="teenyicons:brush-outline" alt="Pinsel" />
          Frontend
        </h3>
        <ul class="list-none">
          <li>
            <Icon :name="iconNameStore.getIconName('vue')" alt="NodeJs" />
            Vue
          </li>
          <li>
            <Icon :name="iconNameStore.getIconName('nuxt')" alt="NodeJs" />
            Nuxt
          </li>
          <li>
            <Icon :name="iconNameStore.getIconName('react')" alt="NodeJs" />
            React
          </li>
          <li>
            <Icon :name="iconNameStore.getIconName('tailwind')" alt="NodeJs" />
            Tailwindcss
          </li>
        </ul>

        <h3 class="text-lg sm:text-xl text-rhino-400">
          <Icon name="carbon:development" alt="DevOos" />
          DevOps
        </h3>
        <ul class="list-none">
          <li>
            <Icon :name="iconNameStore.getIconName('docker')" alt="NodeJs" />
            Docker
          </li>
          <li>
            <Icon :name="iconNameStore.getIconName('kubernetes')" alt="NodeJs" />
            Kubernetes
          </li>
          <li>
            <Icon :name="iconNameStore.getIconName('linux')" alt="NodeJs" />
            Ubuntu
          </li>
        </ul>
      </div>

    </AwArticleDetail>
  </div>
</template>
