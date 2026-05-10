<template>
  <footer class="mt-8">
    <Separator />
    <div
      class="rounded-t-2xl bg-rhino-800 min-h-20 p-8 flex flex-col md:flex-row flex-wrap items-center justify-center shadow-extra">
      <p class="font-mono min-w-28 text-black/70">
        <strong class="reset">
          Made with
          <Icon name="pixelarticons:heart" class="text-red-500"
        /></strong>
      </p>
      <ul class="flex items-center gap-2 mt-2 md:mt-0 md:ml-auto">
        <li>
          <NuxtLink
            class="footer-link text-black/70 hover:text-amber-400 transition-all"
            to="/datenschutz"
            >Datenschutz</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/impressum"
            class="footer-link text-black/70 hover:text-amber-400 transition-all"
            >Impressum</NuxtLink
          >
        </li>
      </ul>
    </div>
  </footer>
</template>
