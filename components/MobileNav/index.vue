<script setup>
import { useBurgerStore } from '~/store/burgerStore';
const burgerStore = useBurgerStore();
</script>

<template>
  <div class="block lg:hidden">
    <div class="max-w-5xl p-4 mx-auto">
      <header
        class="relative z-20 w-56 h-20 rounded-2xl flex items-center justify-between p-4 bg-rhino-800">
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
