<script setup lang="ts">
import type { Article } from '~/interfaces/article';
const urlPart = 'development';
const category = 'Development';
const { query } = await useCategory(urlPart, category);
</script>
<template>
  <main class="max-w-5xl px-4 mx-auto wrapper">
    <ContentList :query="query" v-slot="{ list }">
      <AwArticleList :articles="(list as Article[])" />
    </ContentList>
    <Pagination :url-part="urlPart" :category="category" />
  </main>
</template>
