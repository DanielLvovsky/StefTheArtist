import * as React from "react";
import styled from "styled-components";

import Link from "next/link";

import { Button, Image } from "components";
import { calculateYearSince, useInView } from "scripts";

const Block = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  max-width: 1440px;

  transition: opacity 1.5s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  @media (min-width: 1020px) {
    & > .imageWrapper {
      margin-left: 10vw;
    }
  }
  @media (max-width: 1019px) {
    flex-direction: column-reverse;

    & > .imageWrapper {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 6vw;

      padding: 5vw;
    }
  }

  & > .text-block {
    margin-right: 0 !important;
    max-width: 1000px;
    width: fit-content;

    & > h1 {
      white-space: nowrap;
      margin-bottom: 0.6em;

      @media (min-width: 1021px) and (max-width: 1440px) {
        font-size: 4.5vw;
      }

      @media (min-width: 800px) and (max-width: 1020px) {
        font-size: 6.5vw;
      }
    }
    & > h2 {
      margin-bottom: 1.15em;
      max-width: 14em;
    }
    & > p {
      max-width: 600px;
    }

    & > .aside {
      margin: 1.5em 0 2em;
      max-width: 360px;
    }

    & button {
      margin-top: 1.5em;
      background-color: var(--color-gray-9);
    }
  }

  & > .imageWrapper {
    max-width: 420px;
    width: 100%;
    height: 100%;
  }
`;

interface IntroProps {}

export const Intro: React.FC<IntroProps> = () => {
  const { visible, ref } = useInView({ rootMargin: "0px" });

  return (
    <Block className="block" ref={ref} data-visible={visible}>
      <div className="text-block">
        <h1 className="montserrat">Stefanie Lvovsky</h1>
        <h2 data-font-size="XL">Illustrator</h2>
        <p>
          Hey! I am an illustrator based in Seattle. I started digital art in 2020 thinking it was just a hobby, but it turned to a passion of mine. My style is a variety of fun, bright colors to make my portraits stand out.   
          I focus on creating artwork that my viewers and I feel connected with.
        </p>
        <p className="aside">
          Let&apos;s work together! I&apos;m always happy to provide you my professional help for your business.
        </p>
        <Link href="/contact">
          <Button>Contact Me</Button>
        </Link>
      </div>
      
      <div className="imageWrapper">
        <Image src="about/me.jpg" alt="Me" width={575} height={690} bgColor="#1A1A1A" priority/>
      </div>

      
      
    </Block>
  );
};
 
