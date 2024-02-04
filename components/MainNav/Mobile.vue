<script setup>
import { useBurgerStore } from '~/store/burgerStore';

const links = useMainNavLinks();
const burgerStore = useBurgerStore();
</script>
<template>
  <div
    class="w-full mdplus:hidden transition-all"
    :class="burgerStore.checked ? 'h-[22rem]' : 'h-0'">
    <Burger class="absolute transition-all duration-300 top-8 right-4 z-20" />
    <MainNavList
      class="transition-all duration-150 absolute z-10 left-0"
      :class="
        burgerStore.checked ? 'top-20 opacity-100' : 'top-[-20rem] opacity-0'
      " />
  </div>
</template>
