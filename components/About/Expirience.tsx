import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";

import AwesomeSlider from "react-awesome-slider";
import { useInView } from "scripts";

const SliderStyles = createGlobalStyle`
  .awssld {
    --slider-height-percentage: 75%;
    --slider-transition-duration: 250ms;
    --loader-bar-color: var(--color-blue-500);

    --control-bullet-color: var(--color-gray-5);
    --control-bullet-active-color: var(--color-gray-8);

    --loader-bar-height: 4px;

    & .awssld__bullets button {
      width: 12px;
      height: 12px;
    }

    & .awssld__bullets .awssld__bullets--active {
      transform: scale(1);
    }
  }
`;

const Wrapper = styled.div`
  gap: 48px;
  display: grid;

  transition: var(--transition-ease), opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  @media (min-width: 800px) {
    grid-template-columns: 4fr 3fr;
    align-items: center;
  }
`;

interface ExpirienceProps {}

export const Expirience: React.FC<ExpirienceProps> = () => {
  const { visible, ref } = useInView();

  return (
    <Wrapper className="block" ref={ref} data-visible={visible}>
      <div>
        <SliderStyles />
        <AwesomeSlider>
          <div data-src="images/about/App4.jpg" data-alt="Customer Review" />
          <div data-src="images/about/App5.jpg" data-alt="Customer Review" />
          <div data-src="images/about/App6.jpg" data-alt="Customer Review" />
        </AwesomeSlider>
      </div>
      <div className="text-block" data-right>
        <h3>Customer Reviews</h3>
        <p>
          Its all looks good on paper but its not enough so here are some reviews that real clients have made after completing work for their businesses.{" "}
        </p>
      </div>
    </Wrapper>
  );
};
