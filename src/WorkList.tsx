import styled from "@emotion/styled";
import { useState } from "react";
import Modal from "react-modal";
import { Work, works } from "./const/works";
import { shuffle } from "./utils";
import { WorkModal } from "./WorkModal";

const padding = 32;

const Ulist = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${padding}px;
`;

const ListItem = styled.li<{ background: string }>`
  aspect-ratio: 1;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  background: url(${({ background }) => background});
  background-size: cover;
  overflow: hidden;
  transition: box-shadow 0.3s ease-out, transform 0.3s ease;

  &:hover {
    transform: scale(0.95);
    box-shadow: 0 2px 32px rgba(255, 255, 255, 0.2);
  }

  @media (width < 450px) {
    width: 100%;
  }
  @media (450px <= width < 900px) {
    width: calc((100% - ${padding}px) / 2);
  }
  @media (900px <= width) {
    width: calc((100% - ${padding}px * 2) / 3);
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ListItem.name}:hover {
    opacity: 1;
  }
`;

const Title = styled.h3`
  line-height: 1.2;
  margin: 0;
`;

const Author = styled.p`
  margin: 8px 0 0 0;
`;

const WorkList = () => {
  const [shuffledWorks] = useState(shuffle(works));
  const [selectedWork, setSelectedWork] = useState<Work>();

  const close = () => {
    setSelectedWork(undefined);
  };

  const isMobile = window.innerWidth < 700;

  return (
    <>
      <Ulist>
        {shuffledWorks.map((work) => (
          <ListItem
            background={`/works/thumbnail/${work.thumbnail}`}
            onClick={() => setSelectedWork(work)}
          >
            <Content>
              <Title>{work.title}</Title>
              <Author>{work.author}</Author>
            </Content>
          </ListItem>
        ))}
      </Ulist>
      <Modal
        isOpen={Boolean(selectedWork)}
        onRequestClose={close}
        contentLabel="Example Modal"
        closeTimeoutMS={400}
        style={{
          overlay: {
            zIndex: 100,
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(20px)",
            transition: "opacity 400ms ease, backdrop-filter 400ms ease",
          },
          content: {
            inset: isMobile ? "0 32px" : "0 150px",
            border: "none",
            background: "none",
          },
        }}
      >
        <WorkModal work={selectedWork} close={close} />
      </Modal>
    </>
  );
};

export default WorkList;
