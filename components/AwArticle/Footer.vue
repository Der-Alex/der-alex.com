<script setup lang="ts">
const props = defineProps({
  created: {
    type: String,
    required: true,
  },
});
const date = computed(() => {
  return props.created.split('T')[0];
});
</script>
<template>
  <footer
    class="mt-auto pt-4 border-t-2 border-rhino-50/20 flex items-center dark:text-rhino-50/70">
    <Icon name="fa6-solid:calendar-days" />
    <span class="ml-2 text-xs"
      >Erstellt: <strong>{{ date }}</strong></span
    >
  </footer>
</template>
