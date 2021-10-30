<template>
  <div class="main">
    <h1>Rechenspiel</h1>
    <h2>Dein Highscore:</h2>
    <p>{{ score.state.calculated }} Aufgaben</p>
    <p>{{ score.state.correct }} Richtig</p>
    <p>{{ score.state.wrong }} falsch</p>
    <div>
      <component v-for="component in components" :is="component.component" :key="component.key" @keyup.enter="addComponentHandler" />
    </div>
  </div>
</template>
<script setup>
import { shallowReactive } from 'vue';
import score from '~/new-store/score';
import TheGame from '~/components/TheGame.vue';

const components = shallowReactive([{ key: Date.now(), component: TheGame }]);
const addComponentHandler = () => {
  components.push({ key: Date.now(), component: TheGame });
  if (components.length > 10) {
    components.shift();
  }
  if (process.client) {
    const el = document.querySelector('main');
    el.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }
};
</script>
<script>
export default {
  layout: 'app',
};
</script>
