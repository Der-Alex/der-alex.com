<script setup lang="ts">
import type { Article } from '~/interfaces/article';
const urlPart = 'webdesign';
const category = 'Webdesign';
const { query } = await useCategory(urlPart, category);
useHead({
  title:
    'Der-Alex.com | Modernes responsive Webdesign und Tipps für Mobile First Optimierungen!',
  meta: [
    {
      name: 'title',
      content:
        'Der-Alex.com | Modernes responsive Webdesign und Tipps für Mobile First Optimierungen!',
    },
    {
      name: 'description',
      content:
        'Neue Webdesign-Trends, neue CSS Tricks! Hier erfährst du, wie man schöne Frontends baut und dabei den Überblick behält!',
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
