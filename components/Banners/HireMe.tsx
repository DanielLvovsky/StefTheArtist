import * as React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

import { Image } from "components";

const bounceX = keyframes` from { left: 0; } to { left: calc(100% - 112px); }`;
const bounceY = keyframes`from { top: 0; } to { top: calc(100% - 61.06px); }`;
const bounceXMobile = keyframes` from { left: 0; } to { left: calc(100% - 80px); }`;
const bounceYMobile = keyframes`from { top: 0; } to { top: calc(100% - 44.75px); }`;

const Banner = styled.a`
  background: #FBCBF7;
  border-radius: 10px;
  color: #111;
  display: block;

  padding: clamp(16px, 5vw, 32px);
  position: relative;
  text-align: center;
  transition: all 0.15s ease;
  outline: none;

  & > div {
    position: relative;
    z-index: 1;
  }
  & .hire-me-image {
    margin: auto;
    max-width: 320px;
    width: 75vw;
  }

  & h3 {
    color: #fff;
    margin: 0.4em auto;
    font-family: Montserrat, var(--sans-family);
    transition: color 0.2s ease;
    width: fit-content;
    white-space: nowrap;

    backdrop-filter: blur(2px);
    border-radius: 1em;
  }
  & p {
    color: #fff;
    margin: 0.75em auto 1em;
    font-family: Inter, var(--sans-family);
    line-height: 1.45;
    max-width: 520px;
    width: fit-content;

    backdrop-filter: blur(2px);
    border-radius: 1em;

    @media (max-width: 1020px) {
      max-width: 420px;
    }
  }

  & .bouncer {
    display: block;
    color: var(--color-primary-lighter);
    position: absolute;
    transition: opacity 0.5s ease;

    z-index: 0;

    --x-time: 8.5s;
    --y-time: 10.1s;
    animation: ${bounceX} var(--x-time) linear 0s infinite alternate,
      ${bounceY} var(--y-time) linear 0s infinite alternate;
    width: 112px;

    @media (max-width: 640px) {
      --x-time: 4s;
      --y-time: 6.3s;
      animation: ${bounceXMobile} var(--x-time) linear 0s infinite alternate,
        ${bounceYMobile} var(--y-time) linear 0s infinite alternate;
      width: 80px;
    }

    & svg {
      height: auto;
      width: 100%;
    }
  }

  &:hover,
  &:focus {
    & h3 {
      color: #FFF;
    }
  }
`;



interface HireMeBannerProps {}

export const HireMeBanner: React.FC<HireMeBannerProps> = () => (
  <Link href="/contact">
    <Banner href="/contact">
      <span className="bouncer">
        
      </span>
      <div>
        <div className="hire-me-image">
          
        </div>
        <div className="hire-me-text">
          <h3 data-font-weight="Bold">Pssst! Need a illustrator?</h3>
          <p data-font-size="Focus" data-font-weight="500">
            Let&apos;s work together! Tell me about your idea and I&apos;ll help you to make it a reality.
          </p>
        </div>
      </div>
    </Banner>
  </Link>
);
