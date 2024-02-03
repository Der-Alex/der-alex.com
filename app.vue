<template>
  <Html class="dark" />
  <Body class="bg-rhino-950" />
  <MainNav class="max-w-5xl px-4 mx-auto" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <AwFooter class="max-w-5xl px-4 mx-auto" />
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
</style>
