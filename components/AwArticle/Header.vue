<script setup lang="ts">
import type { PropType } from 'vue';
import { useIconNameStore } from '~/store/iconNameStore';

const iconNameStore = useIconNameStore();

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: Array as PropType<string[]>,
    required: true,
  },
  isDetail: {
    type: Boolean,
  },
});
</script>
<template>
  <header
    class="dark:text-rhino-100 border-b-2 border-rhino-50/20 mb-6 relative z-10">
    <span class="flex items-center gap-2">
      <Tag v-for="tag in tags" :key="tag"
        ><Icon :name="iconNameStore.getIconName(tag)" />{{ tag }}</Tag
      >
    </span>
    <h2 v-if="isDetail" class="my-4 text-3xl text-balance">
      {{ title }}
    </h2>
    <NuxtLink
      :to="url"
      v-else
      class="article-link transition-all duration-150 hover:text-amber-400 cursor-pointer">
      <h2 class="my-4 text-3xl text-balance">
        {{ title }}
      </h2>
    </NuxtLink>
  </header>
</template>
