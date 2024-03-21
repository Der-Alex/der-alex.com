<script setup lang="ts">
import type { Article } from '~/interfaces/article';
const urlPart = 'archiv';
const category = '';
const { query } = await useCategory(urlPart, category);
useHead({
  title: 'Der-Alex.com | Developer Archiv',
  meta: [
    {
      name: 'title',
      content: 'Der-Alex.com | Developer Archiv',
    },
    {
      name: 'description',
      content:
        'Hier findest du mein Archiv über alle Themen zu Webdesign, Frontend-Development, DevOps und darüber hinaus!',
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
