import { defineStore } from 'pinia';

export const useIconNameStore = defineStore({
  id: 'icon-name-store',
  getters: {
    getIconName: () => {
      return (tag: string) => {
        let icon = '';
        switch (tag.toLowerCase()) {
          case 'nuxt':
            icon = 'simple-icons:nuxtdotjs';
            break;
          case 'vue':
            icon = 'fa6-brands:vuejs';
            break;
          case 'js':
            icon = 'fa6-brands:js';
            break;
          case 'nestjs':
            icon = 'simple-icons:nestjs';
            break;
          case 'nodejs':
            icon = 'fa6-brands:node';
            break;
          case 'html':
            icon = 'fa6-brands:html5';
            break;
          case 'css':
            icon = 'fa6-brands:css3';
            break;
          case 'kubernetes':
          case 'docker':
          case 'devops':
            icon = 'mdi:kubernetes';
          default:
            break;
        }

        return icon;
      };
    },
  },
});
