import styled from "styled-components";

const PlaceholderContainer = styled.div`
  background-color: #e3e3e3;
  overflow: hidden;
  padding: 20px;
`;

export default function Placeholder({ children }) {
  return (
    <PlaceholderContainer>
      <span>{children}</span>
    </PlaceholderContainer>
  );
}
