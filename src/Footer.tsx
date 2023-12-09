import styled from "@emotion/styled";

const Wrapper = styled.footer`
  margin-top: 80px;
  padding: 16px 0 48px 0;
  background: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  width: 80%;
  line-height: 2;
  margin: auto;

  a {
    color: rgba(255, 255, 255, 0.8);
    text-underline-offset: 2px;
    text-decoration-color: rgba(255, 255, 255, 0.2);
  }
`;

const PastLinks = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 0 16px;
`;

const Slash = styled.span`
  color: rgba(255, 255, 255, 0.4);
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <p>
          情報メディア創成学類 ディジタルコンテンツ表現実習
          <PastLinks>
            <a href="#">Page Top</a>
            <Slash>／</Slash>
            <a href="https://yofukashi-ten.github.io/dcx16/">2016</a>
            <Slash>／</Slash>
            <a href="https://digitalcontents2017.github.io/">2017</a>
            <Slash>／</Slash>
            <a href="/2020">2020</a>
            <Slash>／</Slash>
            <a href="/2021">2021</a>
            <Slash>／</Slash>
            <a href="/2022">2021</a>
          </PastLinks>
        </p>
      </Content>
    </Wrapper>
  );
};
