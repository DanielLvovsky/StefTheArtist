import * as React from "react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import styled from "styled-components";
import { About, ContactButton, NewsLine, SiteFooter, SiteHeader } from "components";

const AboutPage: NextPage = () => (
  <>
    <NextSeo
      title="StefTheArtist - About Me"
      description="About Me and experience."
      canonical="https://steftheartist.com/about"
      openGraph={{
        url: "https://steftheartist.com/about",
        title: "StefTheArtist - About Me",
        type: "profile",
        description: "Personal site, showcase and portfolio of StefTheArtist.",
      }}
    />
    <NewsLine />
    <SiteHeader />
    <Main>
      <About />
    </Main>
    <SiteFooter />
    <ContactButton />
  </>
);

const Main = styled.main`
  margin-top: 1.25em;
  margin-bottom: 1.25em;
`;
export default AboutPage;
