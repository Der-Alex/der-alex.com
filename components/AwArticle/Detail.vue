<script setup>
const props = defineProps({
  classes: {
    type: String,
    default: 'bg-rhino-900 mt-8'
  }
})
</script>
<template>
  <section
    class="article-content rounded-2xl shadow-extra p-8 dark:text-rhino-100 font-extra2" :class="classes">
    <slot />
  </section>
</template>
<style>
pre {
  @apply rounded-2xl my-4 bg-rhino-950 p-4 overflow-x-scroll;
}
</style>
