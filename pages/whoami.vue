<script setup lang="ts">
import { useIconNameStore } from '~/store/iconNameStore';

const iconNameStore = useIconNameStore();
</script>
<template>
  <div class="w-full max-w-5xl px-4 mx-auto wrapper">
    <Meta name="robots" content="noindex, nofollow" />
    <Title>Who am I?</Title>
    <AwArticleDetail class="flex flex-col gap-4 mt-0" :classes="'bg-rhino-800'">
      <div class="flex flex-col items-center sm:flex-row justify-between">
        <h1 class="transition-all font-bold text-xl mb-4 sm:mb-0 sm:text-3xl sm:mx-auto text-rhino-950">Hallo! Ich bin
          Der Alex</h1>
        <figure class="rounded-2xl max-w-64 sm:max-w-44 bg-rhino-950 shadow-extra overflow-hidden text-center">
          <img src="/img/alex.webp" alt="Alex hat VR für sich entdeckt" class="contrast-100 grayscale scale-x-[-1]" />
          <figcaption class="text-xs text-rhino-400 px-4 py-2">Alex hat VR für sich entdeckt</figcaption>
        </figure>
      </div>
      <div class="transition-all py-4 text-rhino-300 sm:text-xl space-y-4 reset">
        <p>Hey! Schön, dass du dich auf meine Seite verirrt hast. Ich bin der Alex, Vollzeit-Doppel-Vater und mache
          irgendwas mit Webseiten.
          Dass es zumindest irgendwas mit Computern
          werden soll, war mit eigentlich schon mit 6 Jahren klar, als ich zum Geburtstag einen <strong
            class="reset">Amiga
            500</strong> geschenkt bekommen habe.
        </p>
        <p>Nach meiner Ausbildung und vielen langen Jahren im Bereich der Webentwicklung habe ich irgendwann
          <strong class="reset">Matthäus</strong> kennengelernt.
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
        <h2 class="text-xl sm:text-2xl text-rhino-400">
          <Icon :name="iconNameStore.getIconName('techstack')" alt="Tech Stack" />
          Tech Stack
        </h2>
        <p>
          Ich komme aus einer Zeit, in der es den Begriff <strong class="reset">Frontend-Developer</strong> noch gar
          nicht gab. Damals
          waren wir alle einfach <strong class="reset">Webdesigner</strong>.
          Zu der Zeit habe ich viel mit <strong class="reset">WordPress</strong> und eigenen in <strong
            class="reset">PHP</strong> geschriebenen
          Applikationen gemacht. Mittlerweile hat sich
          mein Tech Stack auf <strong class="reset">JavaScript</strong> basierte Frameworks spezialisiert:
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
        <h2 class="text-xl sm:text-2xl text-rhino-400 pt-8">
          <Icon name="mdi:bookmark-multiple" alt="Projekte" />
          Projekte
        </h2>
        <a href="https://www.ruhrpott-ipsum.de" alt="Ruhrpott Ipsum - Blindtextgenerator aus dem Pott" target="_blank"
          class="block bg-[#ffd800] p-4 rounded-2xl max-w-64">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.37 16.93">
            <path
              d="M9.26 8.27q.16.03.29.16.12.12.3.48l1.02 2.03H9.64l-.68-1.43-.08-.16q-.3-.64-.7-.64h-.36v2.23H6.7V5.28h1.62q1.09 0 1.56.4.48.38.48 1.25 0 .58-.28.93-.29.34-.82.41zM7.82 6.22v1.55h.53q.46 0 .65-.18.2-.18.2-.6 0-.4-.2-.59-.19-.18-.65-.18zm3.65 3.24V6.7h1.11v2.59q0 .46.13.66t.43.2q.3 0 .47-.27.17-.27.17-.75V6.7h1.1v4.24h-1.1v-.63q-.12.36-.4.55-.28.2-.68.2-.6 0-.92-.4-.3-.41-.3-1.2zm8.13-1.27v2.75h-1.1V8.36q0-.46-.14-.66-.13-.2-.42-.2-.3 0-.48.27-.17.27-.17.74v2.43h-1.1v-5.9h1.1v2.3q.12-.36.4-.55.29-.2.69-.2.6 0 .9.4.32.4.32 1.2zm4.97-.32q-.18-.17-.43-.25-.24-.08-.54-.08-.35 0-.61.12t-.4.36q-.1.14-.14.35-.03.2-.03.62v1.95H21.3V6.7h1.1v.66q.17-.37.5-.56.35-.2.8-.2.22 0 .44.05.22.06.42.16zm1.98 2.47v2.22h-1.1V6.7h1.1v.63q.17-.36.46-.55.28-.18.66-.18.73 0 1.13.58.4.58.4 1.64 0 1.08-.4 1.66-.4.57-1.16.57-.34 0-.62-.17-.27-.18-.47-.54zm1.55-1.52q0-.62-.2-.97-.21-.34-.57-.34t-.57.34q-.21.35-.21.97 0 .61.2.96.22.35.58.35t.56-.35q.2-.35.2-.96zm3.78-1.32q-.4 0-.63.35-.23.35-.23.97 0 .63.23.98t.63.35q.4 0 .63-.35.22-.35.22-.98 0-.62-.22-.97-.23-.35-.63-.35zM29.9 8.82q0-1.02.53-1.62.54-.6 1.44-.6.9 0 1.43.6.53.6.53 1.62 0 1.03-.53 1.63-.53.6-1.43.6-.9 0-1.44-.6-.53-.6-.53-1.63zm18.97-2.55v-.99h3.37v.99H51.1v3.69h1.13v.98h-3.37v-.98H50V6.27zm5.69 4.07v2.22h-1.1V6.7h1.1v.63q.18-.36.46-.55.28-.18.67-.18.72 0 1.13.58.4.58.4 1.64 0 1.08-.41 1.66-.4.57-1.16.57-.34 0-.61-.17-.27-.18-.48-.54zm1.55-1.52q0-.62-.2-.97-.21-.34-.57-.34t-.57.34q-.2.35-.2.97 0 .61.2.96t.57.35q.36 0 .56-.35.2-.35.2-.96zm5.2-1.99v.97q-.3-.2-.64-.3-.33-.1-.66-.1-.37 0-.56.11-.2.1-.2.32 0 .3.82.5h.04l.32.08q.6.15.88.47.29.32.29.86 0 .66-.43.99-.43.32-1.3.32-.38 0-.78-.07-.4-.06-.81-.2v-.96q.36.2.74.32.38.1.74.1.4 0 .6-.1.2-.12.2-.34 0-.21-.15-.32-.14-.12-.68-.25l-.3-.06q-.64-.15-.93-.46-.3-.3-.3-.82 0-.61.45-.95.44-.34 1.25-.34.36 0 .71.06.36.05.7.17zm1.52 2.63V6.7h1.11v2.59q0 .46.13.66t.43.2q.3 0 .46-.27.17-.27.17-.75V6.7h1.12v4.24h-1.12v-.63q-.11.36-.4.55-.28.2-.68.2-.6 0-.91-.4-.3-.41-.3-1.2zm6.67-2.34q.13-.27.33-.4.19-.12.47-.12.55 0 .76.37.21.38.21 1.58v2.4h-.9V8.21q0-.48-.08-.64-.07-.15-.26-.15-.2 0-.27.16t-.07.63v2.72h-.9V8.22q0-.47-.08-.63-.07-.16-.26-.16-.2 0-.26.15-.08.16-.08.64v2.72h-.9V6.7h.8v.44q.1-.25.3-.4.21-.14.47-.14t.47.15q.21.15.26.37zm-34.76-5.3v.85l.85.85h1.7v2.55l-1.7 9.35h1.19l1.36-8.5h5.1l1.36 8.5h1.2l-1.71-9.35V3.52h1.7l.85-.85v-.85zm.5.4h10.9v.34l-.52.51h-9.86l-.51-.5zm2.9 1.3h5.1v2.55h-5.1z" />
            <g fill="none" stroke="#000" stroke-width=".319">
              <path
                d="M40.37 5.84a1.83 1.85 0 0 1-1.83 1.85 1.83 1.85 0 0 1-1.84-1.85A1.83 1.85 0 0 1 38.54 4a1.83 1.85 0 0 1 1.83 1.85zM38.54 4v3.68m1.84-1.84h-3.69" />
              <path d="m39.84 7.14-2.52-2.52-.09-.08" />
              <path d="m39.84 4.54-2.52 2.52-.09.08" />
            </g>
            <g fill="none" stroke="#000" stroke-width=".319">
              <path
                d="M44.68 5.84a1.83 1.85 0 0 1-1.84 1.85 1.83 1.85 0 0 1-1.83-1.85A1.83 1.85 0 0 1 42.84 4a1.83 1.85 0 0 1 1.84 1.85zM42.84 4v3.68m1.85-1.84H41" />
              <path d="m44.15 7.14-2.53-2.52-.08-.08" />
              <path d="m44.15 4.54-2.53 2.52-.08.08" />
            </g>
            <path d="M36.01 10.49h9.36V9.7H36zm1.28-7.31v-1.2h.85v1.2zm5.95 0v-1.2h.85v1.2z" />
            <path fill="none" stroke="#000" stroke-width=".167" d="M34.74 1.94v-.17h11.9v.17z" />
          </svg>

        </a>
        <p>
          Meine anderen Projekte findest du auf meinem <a href="https://github.com/der-alex/" target="_blank"
            alt="GitHub">
            <Icon name="mdi:github" alt="GitHub" /> GitHub Profil
          </a>.
        </p>
      </div>

    </AwArticleDetail>
  </div>
</template>
