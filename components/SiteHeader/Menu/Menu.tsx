import * as React from "react";
import styled from "styled-components";

import { useMediaQuery } from "@material-ui/core";

import { MennuButton, MenuHeader, Modal, SurpriseMenuButton } from "components/SiteHeader/Menu";

import { FiInstagram, FiHome, FiUser, FiMail, FiShoppingBag } from "react-icons/fi";

import { SiRedbubble } from "react-icons/si";

import { CgWorkAlt } from "react-icons/cg";

import { FaBehance } from "react-icons/fa";

interface MenuProps {
  open: boolean;
  closeDialog: () => void;
}

export const Menu: React.FC<MenuProps> = ({ open, closeDialog }) => {
  const isMobile = useMediaQuery("(max-width: 720px)");
  return (
    <Modal
      onClose={closeDialog}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullScreen={isMobile}
      className="montserrat"
    >
      {isMobile && <MenuHeader closeDialog={closeDialog} />}
      <Grid>
        <Buttons>
          <MennuButton href="/" title="Home">
            <FiHome color="var(--color-grey-10)" />
          </MennuButton>

          <MennuButton href="/work" title="Work">
            <CgWorkAlt color="var(--color-grey-500)" />
          </MennuButton>

          <MennuButton href="/about" title="About Me">
            <FiUser color="var(--color-grey-500)" />
          </MennuButton>

          <MennuButton href="/shop" title="Shop">
            <FiShoppingBag color="var(--color-grey-500)" />
          </MennuButton>

          <MennuButton href="/contact" title="Contact">
            <FiMail color="var(--color-grey-500)" />
          </MennuButton>
          <SurpriseMenuButton />
        </Buttons>

        <hr />

        <Buttons>
          <MennuButton href="https://instagram.com/stef_the.artist" title="Instagram" outside>
            <FiInstagram color="#E1306C" />
          </MennuButton>
          <MennuButton href="https://behance.com/stefanielvovsky" title="Behance" outside>
            <FaBehance color="#053eff" />
          </MennuButton>
          <MennuButton href="https://www.redbubble.com/people/StefTheArtist/shop" title="Redubble" outside>
            <SiRedbubble color="#e4002b" />
          </MennuButton>
          <MennuButton href="https://www.inprnt.com/gallery/steftheartist/" title="INPrint" outside>
            <FiShoppingBag color="#4d4f53" />
          </MennuButton>
        </Buttons>
      </Grid>
    </Modal>
  );
};

const Grid = styled.div`
  display: grid;
  grid-gap: 4px;

  margin: 4px 0;
`;
const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 4px;

  @media (min-width: 721px) {
    max-width: 360px;
  }
`;
