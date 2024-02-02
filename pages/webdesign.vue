<script setup>
const articles = useArticles();
</script>

<template>
  <div class="wrapper">
    <AwArticle :article="articles[1]" />
    <AwArticleDetail />
  </div>
</template>
