<script setup lang="ts">
import type { Article } from '~/interfaces/article';
const urlPart = 'devops';
const category = 'DevOps';
const { query } = await useCategory(urlPart, category);

const { data: list } = await useAsyncData(() =>
  queryCollection('content')
    .where(query.where.field, query.where.operator, query.where.value)
    .limit(query.limit)
    .skip(query.skip)
    .order('created', 'DESC')
    .all()
);

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
    <AwArticleList :articles="(list as unknown as Article[])" />
    <Pagination :url-part="urlPart" :category="category" />
  </main>
</template>
