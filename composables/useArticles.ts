export const useArticles = () =>
  useState('articles', () => [
    {
      id: 1,
      url: '/development',
      title: 'Applikationen mit Vue 3 und Rapid Prototyping erstellen',
      introduction:
        'Sach ma! Die Frau Koschinski, die alte Kampfschnake, kam bei uns auffen Bau und sachte, dasse ihren Macker sucht. Is nich wahr! Lass ma abdackeln von hier. Weisse wat? Ker wat is dat schön! Von mir aus kannste auch bis Pussemuckel fahren. ',
      tags: ['Vue', 'JS', 'Development'],
      date: '2023-10-12',
      category: 'Development',
    },
    {
      id: 2,
      url: '/webdesign',
      title: 'Wie man ein tolles Webdesign für einen Tech Blog macht',
      introduction:
        'Da kam der aber angepest! Sach ma! Heute gehn wa schön essen, gibt lecker Pommes Schranke. Ich hab hier wirklich alles abklabastert, aber nix gefunden. Ich ess getz erstma mein Bütterken auf und dann gucken wa ma. Da verlierste doch den Überblick bei dem ganzen Kuddelmuddel. Willse noch ne Stulle futtern? Da kommse nich gut bei wech, dat sach ich Dir. Komma beim Oppa auf Schößken.',
      tags: ['HTML', 'CSS', 'Webdesign'],
      date: '2023-10-12',
      category: 'Webdesign',
    },
    {
      id: 3,
      url: '/devops',
      title: 'Kubernetes Cluster für kleine Projekte erstellen',
      introduction:
        'Na dat nenn ich ma nen Wonneproppen. Komm annen Tisch, gleich gibbet Essen. Da kommse nich gut bei wech, dat sach ich Dir. Hömma! Ich muss gleich wieder auffe Maloche. Kannse dem Ömmaken ma über de Straße helfen? Lass ma abdackeln von hier. Ker dat macht mich feddich! Hömma, du schuldes mir nochn Heiermann, den kannse so langsam ma abdrücken. Komm annen Tisch, gleich gibbet Essen. Willse noch ne Stulle futtern? Wat macht die Trulla da?',
      tags: ['Kubernetes', 'DevOps', 'Docker'],
      date: '2023-10-12',
      category: 'DevOps',
    },
  ]);
