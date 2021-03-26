import * as React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";

import { Image } from "components";
import { useInView } from "scripts";

const Block = styled.div`
  transition: opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  margin-right: auto;
  max-width: min(88%, 1200px);
  @media (max-width: 800px) {
    padding: 0 4vw;
  }
`;

interface StartProps {}

export const Start: React.FC<StartProps> = () => {
  const mobile = useMediaQuery("(max-width: 1020px)");
  const { visible, ref } = useInView();

  return (
    <Block className="block" ref={ref} data-visible={visible}>
      
      <Wrapper>
      </Wrapper>
    </Block>
  );
};
