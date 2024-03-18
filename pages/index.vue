<script setup lang="ts">
import type { Article } from '~/interfaces/article';
</script>

<template>
  <main class="w-full max-w-5xl px-4 mx-auto wrapper">
    <ContentList path="/" v-slot="{ list }">
      <AwArticleList :articles="(list as Article[])" />
    </ContentList>
    <AwArticleDetail class="flex flex-col gap-4">
      <h1 class="font-bold text-lg md:text-2xl mb-8">
        Herzlich willkommen auf www.der-alex.com – Deiner ultimativen
        Informationsquelle zu Frontend-Entwicklung und Webdesign auf Deutsch!
      </h1>

      <h2 class="mb-8">
        Tauche ein in die Welt der modernen Webgestaltung mit meinem Blog. Hier
        teile ich meine Leidenschaft und langjährige Expertise für
        Frontend-Technologien, innovative Designs und bewährte
        Entwicklungspraktiken. Egal, ob du ein erfahrener Entwickler oder ein
        Neuling in der Webwelt bist, hier findest du wertvolle Ressourcen, Tipps
        und Inspiration.
      </h2>

      <p class="text-lg font-bold">Was findest du auf meinem Blog?</p>
      <ul>
        <li class="mt-4 mb-6">
          <div class="icons flex gap-2">
            <Tag>
              <Icon name="fa6-brands:vuejs" alt="Vue" />
            </Tag>
            <Tag>
              <Icon name="simple-icons:nuxtdotjs" alt="Nuxt" />
            </Tag>
            <Tag>
              <Icon name="mdi:react" alt="React" />
            </Tag>
            <Tag>
              <Icon name="fa6-brands:html5" alt="html5" />
            </Tag>
            <Tag>
              <Icon name="fa6-brands:css3-alt" alt="css" />
            </Tag>
            <Tag>
              <Icon name="fa6-brands:js" alt="JavaScript" />
            </Tag>
          </div>
          <h2 class="font-bold text-lg mb-4">Frontend-Entwicklung:</h2>
          <p class="text-balance">
            Bleibe auf dem aktuellen Stand! Ich zeige dir die neuesten
            Frameworks, Bibliotheken und Techniken, die deine Webanwendungen auf
            das nächste Level bringen.
          </p>
        </li>
        <li class="mt-4 mb-6">
          <div class="icons flex gap-2">
            <Tag>
              <Icon name="material-symbols:palette-outline" alt="Webdesign" />
            </Tag>
            <Tag>
              <Icon name="mdi:palette-swatch-outline" alt="Farbpalette" />
            </Tag>
            <Tag>
              <Icon name="teenyicons:brush-outline" alt="Pinsel" />
            </Tag>
          </div>
          <h2 class="font-bold text-lg mb-4">Webdesign-Trends:</h2>
          <p>
            Entdecke die aktuellen Trends im Webdesign und erhalte Einblicke,
            wie du diese kreativ in deine Projekte integrieren kannst.
          </p>
        </li>
        <li class="mt-4 mb-6">
          <div class="icons flex gap-2">
            <Tag>
              <Icon name="streamline:global-learning" alt="Online Tutorials" />
            </Tag>
            <Tag>
              <Icon name="material-symbols:rocket-launch" alt="Rakete" />
            </Tag>
            <Tag>
              <Icon name="mdi:lightbulb-on" alt="Glühbirne" />
            </Tag>
          </div>
          <h2 class="font-bold text-lg mb-4">Praktische Tutorials:</h2>
          <p>
            Schritt-für-Schritt-Anleitungen und praktische Tutorials helfen dir,
            komplexe Konzepte zu meistern und innovative Lösungen zu entwickeln.
          </p>
        </li>
        <li class="mt-4 mb-6">
          <div class="icons flex gap-2">
            <Tag>
              <Icon name="ic:baseline-smartphone" alt="Mobile Friendly" />
            </Tag>
            <Tag>
              <Icon name="mdi:tablet" alt="Tablet Friendly" />
            </Tag>
            <Tag>
              <Icon
                name="material-symbols:computer-outline"
                alt="Responsive Webdesign" />
            </Tag>
          </div>
          <h2 class="font-bold text-lg mb-4">Responsive Design:</h2>
          <p>
            Ich zeige dir, wie du beeindruckende und benutzerfreundliche Designs
            erstellst, die auf jedem Gerät optimal funktionieren.
          </p>
        </li>
        <li class="mt-4 mb-6">
          <div class="icons flex gap-2">
            <Tag>
              <Icon name="mdi:kubernetes" alt="Kubernetes" />
            </Tag>
            <Tag>
              <Icon name="mdi:docker" alt="Docker" />
            </Tag>
            <Tag>
              <Icon name="mdi:github" alt="Github Actions" />
            </Tag>
            <Tag>
              <Icon name="ph:linux-logo" alt="Linux" />
            </Tag>
          </div>
          <h2 class="font-bold text-lg mb-4">DevOps:</h2>
          <p>
            Erfahre, wie du durch effizientes DevOps-Management die Entwicklung
            beschleunigen und die Bereitstellung optimieren kannst.
          </p>
        </li>
      </ul>
      <h2 class="font-bold text-lg">Warum du bei mir richtig bist:</h2>
      <p>
        Ich bin erfahrener Webentwickler mit langjähriger Expertise in den
        Bereichen Frontend-Entwicklung, Webdesign und DevOps. Auf
        www.der-alex.com teile ich gerne meine Erfahrung und Fachkenntnisse mit
        der Webentwickler-Community. Also bleib neugierig, bleib kreativ, bleib
        am Puls der Webentwicklung!
      </p>
    </AwArticleDetail>
  </main>
</template>
