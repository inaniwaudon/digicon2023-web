import styled from "@emotion/styled";
import { Work } from "./const/works";

const Wrapper = styled.div`
  padding: 48px 0;
  display: flex;
  justify-content: space-between;
  gap: 64px;

  @media (width < 700px) {
    padding: 24px 0;
    flex-direction: column;
    gap: 32px;
  }
`;

const Description = styled.div`
  line-height: 2;
`;

const Gallery = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  @media (width < 700px) {
    width: 100%;
  }
`;

const CloseButton = styled.a`
  cursor: pointer;
  position: fixed;
  top: 40px;
  right: 48px;
`;

interface WorkModalProps {
  work?: Work;
  close: () => void;
}

export const WorkModal = ({ work, close }: WorkModalProps) => {
  if (!work) {
    return <></>;
  }

  return (
    <Wrapper>
      <div>
        <h2>{work.title}</h2>
        <p>{work.author}</p>
        <Description>
          {work.description.split("\n").map((line) => (
            <>
              {line}
              <br />
            </>
          ))}
        </Description>
      </div>
      <Gallery>
        {work.arts ? (
          work.arts.map((art) => {
            const path = `/works/${art}`;
            return art.endsWith(".mp4") ? (
              <video src={path} controls />
            ) : (
              <img src={path} />
            );
          })
        ) : (
          <img src={`/works/thumbnail/${work.thumbnail}`} />
        )}
      </Gallery>
      <CloseButton onClick={close}>
        <img src="/close.svg" alt="×" width={40} height={40} />
      </CloseButton>
    </Wrapper>
  );
};
