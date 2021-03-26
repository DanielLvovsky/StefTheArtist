import * as React from "react";
import styled from "styled-components";

import { FooterLink } from "components/SiteFooter";

const Wrapper = styled.div`
  align-items: center;
  display: grid;

  margin-top: 80px;

  color: var(--color-text-secondary);
  
  a {
    color: #fff;
    text-decoration: none;
    }

  a:hover 
    {
     color:#fff; 
     text-decoration:none; 
     cursor:pointer;  
    } 

  & > .links {
    align-items: center;
    display: flex;
    justify-content: left;

    & > li {
      &:not(:last-child) {
        margin-right: 48px;
      }
    }
  }

  & > .madeWith {
    & .year {
      white-space: nowrap;
    }
  }
  @media (min-width: 1020px) {
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }
  @media (max-width: 1019px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 48px;

    & > .links {
      grid-row-start: 1;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 339px) {
    & > .links {
      flex-direction: column;
      align-items: baseline;

      & > li {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
`;
interface BottomProps {}

export const Bottom: React.FC<BottomProps> = () => {
  const date = new Date();

  return (
    <Wrapper className="bottom" data-font-size="Focus">
      <div className="madeWith">
        Coded with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by <a href="https://daniellvovsky.com" target="_blank" rel="noopener noreferrer">Daniel Lvovsky</a> © <span className="year">{date.getFullYear()}</span>
      </div>
      
    </Wrapper>
  );
};
