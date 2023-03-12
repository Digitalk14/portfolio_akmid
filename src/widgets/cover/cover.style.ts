import { styled } from "@linaria/react";

export const Wrapper = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  margin: 0 0 32px 0;
  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 600px;
  width: 70%;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: 50%;
  background: linear-gradient(
    180deg,
    #ffffff00 0,
    #fcfcfcc4 20%,
    #fcfcfc 51%,
    #fcfcfc
  );
  height: 600px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 960px) {
    padding: 20px 16px 0 16px;
    width: 100%;
    height: auto;
    background: linear-gradient(
      180deg,
      #ffffff00 0,
      #fcfcfc 20%,
      #fcfcfc 51%,
      #fcfcfc
    );
    align-items: flex-start;
    top: auto;
    right: auto;
    h1,
    h2 {
      text-align: left;
    }
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 20px;
    }
  }
`;

export const H1 = styled.h1`
  text-align: right;
  margin: 10px 0 0 0;
`;
