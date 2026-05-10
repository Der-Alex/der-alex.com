<script setup lang="ts">
import { useBurgerStore } from "~/stores/burgerStore";
const burgerStore = useBurgerStore();
const close = () => setTimeout(() => (burgerStore.checked = false), 200);
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  iconName: {
    type: String,
    required: true
  },
  delay: {
    type: String,
    required: true,
    default: "0"
  }
});

const getDelay = computed(() => {
  switch (props.delay) {
    case "0":
      return "delay-0";
    case "50":
      return "delay-[50ms]";
    case "100":
      return "delay-[100ms]";
    case "150":
      return "delay-[150ms]";
    case "200":
      return "delay-[200ms]";
  }
});
</script>

<template>
  <NuxtLink
    :to="url"
    class="nav-link absolute h-14 group rounded-2xl flex items-center justify-center bg-rhino-800 pl-0"
    @click="close"
  >
    <Icon
      :name="iconName"
      :alt="text"
      class="transition-all duration-150 text-2xl"
    />
    <span
      class="transition-[width] ease-out ml-6 overflow-hidden"
      :class="[
        {
          'w-32 group-hover:w-36': burgerStore.checked,
          'w-0': !burgerStore.checked
        },
        getDelay
      ]"
      >{{ text }}</span
    >
  </NuxtLink>
</template>
