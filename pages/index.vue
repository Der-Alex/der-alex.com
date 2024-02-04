<script setup lang="ts">
import type { Article } from '~/interfaces/article';
</script>

<template>
  <main class="max-w-5xl px-4 mx-auto wrapper">
    <ContentList path="/" v-slot="{ list }">
      <AwArticleList :articles="(list as Article[])" />
    </ContentList>
  </main>
</template>
