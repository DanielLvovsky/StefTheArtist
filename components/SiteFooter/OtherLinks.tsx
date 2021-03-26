import * as React from "react";

import { FooterLink, LinksBlock } from "components/SiteFooter";

interface OtherLinksProps {}

export const OtherLinks: React.FC<OtherLinksProps> = () => (
  <LinksBlock title="Art Prints">
    <FooterLink href="https://www.redbubble.com/people/StefTheArtist/shop">Redbubble</FooterLink>
    <FooterLink href="https://www.inprnt.com/gallery/steftheartist/">INPrint</FooterLink>
  </LinksBlock>
);
