<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: Array as PropType<string[]>,
    required: true,
  },
});
</script>
<template>
  <header class="dark:text-rhino-100 border-b-2 border-rhino-50/20 mb-6">
    <span class="flex items-center gap-2">
      <Tag v-for="tag in tags" :key="tag">{{ tag }}</Tag>
    </span>
    <NuxtLink
      :to="url"
      class="article-link transition-all duration-150 hover:text-amber-400">
      <h2 class="my-4 text-3xl text-balance">
        {{ title }}
      </h2>
    </NuxtLink>
  </header>
</template>
