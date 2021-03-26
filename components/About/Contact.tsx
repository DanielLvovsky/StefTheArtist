import * as React from "react";
import styled from "styled-components";

import Link from "next/link";

import { Button } from "components";
import { useInView } from "scripts";
import { BubblesBackground } from "../BubblesBackground";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  const { visible, ref } = useInView();

  return (
    <Wrapper className="block" ref={ref} data-visible={visible}>
      <Container>
        <BubblesBackground />

        <div className="block-content">
          <h4 data-font-size="Large" className="montserrat">
            Let&apos;s talk!
          </h4>
          <div>
          Let's work together! I'm always happy to provide you my professional help for your business.
          </div>
        </div>
        <Link href="/contact">
          <Button>Contact Me</Button>
        </Link>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transition: opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 920px;
  border-radius: 24px;

  background: linear-gradient(108.43deg, #ff90c6 0%, #c2b1ff 100%);
  color: white;

  padding: 2em clamp(2em, 5vw, 4em);
  margin: auto;
  min-height: 240px;

  align-items: center;
  display: flex;
  justify-content: space-between;

  position: relative;
  overflow: hidden;

  & > div.block-content {
    text-align: left;
    z-index: 1;
    padding-right: clamp(20px, 5vw, 40px);
    & > h4 {
      margin-bottom: 0.4em;
    }
    & > div {
      font-weight: 400;
      font-size: 19px;
      line-height: 1.5;
      max-width: 450px;
    }
  }
  & > button {
    background-color: #FF74C4;
    color: #fff;
    border-radius: 12px;
    font-size: clamp(20px, 5vw, 22px);
    padding: 0.6em 1.25em;
    z-index: 1;
    white-space: nowrap;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    & > div.block-content {
      text-align: center;
      padding-right: 0;
    }
    & > button {
      margin-top: 1.25em;
    }
  }
`;
