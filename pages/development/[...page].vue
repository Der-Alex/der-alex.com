<script setup lang="ts">
import type { Article } from '~/interfaces/article';
const urlPart = 'development';
const category = 'Development';
const { query } = await useCategory(urlPart, category);
useHead({
  title: 'Der-Alex.com | Frontend-Entwicklung und Best Practices',
  meta: [
    {
      name: 'title',
      content: 'Der-Alex.com | Frontend-Entwicklung und Best Practices',
    },
    {
      name: 'description',
      content:
        'Neueste Frontend-Technologien und Best Practices für aktuelle Web Frontends. Bleibe immer auf dem aktuellsten Stand!',
    },
  ],
});
</script>
<template>
  <main class="w-full max-w-5xl px-4 mx-auto wrapper">
    <ContentList :query="query" v-slot="{ list }">
      <AwArticleList :articles="(list as Article[])" />
    </ContentList>
    <Pagination :url-part="urlPart" :category="category" />
  </main>
</template>
