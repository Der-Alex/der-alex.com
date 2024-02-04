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
  <AwArticle v-for="article of articles" :key="article.id" :article="article" />
</template>
