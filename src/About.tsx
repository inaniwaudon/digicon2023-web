import styled from "@emotion/styled";
import Headline from "./components/Headline";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;

  @media (width < 700px) {
    height: auto;
    margin-top: 100vh;
    flex-direction: column;
    align-items: center;
  }
  @media (700px <= width) {
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 0;
  }
`;

const Description = styled.section`
  height: 100vh;
  line-height: 2;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (width < 700px) {
    width: 80%;
    height: auto;
    position: relative;
    z-index: 1;
  }
  @media (700px <= width < 1100px) {
    width: 50%;
    padding: 0 32px;
  }
  @media (1100px < width) {
    width: 40%;
  }
`;

const Photo = styled.div`
  background-image: url("/theme.webp");
  background-size: cover;
  background-position: top;

  @media (width < 700px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 0;
  }
  @media (700px <= width) {
    width: 50%;
    height: 100%;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <Photo />
      <Description>
        <Headline shadow={false}>About</Headline>
        <p>
          計算機科学分野の日進月歩の発達、
          <br />
          人間が追いつけないほどの速度で登場する技術と知識、
          <br />
          もはや感動せずにはやってられない世界、、
        </p>
        <p>
          "誰が作った" や、"どこが新しいか" はどうでもいい。
          <br />
          大事なのは、感動し共感できるかどうか。
        </p>
        <p>
          ディジタルコンテンツ表現演習制作「感動の饗宴」
          <br />
          本展示では、作品の制作や鑑賞を通じて、
          <br />
          生成AI時代以降の「感動し、それを共有する」ことの
          <br />
          重要性を問いかける。
        </p>
      </Description>
    </Wrapper>
  );
};

export default About;
