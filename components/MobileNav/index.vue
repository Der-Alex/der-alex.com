<script setup>
import { useBurgerStore } from '~/store/burgerStore';
const burgerStore = useBurgerStore();
</script>

<template>
  <div class="block lg:hidden">
    <div class="max-w-5xl p-4 pt-0 mx-auto">
      <header
        class="relative z-20 w-60 px-8 pt-4 pb-2 h-16 rounded-b-2xl flex items-center justify-between bg-rhino-800 shadow-extra">
        <Logo />
        <Burger />
      </header>
      <MobileNavList />
    </div>
    <div
      class="fixed top-0 left-0 w-full h-full bg-rhino-950/90 z-10"
      v-if="burgerStore.checked"></div>
  </div>
</template>
