export const useMainNavLinks = () =>
  useState('mainNavLinks', () => [
    {
      url: '/webdesign',
      text: 'Webdesign',
      componentName: 'fa6-solid:palette',
    },
    {
      url: '/development',
      text: 'Development',
      componentName: 'fa6-solid:code',
    },
    {
      url: '/devops',
      text: 'DevOps',
      componentName: 'fa6-solid:server',
    },
    {
      url: '/archiv',
      text: 'Archiv',
      componentName: 'fa6-solid:book',
    },
    {
      url: '/whoami',
      text: 'Whoami',
      componentName: 'fa6-solid:robot',
    },
  ]);
