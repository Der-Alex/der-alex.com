<script setup lang="ts">
const articles = useArticles();
</script>
<template>
  <AwArticle v-for="article of articles" :key="article.id" :article="article" />
</template>
