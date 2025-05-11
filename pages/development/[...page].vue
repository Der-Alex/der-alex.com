<script setup lang="ts">
import type { Article } from '~/interfaces/article';
const urlPart = 'development';
const category = 'Development';
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
    <AwArticleList :articles="(list as unknown as Article[])" />
    <Pagination :url-part="urlPart" :category="category" />
  </main>
</template>
