<script setup lang="ts">
import type { Article } from '~/interfaces/article';
const urlPart = 'archiv';
const category = '';
const { query } = await useCategory(urlPart, category);

const { data: list } = await useAsyncData(() =>
  queryCollection('content')
    .limit(query.limit)
    .skip(query.skip)
    .order('created', 'DESC')
    .all()
);

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
    <AwArticleList :articles="(list as unknown as Article[])" />
    <Pagination :url-part="urlPart" :category="category" />
  </main>
</template>
