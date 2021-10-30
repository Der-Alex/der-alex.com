<template>
  <div>
    <multiplier :currentNumber="1" />
  </div>
</template>

<script setup>
import Multiplier from '~/components/Multiplier.vue';
</script>
<script>
export default {
  layout: 'app',
};
</script>
