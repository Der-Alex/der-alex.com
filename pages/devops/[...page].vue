<script setup lang="ts">
import type { Article } from '~/interfaces/article';
const urlPart = 'devops';
const category = 'DevOps';
const { query } = await useCategory(urlPart, category);
useHead({
  title: 'Der-Alex.com | DevOps, Kubernetes und Linux Wisssen',
  meta: [
    {
      name: 'title',
      content: 'Der-Alex.com | DevOps, Kubernetes und Linux Wisssen',
    },
    {
      name: 'description',
      content:
        'Erfahre mehr über DevOps, Kubernetes und Linux. Ich zeige dir CI/CD, Build-Prozesse, Server-Management und mehr!',
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
