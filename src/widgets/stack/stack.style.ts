import { styled } from "@linaria/react";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 960px) {
    padding: 0 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 160px;
  flex-wrap: wrap;
`;

export const ToolWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 0;
  p{
    margin: 0 10px 0 0;
  }
`;
