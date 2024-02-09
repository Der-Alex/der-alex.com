<script setup lang="ts">
import { useBurgerStore } from '~/store/burgerStore';
const burgerStore = useBurgerStore();
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: true,
  },
  delay: {
    type: String,
    required: true,
    default: '0',
  },
});
</script>

<template>
  <NuxtLink
    :to="url"
    class="absolute h-14 group rounded-2xl flex items-center justify-center bg-rhino-800 pl-0">
    <Icon
      :name="iconName"
      alt="Webdesign"
      class="transition-all duration-150 text-2xl" />
    <span
      class="transition-[width] ease-out ml-6 overflow-hidden group-hover:w-36"
      :class="[
        { 'w-32': burgerStore.checked, 'w-0': !burgerStore.checked },
        `delay-[${delay}ms]`,
      ]"
      >{{ text }}</span
    >
  </NuxtLink>
</template>
