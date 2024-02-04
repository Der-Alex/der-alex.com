<script setup>
import { useBurgerStore } from '~/store/burgerStore';

const links = useMainNavLinks();
const burgerStore = useBurgerStore();
</script>
<template>
  <div class="p-4 relative z-20 block lg:hidden">
    <header
      class="w-56 h-20 rounded-2xl flex items-center justify-between p-4 bg-rhino-800">
      <Logo />
      <Burger />
    </header>
    <nav
      class="absolute w-14 top-28 z-[12] px-4 py-4 rounded-2xl bg-rhino-800 transition-all"
      :class="burgerStore.checked ? 'left-4' : '-left-20'">
      <ul class="flex flex-col gap-2">
        <li class="relative h-14 text-rhino-950 font-bold hover:text-amber-400">
          <NuxtLink
            to="/webdesign"
            class="absolute h-14 group rounded-2xl flex items-center justify-center bg-rhino-800 pl-0">
            <Icon
              name="material-symbols:palette-outline"
              alt="Webdesign"
              class="text-2xl" />
            <span
              class="transition-all ml-4 overflow-hidden"
              :class="burgerStore.checked ? 'w-32' : 'w-0'"
              >Webdesign</span
            >
          </NuxtLink>
        </li>
        <li class="relative h-14 text-rhino-950 font-bold hover:text-amber-400">
          <NuxtLink
            to="/development"
            class="absolute h-14 group rounded-2xl flex items-center justify-center bg-rhino-800 pl-0">
            <Icon name="fa6-solid:code" alt="Development" class="text-2xl" />
            <span
              class="transition-all ml-4 overflow-hidden"
              :class="burgerStore.checked ? 'w-32' : 'w-0'"
              >Development</span
            >
          </NuxtLink>
        </li>
        <li class="relative h-14 text-rhino-950 font-bold hover:text-amber-400">
          <NuxtLink
            to="/devops"
            class="absolute h-14 group rounded-2xl flex items-center justify-center bg-rhino-800 pl-0">
            <Icon name="fa6-solid:server" alt="DevOps" class="text-2xl" />
            <span
              class="transition-all ml-4 overflow-hidden"
              :class="burgerStore.checked ? 'w-32' : 'w-0'"
              >DevOps</span
            >
          </NuxtLink>
        </li>
        <li class="relative h-14 text-rhino-950 font-bold hover:text-amber-400">
          <NuxtLink
            to="/archiv"
            class="absolute h-14 group rounded-2xl flex items-center justify-center bg-rhino-800 pl-0">
            <Icon name="fa6-solid:book" alt="Über mich" class="text-2xl" />
            <span
              class="transition-all ml-4 overflow-hidden"
              :class="burgerStore.checked ? 'w-32' : 'w-0'"
              >Archiv</span
            >
          </NuxtLink>
        </li>
        <li class="relative h-14 text-rhino-950 font-bold hover:text-amber-400">
          <NuxtLink
            to="/whoami"
            class="absolute h-14 group rounded-2xl flex items-center justify-center bg-rhino-800 pl-0">
            <Icon name="fa6-solid:robot" alt="Über mich" class="text-2xl" />
            <span
              class="transition-all ml-4 overflow-hidden"
              :class="burgerStore.checked ? 'w-32' : 'w-0'"
              >Whoami</span
            >
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
  <div
    class="fixed top-0 left-0 w-full h-full bg-rhino-950/90 z-10"
    v-if="burgerStore.checked"></div>
</template>
