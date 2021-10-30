<template>
  <div v-if="loaded">
    <multiplier :currentNumber="id" />
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
