import React from "react";
import { Container, Section } from "./home-office.style";
import { HomeOfficeModel } from "~/shared";

export const HomeOffice = () => {
  return (
    <Section>
      <Container>
        <h3>My work experience</h3>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </Container>
      <Container>
        <HomeOfficeModel />
      </Container>
    </Section>
  );
};
