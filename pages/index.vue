<template>
  <div class="ml-4">
    <h2 class="my-4 size-3">Charaktereigenschaften</h2>
    <character-setting :icon="['fas', 'baby']" title="Geburt 1984" :hasStart="true" />
    <character-setting :icon="['fas', 'gamepad']" :title="'Level ' + getAgeYear" />
    <character-setting :icon="['fas', 'venus-mars']" title="Männlich / Er / Ihm" />
    <character-setting :icon="['fas', 'globe-europe']" title="Dortmund" />
    <character-setting :icon="['fas', 'tools']" title="Arbeitgeber">
      <p><strong>Bis heute</strong> Web Developer bei <a href="https://bitsandlikes.de" target="_blank" class="color-primary">bits &amp; likes GmbH</a></p>
      <p><strong>2016 - 2017</strong> Senior Software Developer bei KPS digital GmbH</p>
      <p><strong>2014 - 2016</strong> Senior Developer bei getit GmbH</p>
      <p><strong>2007 - 2014</strong> IT Applications Designer bei arvato direct services, Bertelsmann</p>
    </character-setting>
    <character-setting :icon="['fab', 'github-alt']" title="Aktuelle Projekte">
      <p><a href="https://ruhrpott-ipsum.de" target="_blank" class="color-primary">Ruhrpott Ipsum - Blindtextgenerator ausm Pott</a></p>
    </character-setting>
    <character-setting :icon="['fas', 'heart']" title="Hobbies">
      <p>Meine Familie ❤️</p>
      <p>Gaming</p>
      <p>Schach</p>
      <p>Sport</p>
      <p>Laufen</p>
    </character-setting>
    <character-setting :icon="['fab', 'steam']" title="Aktuelle Lieblings Games">
      <p>Hunt: Showdown</p>
      <p>Stardew Valley</p>
      <p>Horizon: Zero Dawn</p>
    </character-setting>

    <character-setting :icon="['fas', 'question']" title="Hier kommt bald noch mehr" />

    <!--
    <div class="circle">
      <font-awesome-icon :icon="['fab', 'xing']" size="2x" />
    </div>

    <div class="circle">
      <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
    </div>

    <div class="circle">
      <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
    </div> -->
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBaby, faGamepad, faVenusMars, faGlobeEurope, faHeart, faIndustry, faTools, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGithubAlt, faSteam, faXing, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import CharakterSetting from '~/components/CharacterSetting.vue';

library.add(
  faBaby,
  faGamepad,
  faVenusMars,
  faGlobeEurope,
  faHeart,
  faGithub,
  faGithubAlt,
  faSteam,
  faXing,
  faInstagram,
  faTwitter,
  faIndustry,
  faTools,
  faQuestion
);

const getAgeYear = computed(() => {
  return new Date().getFullYear() - 1984;
});
</script>
<script>
export default {
  head: {
    title: 'Frontend Entwickler aus Dortmund • Der-Alex.com • Der Alex, Erfinder von Ruhrpott Ipsum',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Frontend Entwickler und Webentwickler aus Dortmund, Deutschland • Der Alex ist ein Frontend Entwickler mit langjähriger Berufserfahrung in HTML, CSS, JavaScript, TypeScript, VueJs, Nuxt und anderen Tools. Ebenso hat Der Alex Erfahrung in Continuous Deployment, Continuous Integration und DevOps.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
};
</script>
