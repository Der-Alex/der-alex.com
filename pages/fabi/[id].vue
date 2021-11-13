<template>
  <div v-if="loaded">
    <multiplier :currentNumber="id" />
    <nuxt-link :to="'rechenspiel/' + id">Rechenspiel der {{ id }}</nuxt-link>
  </div>
</template>
<script>
import Multiplier from '~/components/Multiplier.vue';

export default {
  layout: 'app',
  components: {
    Multiplier,
  },
  data() {
    return { id: 0, loaded: false };
  },
  validate({ params }) {
    console.log('validating');
    return /^\d+$/.test(params.id);
  },
  mounted() {
    this.id = parseInt(this.$route.params.id) || 1;
    this.loaded = true;
  },
};
</script>
<style lang="scss" scoped>
a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0.5rem;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
