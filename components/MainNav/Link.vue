<script setup>
const props = defineProps({
  url: String,
  text: String,
  iconName: String,
});
</script>

<template>
  <NuxtLink
    :to="url"
    class="rounded-xl border-b-2 flex items-center justify-center bg-rhino-950 border-rhino-950 py-2 px-4 font-bold dark:text-rhino-400 transition-all duration-300 dark:hover:text-amber-400">
    <Icon :name="iconName" class="text-amber-400" />
    <span class="ml-2">{{ text }}</span>
  </NuxtLink>
</template>
