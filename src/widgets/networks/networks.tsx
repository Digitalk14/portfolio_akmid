import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assetPrefix } from "~/shared";
import { Content, Wrapper } from "./networks.style";
import { NETWORKS_LIST } from "./model";

interface INetworksProps {
  isMobile: boolean;
}

export const Networks: React.FC<INetworksProps> = ({ isMobile }) => {
  const [isBottom, setBottom] = useState(false);
  const handleScroll = () => {
    if (isMobile) {
      setBottom(true);
      return;
    } else {
      const bottomPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      if (bottomPosition + 50 > documentHeight) {
        setBottom(true);
        return;
      } else {
        setBottom(false);
        return;
      }
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  useEffect(() => {
    handleScroll();
  }, []);
  return (
    <Wrapper>
      <Content isBottom={isBottom}>
        {NETWORKS_LIST.map(({ name, icon, link }) => (
          <a key={name} href={link} target="_blank">
            <Image
              src={`${assetPrefix()}/assets/images/icons/${icon}`}
              width={30}
              height={30}
              alt={`icon of ${name}`}
            />
          </a>
        ))}
      </Content>
    </Wrapper>
  );
};
