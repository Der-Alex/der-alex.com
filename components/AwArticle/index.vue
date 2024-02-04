<script setup lang="ts">
import type { PropType } from 'vue';
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
const articleColor = computed(() => {
  let colorString = 'from-rhino-800 to-rhino-600 shadow-sm shadow-rhino-600';
  switch (props.article.category.toLowerCase()) {
    case 'webdesign':
      colorString =
        'from-red-700/60 over-orange-600/60 to-amber-500/60 shadow-sm shadow-orange-600/60';
      break;
    case 'development':
      colorString =
        'from-emerald-700/60 over-green-600/60 to-lime-500/60 shadow-sm shadow-green-600/60';
      break;
    case 'devops':
      colorString =
        'from-blue-600/60 via-sky-500/50 to-cyan-500/60 shadow-sm shadow-cyan-600/60';
      break;
    default:
      break;
  }
  return colorString;
});
const iconName = computed(() => {
  let icon = '';
  if (props.article.tags[0]) {
    switch (props.article.tags[0].toLowerCase()) {
      case 'nuxt':
        icon = 'simple-icons:nuxtdotjs';
        break;
      case 'vue':
        icon = 'fa6-brands:vuejs';
        break;
      case 'js':
        icon = 'fa6-brands:js';
        break;
      case 'nestjs':
        icon = 'simple-icons:nestjs';
        break;
      case 'nodejs':
        icon = 'fa6-brands:node';
        break;
      case 'html':
        icon = 'fa6-brands:html5';
        break;
      case 'css':
        icon = 'fa6-brands:css3';
        break;
      case 'kubernetes':
      case 'docker':
      case 'devops':
        icon = 'mdi:kubernetes';
      default:
        break;
    }
  }
  return icon;
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
  <article>
    <div
      class="rounded-2xl px-8 py-4 bg-gradient-to-br dark:text-rhino-50 relative overflow-hidden"
      :class="articleColor">
      <AwArticleHeader
        :url="article._path"
        :title="article.title"
        :tags="article.tags"
        :is-detail="isDetail" />
      <AwArticleContent :introduction="article.description" />
      <AwArticleFooter :created="article.created" />
      <Icon
        :name="iconName"
        class="absolute top-1/2 -right-0 -translate-y-1/2 text-[250px] -rotate-[25deg]"
        :class="svgColor" />
    </div>
    <slot />
  </article>
</template>
