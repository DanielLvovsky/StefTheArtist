import * as React from "react";
import styled from "styled-components";

import { realisticConfetti } from "scripts";

const Wrapper = styled.li`
  display: inline-block;
  margin: 20px;

  & > img {
    --size: 100%;
    border-radius: 4px;
    cursor: pointer;

    transition: var(--transition-ease);
    width: var(--size);
    height: var(--size);
    user-select: none;
    overflow: hidden;

    &[data-highlighted="false"],
    &:not(:hover) {
      filter: grayscale(0%);
      opacity: 1.0;
    }

    &[data-highlighted="true"] {
      filter: none;
      opacity: 1;
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

interface TechnologieProps {
  src: string;
  big?: boolean;
}
export const Technologie: React.FC<TechnologieProps> = ({ src }) => {
  const [highlighted, setHighlighted] = React.useState(false);

  const toggle = async () => {
    await setHighlighted(!highlighted);

    if (
      document?.getElementById("technologies-catalog")?.getElementsByClassName("gray")?.length === 0
    ) {
      realisticConfetti();
    }
  };

  return (
    <Wrapper onClick={toggle} className={`technologie ${highlighted ? "highlighted" : "gray"}`}>
      <img
        src={`images/about/${src}.jpg`}
        draggable="false"
        aria-label={src}
        data-highlighted={highlighted}
      />
    </Wrapper>
  );
};
