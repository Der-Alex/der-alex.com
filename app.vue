<script setup lang="ts">
import { useBurgerStore } from './store/burgerStore';
const burgerStore = useBurgerStore();
</script>
<template>
  <Html class="dark" />
  <Body
    class="bg-rhino-950"
    :class="{ 'mobile-menu-open': burgerStore.checked }" />

  <div class="is-wrapper max-w-5xl mx-auto">
    <MainNav class="hidden lg:block w-full max-w-5xl px-4 mx-auto" />
    <MobileNav />
    <NuxtLayout>
      <NuxtPage :class="{ 'blur-[2px]': burgerStore.checked }" />
    </NuxtLayout>
    <AwFooter class="w-full max-w-5xl px-4 mx-auto" />
  </div>
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
.is-wrapper {
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
}
#__nuxt {
  min-height: 100dvh;
}
@media screen and (max-width: 1023px) {
  .mobile-menu-open {
    height: 100dvh;
    overflow: hidden;
  }
}
</style>
