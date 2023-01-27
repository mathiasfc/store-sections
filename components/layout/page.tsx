import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  padding: 0px 15px;
`;

export default function Page({ children }) {
  return <PageContainer>{children}</PageContainer>;
}
