<script setup lang="ts">
import type { PropType } from 'vue';
import type { Article } from '~/interfaces/article';

const props = defineProps({
  articles: {
    type: Array as PropType<Article[]>,
    required: true,
  },
});
</script>
<template>
  <section class="grid gap-8 md:grid-cols-2">
    <AwArticle
      v-for="article of articles"
      :key="article.id"
      :article="article" />
  </section>
</template>
