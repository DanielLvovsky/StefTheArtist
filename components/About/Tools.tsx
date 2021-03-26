import * as React from "react";
import styled from "styled-components";

import { useInView } from "scripts";
import { Tool } from "./Tool";

const Wrapper = styled.div`
  margin: 10vw 0;

  transition: opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }
`;

const Text = styled.div`
  text-align: center;
  margin-bottom: 2em;

  & > .text-block {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0em;
    & > h4 {
      margin-bottom: 0.75em;
    }

    & > p {
      max-width: 500px;
      margin: auto;
      line-height: 1.5;
    }

    @media (max-width: 1020px) {
      text-align: left;
    }
  }
`;

const Container = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  padding-bottom: 15px;
  -webkit-overflow-scrolling: touch;

  & > div {
    padding: 0 5%;
    width: max-content;
    margin: auto;
  }
`;

const Grid = styled.ul`
  background-color: var(--color-gray-1);
  background-color: #f8f8fa;
  border-radius: 64px;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  gap: 80px;
  width: max-content;
  margin: auto;
  padding: 32px 48px;

  @media (max-width: 1020px) {
    gap: 64px;
  }
`;

interface ToolsProps {}

export const Tools: React.FC<ToolsProps> = () => {
  const { ref, visible } = useInView();

  return (
    <Wrapper ref={ref} data-visible={visible}>
      <Text data-fix-width>
        <div className="text-block">
          <h4 data-font-size="XL" className="montserrat">
            Software in use
          </h4>
          <p data-font-size="Focus">
            Here are the tools I use when making illustrations and other artwork.
          </p>
        </div>
      </Text>

      <Container>
        <div>
          <Grid>
            <Tool src="images/about/tools/AFDesigner.svg" alt="Designer" title="Affinity Designer" />
            <Tool src="images/about/tools/AFPhoto.svg" alt="Photo" title="Affinity Photo" />
            <Tool src="images/about/tools/Blender.svg" alt="Blender" title="Blender" />
          </Grid>
        </div>
      </Container>
    </Wrapper>
  );
};
