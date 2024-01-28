<script setup lang="ts">
const props = defineProps({
  introduction: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="content border-b-2 border-rhino-50/20 pb-6 mb-4">
    <p class="text-balance">
      {{ introduction }}
    </p>
  </div>
</template>
