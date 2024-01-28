<script setup>
const links = useMainNavLinks();
</script>
<template>
  <ul
    class="flex flex-col mdplus:flex-row w-full items-start mdplus:items-center justify-end gap-4 ml-4 mdplus:ml-0">
    <li v-for="link in links" :key="link">
      <MainNavLink
        :url="link.url"
        :text="link.text"
        :component-name="link.componentName" />
    </li>
  </ul>
</template>
