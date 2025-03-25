<script setup lang="ts">
import type { PropType } from 'vue';
import { useIconNameStore } from '~/store/iconNameStore';
import type { Article } from '~~/interfaces/article';
const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  },
  isDetail: {
    type: Boolean,
    default: false,
  },
});

const path = computed(
  () => props.article.meta.path ?? props.article.path ?? ''
);

const iconNameStore = useIconNameStore();
const articleColor = computed(() => {
  let colorString = 'from-rhino-800 to-rhino-600 shadow-extra';
  switch (props.article.category.toLowerCase()) {
    case 'webdesign':
      colorString =
        'from-red-700/60 over-orange-600/60 to-amber-500/60 shadow-extra';
      break;
    case 'development':
      colorString =
        'from-emerald-700/60 over-green-600/60 to-lime-500/60 shadow-extra';
      break;
    case 'devops':
      colorString =
        'from-blue-600/60 via-sky-500/50 to-cyan-500/60 shadow-extra';
      break;
    default:
      break;
  }
  return colorString;
});
const svgColor = computed(() => {
  let color = 'text-rhino-950/10';
  switch (props.article.category.toLowerCase()) {
    case 'webdesign':
      color = 'text-amber-950/10';
      break;
    case 'development':
      color = 'text-green-950/10';
      break;
    case 'devops':
      color = 'text-blue-950/10';
      break;
    default:
      break;
  }
  return color;
});
</script>
<template>
  <article class="flex flex-col">
    <div
      class="overflow-hidden rounded-2xl px-8 py-4 bg-gradient-to-br dark:text-rhino-50 relative flex flex-col h-full"
      :class="articleColor">
      <AwArticleHeader
        :url="path"
        :title="article.title"
        :tags="article.tags"
        :is-detail="isDetail" />
      <AwArticleContent :introduction="article.description" />
      <AwArticleFooter :created="article.created" />
      <Icon
        :name="iconNameStore.getIconName(props.article.tags[0])"
        class="absolute top-1/2 -right-0 -translate-y-1/2 text-[250px] -rotate-[25deg]"
        :class="svgColor" />
    </div>
    <slot />
  </article>
</template>
