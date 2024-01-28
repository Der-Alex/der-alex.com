<script setup lang="ts">
const props = defineProps({
  date: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <footer class="mt-4 flex items-center dark:text-rhino-50/70">
    <IconCalendar />
    <span class="ml-2 text-xs"
      >Erstellt am <strong>{{ date }}</strong></span
    >
  </footer>
</template>
