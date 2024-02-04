<script setup lang="ts">
import type { Article } from '~/interfaces/article';
</script>
<template>
  <main class="max-w-5xl px-4 mx-auto wrapper">
    <ContentDoc v-slot="{ doc }">
      <AwArticle :article="(doc as Article)" :is-detail="true">
        <AwArticleDetail>
          <ContentRenderer :value="doc" />
        </AwArticleDetail>
      </AwArticle>
    </ContentDoc>
  </main>
</template>
