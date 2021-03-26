import * as React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";

import { Image } from "components";
import { useInView } from "scripts";

interface DegreeProps {}

export const Degree: React.FC<DegreeProps> = () => {
  const mobile = useMediaQuery("(max-width: 1020px)");
  const { visible, ref } = useInView();

  return (
    <Wrapper className="block" ref={ref} data-visible={visible}>
      <div className="text-block" data-right>
        <p>
          
        </p>
      </div>
      
      
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

const Aside = styled.div`
  text-align: right;
  margin: 1em;
`;
