import { GridDirection, GridSpacing, ResponsiveStyleValue } from "@mui/system";

type SectionSettings = {
  // default row
  direction?: ResponsiveStyleValue<GridDirection>;

  columnSpacing?: ResponsiveStyleValue<GridSpacing>;

  rowSpacing?: ResponsiveStyleValue<GridSpacing>;

  // default 2
  spacing?: ResponsiveStyleValue<GridSpacing>;
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

export type TemplateRequest = {
  sections: Section[];
};
