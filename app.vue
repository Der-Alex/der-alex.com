<script setup lang="ts">
import { useBurgerStore } from './store/burgerStore';
const burgerStore = useBurgerStore();
</script>
<template>
  <Html class="dark" />
  <Body class="bg-rhino-950 max-w-5xl mx-auto" />
  <MainNav class="hidden lg:block max-w-5xl px-4 mx-auto" />
  <MobileNav />
  <NuxtLayout>
    <NuxtPage :class="{ 'blur-[2px]': burgerStore.checked }" />
  </NuxtLayout>
  <AwFooter class="max-w-5xl px-4 mx-auto" />
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.125s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
