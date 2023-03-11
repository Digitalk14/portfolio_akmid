import { styled } from "@linaria/react";

export const Wrapper = styled.section`
  width: 100%;
  margin: 32px 0;
  p {
    white-space: break-spaces;
    max-width: 40%;
    line-height: 24px;
  }
  @media (max-width: 960px) {
    padding: 0 16px;
    margin: 10px 0;
    p {
      max-width: 100%;
      line-height: 20px;
    }
  }
`;
