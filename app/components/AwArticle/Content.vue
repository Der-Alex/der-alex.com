<script setup lang="ts">
const props = defineProps({
  introduction: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="pb-6">
    <p class="text-balance">
      {{ introduction }}
    </p>
  </div>
</template>
