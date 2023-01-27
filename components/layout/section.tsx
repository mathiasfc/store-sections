import styled from "styled-components";
import { Grid } from "@mui/material";
import MapSharedComponent from "../shared/mapSharedComponent";
import { Section as SectionType } from "../../mock/types";

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  margin-top: 3rem;
  border: 2px solid green;
  padding: 15px;
`;

type SectionProps = {
  section: SectionType;
};

export default function Section({ section }: SectionProps) {
  console.log(section);

  const components = section?.components;

  const buildSectionProps = (section) => {
    const direction = section?.settings?.direction;
    const columnSpacing = section?.settings?.columnSpacing;
    const rowSpacing = section?.settings?.rowSpacing;
    const spacing = section?.settings?.spacing;

    const sectionProps = {
      ...(direction && { direction }),
      ...(columnSpacing && { columnSpacing }),
      ...(rowSpacing && { rowSpacing }),
      ...(spacing && { spacing }),
    };

    return sectionProps;
  };

  return (
    <SectionContainer>
      <Grid
        container
        spacing={section?.settings?.spacing || 2}
        {...buildSectionProps(section)}
      >
        {components?.map((component, index) => {
          const { name, sizes, props } = component;

          return (
            <Grid item {...sizes} key={`${name}-${index}`}>
              <MapSharedComponent componentName={name} {...props} />
            </Grid>
          );
        })}
      </Grid>
    </SectionContainer>
  );
}
