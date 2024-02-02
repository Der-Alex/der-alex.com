<script setup lang="ts">
import { useBurgerStore } from '~/store/burgerStore';

const burgerStore = useBurgerStore();
</script>
<template>
  <label
    for="toggle-nav"
    class="burger flex flex-col gap-1.5 cursor-pointer group">
    <input
      type="checkbox"
      id="toggle-nav"
      class="peer hidden"
      @click="burgerStore.toggle" />
    <span
      class="origin-top-left transition-all peer-checked:rotate-[30deg] patty w-10 h-1 rounded-md bg-rhino-950 group-hover:bg-amber-400"></span>
    <span
      class="origin-top-left transition-all peer-checked:opacity-0 patty w-10 h-1 rounded-md bg-rhino-950 group-hover:bg-amber-400"></span>
    <span
      class="origin-top-left transition-all peer-checked:-rotate-[30deg] patty w-10 h-1 rounded-md bg-rhino-950 group-hover:bg-amber-400"></span>
  </label>
</template>
