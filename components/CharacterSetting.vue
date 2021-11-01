<template>
  <div class="section flex" v-if="hasStart">
    <div class="line has-dot"></div>
    <div class="content my-2"></div>
  </div>
  <div class="section flex align-items-center line-height-0">
    <div class="circle flex align-items-center justify-content-center mr-2">
      <font-awesome-icon :icon="icon" size="lg" />
    </div>
    <h3 class="ml-1">{{ title }}</h3>
  </div>
  <div class="section flex">
    <div class="line mr-2"></div>
    <div class="content flex flex-column align-items-start ml-4 my-3">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: Array,
    required: true,
  },
  hasStart: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
.line {
  border-left: 4px solid var(--primary);
  margin-left: 1.5rem;
  &.has-dot {
    position: relative;

    &:before {
      position: absolute;
      transform: translateX(-6px) translateY(-4px);
      content: ' ';
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background: var(--primary);
    }
  }
}
.circle {
  border: 3px solid var(--primary);
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
}
</style>
