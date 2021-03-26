import * as React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";

import { ButtonText, Card } from "components";
import { Tag, projects } from "components/projects";
import { useInView } from "scripts";

const Wrapper = styled.div`
  transition: opacity 1.5s ease-out;

  &[data-visible="false"] {
    transform: translateY(12px);
    opacity: 0;
  }
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e9;
  height: 80px;

  & > h2 {
    white-space: nowrap;
  }
  & > ul {
    align-items: center;
    display: flex;
  }
  & button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    font-variation-settings: "wght" 500;

    --base-color: var(--color-button-gray);
    --text-color: var(--color-text-main);

    @media (min-width: 801px) {
      &[data-selected="true"] {
        background-color: rgba(var(--base-color), 0.2);
      }

      &:not(:last-child) {
        margin-right: 20px;
      }
    }

    @media (max-width: 800px) {
      &:not([data-selected="true"]) {
        display: none;
      }
    }
  }
`;

const Grid = styled.ul`
  display: grid;

  margin: 48px auto;
  gap: clamp(24px, 5vw, 48px);
  overflow: hidden;

  @media (min-width: 940px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media (max-width: 939px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  & > li {
    overflow: hidden;
  }
`;

interface CatalogProps {}

export const CardsCatalog: React.FC<CatalogProps> = () => {
  const [mode, setMode] = React.useState<Tag>(undefined);
  const isMobile = useMediaQuery("(max-width: 800px)");
  const { visible, ref } = useInView();

  return (
    <Wrapper data-fix-width id="projects" ref={ref} data-visible={visible || isMobile}>
      <Header>
        <h2 className="montserrat" data-font-size="XL">
          My Portfolio
        </h2>
        <ul>
          <li>
            <ButtonText
              onClick={() => setMode(isMobile ? "Client Project" : undefined)}
              data-selected={mode === undefined}
            >
              <span>All {projects.length}</span>
            </ButtonText>
          </li>
          <li>
            <ButtonText
              onClick={() => setMode(isMobile ? "Illustrations" : "Illustrations")}
              data-selected={mode === "Illustrations"}
            >
              <span>
                Illustrations {projects.filter((project) => project.tags.includes("Illustrations")).length}
              </span>
            </ButtonText>
          </li>
          <li>
            <ButtonText
              onClick={() => setMode(isMobile ? "Client Project" : "Client Project")}
              data-selected={mode === "Client Project"}
            >
              <span>
                Client Projects {projects.filter((project) => project.tags.includes("Client Project")).length}
              </span>
            </ButtonText>
          </li>
          <li>
          </li>
          <li>
            
          </li>
        </ul>
      </Header>
      <Grid>
        {projects.map((project, index) => (
          <li key={project.title}>
            <Card
              {...project}
              disabled={mode && !project.tags.includes(mode)}
              priority={index < 4}
            />
          </li>
        ))}
      </Grid>
    </Wrapper>
  );
};
