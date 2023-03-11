import React from "react";
import Image from "next/image";
import { Content, ToolWrapper, Wrapper } from "./stack.style";
import { TOOLS_LIST } from "./model";

interface IStackProps {}

export const Stack: React.FC<IStackProps> = () => {
  return (
    <Wrapper>
      <h3>My stack</h3>
      <Content>
        {TOOLS_LIST.map(({ name, imgUrl }) => (
          <ToolWrapper key={name}>
            <p>{name}</p>
            <Image
              src={`/assets/images/icons/${imgUrl}`}
              width={15}
              height={15}
              alt={`icon of ${name}`}
            />
          </ToolWrapper>
        ))}
      </Content>
    </Wrapper>
  );
};
