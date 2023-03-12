import { useState } from "react";
import Head from "next/head";
import { Main, Cover, Projects, Stack, Networks } from "~/widgets";
import { TextWrapper } from "~/shared";
import { useMobileDetection } from "~/features";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dmitrii Vasilev. Frontend engineer portfolio</title>
        <meta name="description" content="My portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main>
        <Cover />
        <TextWrapper>
          {`Hi, I’m Dmitrii and I create web user interfaces for more than 4 years.\n
I enjoy my job and infinitely improve my skills.\n
Actually, that’s why I chose this profession, cause there are lot of things to learn about`}
        </TextWrapper>
        <Projects />
        <Stack />
        <Networks />
      </Main>
    </>
  );
}
