import { defineStore } from 'pinia';

export const useBurgerStore = defineStore({
  id: 'burger-store',
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
