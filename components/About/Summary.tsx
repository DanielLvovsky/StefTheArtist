import * as React from "react";
import styled from "styled-components";
import { useInView } from "scripts";

const Container = styled.div`
  max-width: 520px;
  margin: auto;

  transition: opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }
`;

interface SummaryProps {}

export const Summary: React.FC<SummaryProps> = () => {
  const { visible, ref } = useInView();

  return (
    <Container className="block" ref={ref} data-visible={visible}>
      <div className="text-block">

      </div>
    </Container>
  );
};
