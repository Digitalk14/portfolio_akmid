import { styled } from "@linaria/react";

export const Wrapper = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  margin: 0 0 32px 0;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 600px;
  width: 70%;
`;

export const TextWrapper = styled.div`
  width: 50%;
  background: linear-gradient(
    to right,
    #ffffff00 0%,
    #ffffff 30%,
    #ffffff 51%,
    #ffffff 100%
  );
  height: 600px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const H1 = styled.h1`
  text-align: right;
  margin: 10px 0 0 0;
`;
