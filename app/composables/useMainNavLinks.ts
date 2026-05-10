export const useMainNavLinks = () =>
  useState("mainNavLinks", () => [
    {
      url: "/webdesign",
      text: "Webdesign",
      iconName: "fa-solid:palette"
    },
    {
      url: "/development",
      text: "Development",
      iconName: "fa-solid:code"
    },
    {
      url: "/devops",
      text: "DevOps",
      iconName: "fa-solid:server"
    },
    {
      url: "/archiv",
      text: "Archiv",
      iconName: "fa-solid:book"
    },
    {
      url: "/whoami",
      text: "Whoami",
      iconName: "fa-solid:robot"
    }
  ]);
