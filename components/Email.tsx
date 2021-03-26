import * as React from "react";
import styled from "styled-components";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { MdClose } from "react-icons/md";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { useInView } from "scripts";

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 10vh;

  transition: opacity 1.5s ease-out;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  & > div.copy-email-title {
    margin-bottom: 0.5em;
    font-size: 19px;
  }

  & > address > button {
    border: none;
    border-radius: 5px;
    cursor: pointer;

    background-color: #363636;
    color: #fff;
    max-width: 100%;
    font-family: "Montserrat";
    font-size: 26px;
    transition: var(--transition-ease);
    padding: 0.225em 0.75em;
    width: 380px;

    &:focus:not(:focus-visible) {
      outline: none;
    }

    &:hover,
    &:focus {
      background-color: #FF90D0;
    }

    &:active {
      background-color: #FF6AC0;
    }
  }
`;
interface EmailProps {}

export const Email: React.FC<EmailProps> = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);
  const { ref, visible } = useInView({ rootMargin: "0px" });

  const closeSnackbar = () => setOpen(false);

  return (
    <Wrapper ref={ref} data-visible={visible} {...props}>
      <div className="copy-email-title" data-font-size="Focus">
        Or just send me an email later:
      </div>
      <address>
        <CopyToClipboard text="stefanielvovsky@gmail.com" onCopy={() => setOpen(true)}>
          <button data-font-size="L">Save Email</button>
        </CopyToClipboard>
      </address>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={5000}
        onClose={closeSnackbar}
        message="Copied to clipboard!"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackbar}>
            <MdClose size={20} />
          </IconButton>
        }
      />
    </Wrapper>
  );
};
