import * as React from "react";

import { FooterLink, LinksBlock } from "components/SiteFooter";

interface SocialLinksProps {}

export const SocialLinks: React.FC<SocialLinksProps> = () => (
  <LinksBlock title="Social">
    <FooterLink href="https://instagram.com/stef_the.artist">Instagram</FooterLink>
    <FooterLink href="https://www.behance.net/stefanielvovsky">Behance</FooterLink>
  </LinksBlock>
);
