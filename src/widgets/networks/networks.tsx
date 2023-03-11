import React from "react";
import Image from "next/image";
import { Wrapper } from "./networks.style";
import { NETWORKS_LIST } from "./model";

interface INetworksProps {}

export const Networks: React.FC<INetworksProps> = () => {
  return (
    <Wrapper>
      {NETWORKS_LIST.map(({ name, icon, link }) => (
        <a key={name} href={link}>
          <Image
            src={`/assets/images/icons/${icon}`}
            width={30}
            height={30}
            alt={`icon of ${name}`}
          />
        </a>
      ))}
    </Wrapper>
  );
};
