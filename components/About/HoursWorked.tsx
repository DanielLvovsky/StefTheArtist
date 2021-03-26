import * as React from "react";
import styled from "styled-components";
import { useCountUp } from "react-countup";
import Link from "next/link";
import { useInView } from "scripts";

const Wrapper = styled.div`
  margin-top: 12vw;
  transition: opacity 1s ease;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }

  & > div.text-block {
    max-width: 100%;
    width: 660px;
    margin: auto;
    text-align: right;

    & .hours {
      font-size: clamp(24px, 10vw, 92px);
      & .hours-number {
        font-size: clamp(24px, 12vw, 100px);
      }
    }
    & p {
      margin-top: 0.5em;
      margin-left: auto;

      & > span {
        white-space: nowrap;
      }
    }
  }
`;

interface HoursWorkedProps {
  hours?: number;
}

export const HoursWorked: React.FC<HoursWorkedProps> = ({
  hours = Number(process.env.HOURS_WORKED),
}) => {
  const { visible, ref } = useInView({ rootMargin: "-240px 0px" });
  const { countUp, start, reset } = useCountUp({
    start: 0,
    end: hours,
    duration: Math.min((hours / 1000) * 1.1, 4000),
    startOnMount: false,
  });

  React.useEffect(() => {
    reset();
  }, [hours]);

  React.useEffect(() => {
    if (visible) {
      start();
    }
  }, [visible]);

  return (
    <Wrapper className="block" ref={ref} data-visible={visible}>
      
    </Wrapper>
  );
};
