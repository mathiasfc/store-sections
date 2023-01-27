import styled from "styled-components";

const SharedComponentWithPropsContainer = styled.div`
  overflow: hidden;
  padding: 20px;
  background-color: #e3e3e3;
  border-radius: 6px;
`;

export default function SharedComponentWithProps({ title, description }) {
  return (
    <SharedComponentWithPropsContainer>
      <p>title: {title}</p>
      <p>description: {description}</p>
    </SharedComponentWithPropsContainer>
  );
}
