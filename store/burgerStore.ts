import { defineStore } from 'pinia';

export const useBurgerStore = defineStore('burger-store', {
  state: () => {
    return {
      checked: false,
    };
  },
  actions: {
    toggle() {
      this.checked = !this.checked;
    },
  },
});
