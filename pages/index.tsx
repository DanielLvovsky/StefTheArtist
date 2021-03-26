import * as React from "react";
import { NextPage } from "next";
import styled, { createGlobalStyle } from "styled-components";

import { Landing } from "components/Landing";

import {
  ContactButton,
  CardsCatalog,
  SiteFooter,
  GitHubBanner,
  Sallery,
  SiteHeader,
  NewsLine,
  Technologies,
  TechnologiesCatalog,
  Expirience,
} from "components";

const GlobalStyles = createGlobalStyle`div.headroom--unfixed > .headroomContainer {
  border-bottom: none;
}`;

const Main = styled.main`
  padding: 40px 0;
`;

const IndexPage: NextPage = () => (
  <>
    <NewsLine />

    <SiteHeader />

    <Landing />

    <Main>
      <GlobalStyles />
      <CardsCatalog />
      <br />
      <br />
      <br />
      <Technologies />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Sallery />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <GitHubBanner />
      <br />
      <br />
      <br />
    </Main>
    <SiteFooter />
    <ContactButton />
  </>
);

export default IndexPage;
