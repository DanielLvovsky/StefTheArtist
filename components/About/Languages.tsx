import * as React from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "scripts";

const greetings = ["Hello!", "Hola!", "Привет!"];

const oneAnimationDuration = 3;
const animationDuration = oneAnimationDuration * greetings.length;

const Container = styled.div`
  display: grid;
  gap: 48px;

  transition: opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  @media (min-width: 1020px) {
    grid-template-columns: 4fr 3fr;
    gap: 48px;

    & .text-block {
      margin-bottom: 0;
    }
  }
`;

interface LanguagesProps {}

export const Languages: React.FC<LanguagesProps> = () => {
  const { visible, ref } = useInView();

  return (
    <Container className="block" ref={ref} data-visible={visible}>   
    </Container>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & > h4 {
    color: var(--color-text-main);
    align-items: center;
    display: grid;
    justify-content: left;
    user-select: none;
    text-align: center;
    margin: 2em auto;
  }
`;

const textFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  ${(oneAnimationDuration / animationDuration) * 25}% {
    opacity: 1;
    transform: translateY(0);
  }
  ${(oneAnimationDuration / animationDuration) * 100}% {
    opacity: 1;
    transform: translateY(0);
  }

  ${(oneAnimationDuration / animationDuration) * 125}% {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 0;
  }
`;

interface FadingTitleProps {
  delay: number;
}
const FadingTitle = styled.span<FadingTitleProps>`
  animation: ${textFade} ${animationDuration}s ease-in-out 0s infinite;
  animation-fill-mode: both;
  display: block;
  text-align: center;
  animation-delay: ${({ delay = 0 }) => delay}s;

  grid-column: 1;
  grid-row: 1;

  font-size: 60px;

  @media (max-width: 1440px) {
    font-size: 4.5vw;
  }
  @media (max-width: 1020px) {
    font-size: 6.5vw;
  }
  @media (max-width: 640px) {
    font-size: 32px;
  }
  @media (max-width: 340px) {
    font-size: 24px;
  }
`;
