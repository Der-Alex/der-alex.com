<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();

const status = computed(
  () => props.error.status ?? props.error.statusCode ?? 500
);
const isNotFound = computed(() => status.value === 404);

useHead({
  title: isNotFound.value
    ? "Der-Alex.com | Seite nicht gefunden"
    : "Der-Alex.com | Fehler"
});

const handleError = () => clearError({ redirect: "/" });
</script>
<template>
  <Html class="dark" lang="de" />
  <Body class="bg-rhino-950" />
  <Meta name="robots" content="noindex, nofollow" />

  <div class="is-wrapper max-w-5xl mx-auto">
    <MainNav class="hidden lg:block w-full max-w-5xl px-4 mx-auto" />
    <MobileNav />
    <main class="w-full max-w-5xl px-4 mx-auto wrapper">
      <AwArticleDetail class="flex flex-col items-start gap-4 text-rhino-100">
        <h1 class="text-4xl font-bold text-rhino-400">{{ status }}</h1>
        <p v-if="isNotFound">
          Diese Seite gibt es leider nicht (mehr). Vielleicht findest du im
          Archiv, was du suchst.
        </p>
        <p v-else>Da ist leider etwas schiefgelaufen.</p>
        <AwButton @click="handleError">Zur Startseite</AwButton>
      </AwArticleDetail>
    </main>
    <AwFooter class="w-full max-w-5xl px-4 mx-auto" />
  </div>
</template>
