import * as React from "react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import { FiInstagram, FiMail } from "react-icons/fi";


import styled from "styled-components";
import { Email, SiteFooter, SiteHeader } from "components";
import { useInView } from "scripts";

const Link = styled.a`
  align-items: center;
  background-color: var(--color-gray-1);
  border-radius: 12px;
  box-shadow: var(--shadow);
  color: var(--color-text-white) !important;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 21px;
  font-family: Montserrat, var(--sans-family);
  font-weight: 500;
  font-variation-settings: "wght" 500;
  margin: auto;
  height: 240px;
  overflow: hidden;
  padding: 1em;
  position: relative;
  text-align: center;
  transition: all 0.2s ease-out;

  width: 100%;

  & > svg {
    --size: 100px;
    width: var(--size);
    height: var(--size);
    margin-bottom: 20px;
  }

  @media (max-width: 640px) {
    & > svg {
      --size: 80px;
    }
  }

  &:hover,
  &:focus {
    box-shadow: var(--shadow-hover);
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const ContactPage: NextPage = () => {
  const { ref, visible } = useInView({ rootMargin: "0px" });

  return (
    <>
      <NextSeo
        title="StefTheArtist - Contact me"
        description="My email and contact information."
        canonical="https://steftheartist.com/contact"
        openGraph={{
          url: "https://steftheartist.com/contact",
          title: "StefTheArtist - Contact me",
          description: "My email and contact information.",
        }}
      />
      <SiteHeader />
      <Main>
        <div>
          <Cards data-fix-width ref={ref} data-visible={visible}>
            <h2 className="montserrat">Let&apos;s talk! </h2>
            <p>
            Let's work together! I'm always happy to provide you my professional help for your business.
            </p>
            <div className="cards">
              <Link
                href="https://www.instagram.com/stef_the.artist/"
                target="_blank"
                rel="noopener noreferrer"
                className="telegram"
              >
                <FiInstagram size={24} />
                <div>Reach me on Instagram</div>
              </Link>
              <Link
                href="mailto:stefanielvovsky@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="email"
              >
                <FiMail size={24} />
                <div>Email for customers</div>
              </Link>
            </div>
          </Cards>
          <Email data-fix-width />
        </div>
      </Main>
      <SiteFooter />
    </>
  );
};

const Main = styled.main`
  margin-top: 1.25em;
  margin-bottom: 1.25em;
`;

const Cards = styled.div`
  min-height: 50vh;
  padding: 10vh 0;
  text-align: center;

  transition: opacity 1.5s ease-out;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  & > p {
    margin: 24px auto 48px;
    max-width: 500px;
    line-height: 1.4;
    font-size: 19px;
  }

  & > .cards {
    align-items: center;
    display: grid;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    margin-left: auto;
    margin-right: auto;
    max-width: 920px;

    @media (max-width: 420px) {
      grid-template-columns: 1fr;
    }

    & .telegram {
      background-color: var(--color-pink-400);
    }

    & .email {
      background-color: var(--color-purple-200);
    }
  }
`;

export default ContactPage;
