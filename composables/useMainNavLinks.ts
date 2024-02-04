export const useMainNavLinks = () =>
  useState('mainNavLinks', () => [
    {
      url: '/webdesign',
      text: 'Webdesign',
      iconName: 'fa6-solid:palette',
    },
    {
      url: '/development',
      text: 'Development',
      iconName: 'fa6-solid:code',
    },
    {
      url: '/devops',
      text: 'DevOps',
      iconName: 'fa6-solid:server',
    },
    {
      url: '/archiv',
      text: 'Archiv',
      iconName: 'fa6-solid:book',
    },
    {
      url: '/whoami',
      text: 'Whoami',
      iconName: 'fa6-solid:robot',
    },
  ]);
