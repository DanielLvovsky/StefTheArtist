import * as React from "react";

import { FooterLink, LinksBlock } from "components/SiteFooter";

interface OtherLinksProps {}

export const ExploreLinks: React.FC<OtherLinksProps> = () => (
  <LinksBlock title="Explore">
    <FooterLink href="/" inner>
      Home
    </FooterLink>
    <FooterLink href="/work" inner>
      Work
    </FooterLink>
    <FooterLink href="/about" inner>
      About
    </FooterLink>
    <FooterLink href="/contact" inner>
      Contact
    </FooterLink>
  </LinksBlock>
);
