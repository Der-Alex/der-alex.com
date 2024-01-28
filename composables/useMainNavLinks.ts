export const useMainNavLinks = () =>
  useState('mainNavLinks', () => [
    {
      url: '/webdesign',
      text: 'Webdesign',
      componentName: 'IconPalette',
    },
    {
      url: '/development',
      text: 'Development',
      componentName: 'IconCode',
    },
    {
      url: '/devops',
      text: 'DevOps',
      componentName: 'IconServer',
    },
    {
      url: '/archiv',
      text: 'Archiv',
      componentName: 'IconBook',
    },
    {
      url: '/whoami',
      text: 'Whoami',
      componentName: 'IconRobot',
    },
  ]);
