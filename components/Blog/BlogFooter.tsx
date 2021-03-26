import * as React from "react";
import styled from "styled-components";
import { FiInstagram } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";

import {
  GitHubBanner,  
} from "components";

const Footer = styled.div`
  color: #24292e;
  font-size: 19px;
  margin-top: 2em;
  margin-bottom: 2em;
  text-align: center;
  & .links {
    display: grid;
    gap: 16px;
    justify-content: center;
    grid-template-columns: repeat(3, auto);
    margin: 1em auto 0;

    & a {
      align-items: center;
      background-color: var(--color-gray-1);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      transition: var(--transition-ease);
      padding: 0.6em;

      &:hover,
      &:focus {
        background-color: var(--color-gray-2);
      }

      & svg { 
        color: var(--color-gray-8);
        height: 25px;
        width: 25px;
      }
    }
  }
`;

interface BlogFooterProps {}

export const BlogFooter: React.FC<BlogFooterProps> = () => (
  <Footer data-fix-width className="montserrat" data-font-weight="500">
    <div>Connect With Me</div>
    <div className="links">
      <a
        href="https://instagram.com/stef_the.artist"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My Instagram"
      >
        <FiInstagram />
      </a>
      <a
        href="https://behance.net/stefanielvovsky"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="My Behance"
      >
        <FaBehance />
      </a>
    </div>
  </Footer>
);
