import React from "react";
import Image from "next/image";
import { assetPrefix } from "~/shared";
import { Wrapper, ImageWrapper, TextWrapper, H1 } from "./cover.style";

interface ICoverProps {
  isMobile: boolean;
}

export const Cover: React.FC<ICoverProps> = ({isMobile}) => {
  console.log(isMobile)
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={`${assetPrefix()}/assets/images/covers/main.jpeg`}
          fill
          alt="cover"
          style={{ objectFit: "cover" }}
        />
      </ImageWrapper>
      <TextWrapper>
        <h2>Dmitrii Vasilev</h2>
        <H1>Frontend Engineer</H1>
      </TextWrapper>
    </Wrapper>
  );
};
