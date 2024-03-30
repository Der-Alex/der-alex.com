<script setup lang="ts">
import { routerKey } from 'vue-router';
import { useBurgerStore } from './store/burgerStore';
const requestURL = useRequestURL();
const route = useRoute();
const burgerStore = useBurgerStore();

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: `https://${requestURL.host}${route.path === '/' ? '' : route.path}`
    },
    {
      rel: 'favicon',
      href: 'favicon.ico',
      type: 'image/x-icon'
    }
  ]
}))

</script>
<template>
  <Html class="dark" lang="de" />

  <Body class="bg-rhino-950" :class="{ 'mobile-menu-open': burgerStore.checked }" />
  <div class="is-wrapper max-w-5xl mx-auto">
    <MainNav class="hidden lg:block w-full max-w-5xl px-4 mx-auto" />
    <MobileNav />
    <NuxtPage :class="{ 'blur-[2px]': burgerStore.checked }" />
    <AwFooter class="w-full max-w-5xl px-4 mx-auto" />
  </div>
</template>
<style>
[data-content-id]> :first-child {
  margin-top: 0 !important;
}

code,
p strong:not(.reset),
li strong {
  padding: 2px;
  border-radius: 4px;
  @apply bg-rhino-950;
}

footer strong {
  background-color: initial;
}

pre code {
  background: initial;
}

a:not(.article-link):not(.footer-link):not(.nav-link) {
  @apply text-amber-400 hover:text-amber-500;
}

table {
  table-layout: fixed;
  border-collapse: collapse;
  @apply rounded-3xl border border-rhino-700;
}

th,
td {
  @apply border border-rhino-700 px-4 py-2;
}

.article-content {
  h2:not(.reset) {
    @apply text-rhino-400 text-xl font-bold mt-8 mb-4;
  }

  h3:not(.reset) {
    @apply text-rhino-400 text-base font-bold mt-6 mb-2;
  }

  ul:not(.list-none) li {
    @apply pl-4 relative;

    &::before {
      content: ' ';
      @apply absolute left-0 top-2 rounded-full w-2 h-2 bg-rhino-400;
    }
  }
}

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
