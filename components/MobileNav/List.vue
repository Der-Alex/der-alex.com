<script setup>
import { useBurgerStore } from '~/store/burgerStore';
const burgerStore = useBurgerStore();
const links = useMainNavLinks();
</script>

<template>
  <nav
    class="absolute w-14 top-28 z-[12] px-4 py-4 rounded-2xl bg-rhino-800 transition-all ease-in-out"
    :class="burgerStore.checked ? 'left-4' : '-left-20'">
    <ul class="flex flex-col gap-2">
      <li
        v-for="(link, index) in links"
        :key="link.url"
        class="relative h-14 text-rhino-950 font-bold transition-colors hover:text-amber-400">
        <MobileNavLink
          :delay="(25 * index).toString()"
          :url="link.url"
          :text="link.text"
          :icon-name="link.iconName" />
      </li>
    </ul>
  </nav>
</template>
