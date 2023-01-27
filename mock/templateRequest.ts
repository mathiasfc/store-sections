type SectionSettings = {
  gap: 2;
};

export type Section = {
  id: string;
  settings?: SectionSettings;
  components: Component[];
};

export type Component = {
  name: string;
  sizes?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  props?: {
    title?: string;
    description?: string;
  };
};

type TemplateRequest = {
  sections: Section[];
};

const templateRequest: TemplateRequest = {
  sections: [
    {
      id: "0",
      components: [
        { name: "placeholder", sizes: { xs: 6 } },
        { name: "placeholder", sizes: { xs: 6 } },
        // { name: "placeholder", sizes: { xs: 4 } },
      ],
    },
    {
      id: "1",
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
          props: { title: "Teste título", description: "Descriçaõ" },
        },
      ],
    },
  ],
};

export default templateRequest;
