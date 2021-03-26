import * as React from "react";
import Head from "next/head";
import styled from "styled-components";

import { FunnyVideo, SiteHeader } from "components";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 4em;
  height: 100%;

  & > h1 {
    margin-bottom: 20px;
    font-size: 60px;
  }

  & > p {
    font-style: italic;
    margin-top: 2em;
  }
`;

interface My404Props {}

export const My404: React.FC<My404Props> = () => (
  <>
    <Head>
      <title>404 - Page not found</title>
    </Head>
    <SiteHeader />

    <Wrapper>
      <h1 className="montserrat">404</h1>
      <p data-font-size="Focus">
        This page was lost in time, <br />
        like tears in rain.
        <br />
        <br />
        <br />
        <a href="/">Go back to the homepage.</a>
      </p>
    </Wrapper>
  </>
);

export default My404;
