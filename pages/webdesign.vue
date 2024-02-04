<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
import type { Article } from '~/interfaces/article';

const skip = reactive({ value: 0 });

const query: QueryBuilderParams = reactive({
  path: '/',
  where: [{ category: 'Webdesign' }],
  skip: 5 * skip.value,
  limit: 5,
  sort: [{ created: -1 }],
});

const clickNextHandler = () => {
  skip.value++;
  query.skip = 5 * skip.value;
};
</script>
<template>
  <main class="max-w-5xl px-4 mx-auto wrapper">
    <ContentList :query="query" v-slot="{ list }">
      <AwArticleList :articles="(list as Article[])" />
    </ContentList>
    <button @click="clickNextHandler">Next</button>
  </main>
</template>
