<template>
  <div class="container p-2">
    <div class="main mt-2">
      <nuxt-link to="/" class="color-primary text-decoration-none">
        <strong class="size-1">Der-Alex.com</strong>
        <h1 class="size-3">Frontend Entwickler aus Dortmund, dem Herzen des Ruhrpotts!</h1>
      </nuxt-link>
      <slot />
    </div>
    <footer class="p-2 flex justify-content-center">
      <nuxt-link to="/" class="color-primary mr-3">Home</nuxt-link>

      <nuxt-link to="/datenschutz" class="color-primary mr-3">Datenschutz</nuxt-link>
      <nuxt-link to="/impressum" class="color-primary">Impressum</nuxt-link>
    </footer>
  </div>
</template>
<style scoped>
.container {
  min-height: 100vh;
  background: var(--bg);
  color: var(--primary);
}
footer {
  background: var(--bg);
}
</style>
