<script setup lang="ts">
import type { PropType } from 'vue';
import type { Article } from '~~/interfaces/article';
const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  },
});
const articleColor = computed(() => {
  let colorString = 'from-rhino-800 to-rhino-600 shadow-sm shadow-rhino-600';
  switch (props.article.category) {
    case 'Webdesign':
      colorString =
        'from-red-700/60 over-orange-600/60 to-amber-500/60 shadow-sm shadow-orange-600/60';
      break;
    case 'Development':
      colorString =
        'from-emerald-700/60 over-green-600/60 to-lime-500/60 shadow-sm shadow-green-600/60';
      break;
    case 'DevOps':
      colorString =
        'from-blue-600/60 via-sky-500/50 to-cyan-500/60 shadow-sm shadow-cyan-600/60';
      break;
    default:
      break;
  }
  return colorString;
});
</script>
<template>
  <article
    class="rounded-2xl px-8 py-4 bg-gradient-to-br dark:text-rhino-50"
    :class="articleColor">
    <AwArticleHeader
      :url="article.url"
      :title="article.title"
      :tags="article.tags" />
    <AwArticleContent :introduction="article.introduction" />
    <AwArticleFooter :date="article.date" />
  </article>
</template>
