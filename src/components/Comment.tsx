import styled from "@emotion/styled";

const Wrapper = styled.div<{ reverse: boolean }>`
  display: flex;

  @media (width < 900px) {
    flex-direction: column;
    gap: 8px;
  }
  @media (900px <= width) {
    flex-direction: ${({ reverse }) => (reverse ? "row" : "row-reverse")};
    gap: 48px;
  }
`;

const Content = styled.div`
  flex-grow: 1;
`;

const H3 = styled.h3`
  margin: 0;
`;

const Role = styled.div`
  font-size: 16px;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: normal;
  margin-top: 4px;
`;

const Affilication = styled.div`
  font-size: 16px;
  font-weight: normal;
  margin-top: 8px;
  padding-bottom: 16px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
`;

const Paragraph = styled.p`
  line-height: 2;
  text-align: justify;
`;

const PhotoWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #000;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  position: relative;

  @media (width < 900px) {
    width: 100%;
  }
`;

const BackgroundPhoto = styled.div<{ image: string }>`
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  filter: blur(10px) brightness(0.2);
  position: absolute;
  top: -5px;
  left: -5px;
`;

const PhotoContent = styled.div<{ image: string }>`
  width: 250px;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;

  img {
    height: 100%;
  }

  @media (width < 900px) {
    width: 250px;
  }
`;

interface CommentProps {
  role: string;
  name: string;
  affiliation: string;
  photo: string;
  comment: React.ReactNode;
  reverse: boolean;
}

const Comment = ({
  role,
  name,
  affiliation,
  photo,
  comment,
  reverse,
}: CommentProps) => {
  return (
    <Wrapper reverse={reverse}>
      <Content>
        <H3>
          <Role>{role}</Role>
          <Name>{name}</Name>
          <Affilication>{affiliation}</Affilication>
        </H3>
        <Paragraph>{comment}</Paragraph>
      </Content>
      <PhotoWrapper>
        <BackgroundPhoto image={photo} />
        <PhotoContent image={photo} />
      </PhotoWrapper>
    </Wrapper>
  );
};

export default Comment;
