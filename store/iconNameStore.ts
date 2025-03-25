import { defineStore } from 'pinia';

export const useIconNameStore = defineStore('icon-name-store', {
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
          case 'docker':
            icon = 'mdi:docker';
            break;
          case 'kubernetes':
          case 'devops':
            icon = 'mdi:kubernetes';
            break;
          case 'wordpress':
            icon = 'fa6-brands:wordpress';
            break;
          case 'linux':
            icon = 'ph:linux-logo';
            break;
          case 'php':
            icon = 'fa6-brands:php';
            break;
          case 'techstack':
            icon = 'tdesign:system-code';
            break;
          case 'graphql':
            icon = 'mdi:graphql';
            break;
          case 'react':
            icon = 'mdi:react';
            break;
          case 'tailwind':
            icon = 'mdi:tailwind';
            break;
          default:
            break;
        }

        return icon;
      };
    },
  },
});
