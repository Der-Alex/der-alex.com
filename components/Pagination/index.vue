<script setup lang="ts">
const props = defineProps({
  urlPart: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
const { clickPrevHandler, clickNextHandler, skip, maxPages } =
  await useCategory(props.urlPart, props.category);
</script>

<template>
  <div class="flex items-center justify-between">
    <AwButton
      @click="clickPrevHandler"
      classes="pl-4 pr-6"
      :disabled="skip <= 1"
      ><Icon name="fa-solid:chevron-left" class="mr-2" /><span
        >Zurück</span
      ></AwButton
    >
    <AwButton
      @click="clickNextHandler"
      classes="pl-6 pr-4"
      :disabled="skip >= maxPages"
      ><span>Weiter</span><Icon name="fa-solid:chevron-right" class="ml-2"
    /></AwButton>
  </div>
</template>
