<script setup>
const props = defineProps({
  classes: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    class="rounded-2xl px-8 py-3 bg-gradient-to-br from-rhino-800 to-rhino-600 shadow-extr dark:text-rhino-50 flex items-center justify-center enabled:hover:ring enabled:hover:ring-rhino-900/80 disabled:dark:text-gray-400 disabled:cursor-not-allowed"
    :class="classes"
    :disabled="disabled">
    <slot />
  </button>
</template>
