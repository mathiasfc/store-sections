import styled from "styled-components";
import { Grid } from "@mui/material";
import MapSharedComponent from "../shared/mapSharedComponent";
import { Component } from "../../mock/templateRequest";

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  margin-top: 3rem;
  border: 2px solid green;
`;

type SectionProps = {
  components: Component[];
};

export default function Section({ components }: SectionProps) {
  return (
    <SectionContainer>
      <Grid container spacing={2} >
        {components?.map((component) => {
          const { name, sizes, props } = component;

          console.log(component);

          return (
            <Grid item {...sizes} key={name}>
              <MapSharedComponent componentName={name} {...props} />
            </Grid>
          );
        })}
      </Grid>
    </SectionContainer>
  );
}
