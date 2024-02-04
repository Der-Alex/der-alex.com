<template>
  <footer class="mt-8">
    <Separator />
    <div
      class="rounded-t-2xl bg-gradient-to-br from-rhino-900 to-rhino-800 min-h-20 p-8 flex flex-col md:flex-row flex-wrap items-center justify-center">
      <p class="font-mono min-w-28 text-black/70">
        <strong>
          Made with
          <Icon name="pixelarticons:heart" class="text-red-500"
        /></strong>
      </p>
      <ul class="flex items-center gap-2 mt-2 md:mt-0 md:ml-auto">
        <li>
          <NuxtLink
            class="text-black/70 hover:text-amber-400 transition-all"
            to="/datenschutz"
            >Datenschutz</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/impressum"
            class="text-black/70 hover:text-amber-400 transition-all"
            >Impressum</NuxtLink
          >
        </li>
      </ul>
    </div>
  </footer>
</template>
