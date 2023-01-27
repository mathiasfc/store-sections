import { TemplateRequest } from "./types";

const templateRequest: TemplateRequest = {
  sections: [
    {
      id: "0",
      settings: { spacing: 2 },
      components: [
        { name: "placeholder", sizes: { xs: 6 } },
        { name: "placeholder", sizes: { xs: 6 } },
        { name: "placeholder", sizes: { xs: 4 } },
      ],
    },
    {
      id: "1",
      settings: { spacing: 2 },
      components: [
        { name: "placeholder", sizes: { xs: 8 } },
        { name: "placeholder", sizes: { xs: 4 } },
      ],
    },
    {
      id: "2",
      components: [
        { name: "placeholder", sizes: { xs: 2 } },
        { name: "placeholder", sizes: { xs: 2 } },
        { name: "placeholder", sizes: { xs: 2 } },
        { name: "placeholder", sizes: { xs: 2 } },
        { name: "placeholder", sizes: { xs: 2 } },
        { name: "placeholder", sizes: { xs: 2 } },
      ],
    },
    {
      id: "3",
      settings: {
        direction: "row",
      },
      components: [{ name: "productComparison", sizes: { xs: 12 } }],
    },
    {
      id: "4",
      components: [{ name: "productCard", sizes: { xs: 12 } }],
    },
    {
      id: "5",
      components: [{ name: "productList", sizes: { xs: 12, md: 6, xl: 12 } }],
    },
    {
      id: "6",
      components: [
        {
          name: "sharedComponentWithProps",
          sizes: { xs: 4, sm: 4, md: 4, lg: 4, xl: 4 },
          // settingsId
          props: { title: "Teste título", description: "Descrição" },
        },
      ],
    },
  ],
};

export default templateRequest;
