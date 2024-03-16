<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
import type { Article } from '~/interfaces/article';

const pageName = 'development';
const skip = reactive({ value: 1 });
const route = useRoute();
const router = useRouter();
if (Array.isArray(route.params.page) && route.params.page.length > 0) {
  console.log('page array pos 0 is', route.params.page[0]);
  skip.value = parseInt(route.params.page[0] as string);
} else if (
  typeof route.params.page === 'string' &&
  route.params.page.length > 0
) {
  console.log('page string is', route.params.page);
  skip.value = parseInt(route.params.page);
}
console.log('skip value is', skip.value);

const query: QueryBuilderParams = reactive({
  path: '/',
  where: [{ category: 'Development' }],
  skip: 6 * skip.value,
  limit: 6,
  sort: [{ created: -1 }],
});

console.log(query);

const clickPrevHandler = () => {
  skip.value--;
  if (skip.value <= 1) {
    router.push({ path: `/${pageName}/` });
    return false;
  }
  router.push({ path: `/${pageName}/${skip.value}` });
};
const clickNextHandler = () => {
  skip.value++;
  router.push({ path: `/${pageName}/${skip.value}` });
};
</script>
<template>
  <main class="max-w-5xl px-4 mx-auto wrapper">
    <ContentList :query="query" v-slot="{ list }">
      <AwArticleList :articles="(list as Article[])" />
    </ContentList>
    <AwButton @click="clickPrevHandler">Prev</AwButton>
    <AwButton @click="clickNextHandler">Next</AwButton>
  </main>
</template>
