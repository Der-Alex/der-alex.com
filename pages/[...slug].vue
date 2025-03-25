<script setup lang="ts">
import type { Article } from '~/interfaces/article';

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('pages').path(route.path).first();
});
</script>
<template>
  <main class="w-full max-w-5xl px-4 mx-auto wrapper">
    <AwArticle :article="(page as unknown as Article)" :is-detail="true">
      <AwArticleDetail>
        <ContentRenderer v-if="page" :value="page" />
      </AwArticleDetail>
    </AwArticle>
  </main>
</template>
