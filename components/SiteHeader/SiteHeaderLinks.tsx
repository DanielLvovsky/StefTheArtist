import * as React from "react";
import styled from "styled-components";

import { SiteHeaderLink } from "components/SiteHeader";

interface SiteHeaderLinksProps {}

export const SiteHeaderLinks: React.FC<SiteHeaderLinksProps> = () => (
  <Container className="site-header-links">
    <SiteHeaderLink href="/work">Work</SiteHeaderLink>
    <SiteHeaderLink href="/about">About Me</SiteHeaderLink>
    <SiteHeaderLink href="/shop">Shop</SiteHeaderLink>
    <SiteHeaderLink href="/contact">Contact</SiteHeaderLink>
  </Container>
);

const Container = styled.ul`
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
`;
