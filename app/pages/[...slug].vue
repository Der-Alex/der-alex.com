<script setup lang="ts">
import type { Article } from "~/interfaces/article";

const route = useRoute();
const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    status: 404,
    statusText: "Seite nicht gefunden",
    // server-side errors always render the error page; fatal there would
    // only make Nitro log a stack trace for every 404
    fatal: import.meta.client
  });
}

useSeoMeta({
  title: `Der-Alex.com | ${page.value.title}`,
  description: page.value.description
});
</script>
<template>
  <main class="w-full max-w-5xl px-4 mx-auto wrapper">
    <AwArticle :article="page as unknown as Article" :is-detail="true">
      <AwArticleDetail>
        <ContentRenderer v-if="page" :value="page" />
      </AwArticleDetail>
    </AwArticle>
  </main>
</template>
