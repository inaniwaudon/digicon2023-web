import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

import Comment from "./components/Comment";
import Headline from "./components/Headline";
import Section from "./components/Section";

import About from "./About";
import Hero from "./Hero";
import WorkList from "./WorkList";
import { Footer } from "./Footer";

const globalStyle = css`
  html {
    scroll-behavior: smooth;
  }

  body {
    color: #fff;
    font-family: "Noto Sans JP", sans-serif;
    margin: 0;
    background: linear-gradient(rgb(16, 16, 16), rgb(24, 24, 24));
    overflow-x: hidden;
  }

  .ReactModal__Overlay {
    opacity: 0;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;

const Content = styled.div`
  background: linear-gradient(rgba(16, 16, 16, 0.92), rgba(6, 17, 36, 0.92));
  backdrop-filter: blur(24px);
  position: relative;
  z-index: 3;

  @media (width < 700px) {
    margin-top: 40px;
  }
  @media (700px <= width) {
    margin-top: 200vh;
  }
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Crediets = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
`;

const App = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Hero />
      <About />
      <Content>
        <Section paddingTop={true}>
          <Headline>Works</Headline>
          <WorkList />
        </Section>
        <Section paddingTop={true}>
          <Headline>Comment</Headline>
          <CommentWrapper>
            <Comment
              role="指導教員"
              name="落合陽一"
              affiliation="筑波大学 図書館情報メディア系 准教授"
              photo="/teacher.jpeg"
              comment={<p></p>}
              reverse={true}
            />
            <Comment
              role="プロデューサ"
              name="松田一郎"
              affiliation="情報メディア創成学類 3年"
              photo="/producer.webp"
              comment={
                <p>
                  本制作展のタイトルに用いられている「饗宴」という言葉。この言葉は
                  ”共に（con）” + “生きる（vivium）“の二つからなる、ラテン語
                  “convivium” を訳したものです。
                  convivumとは、飲み食いを共にする人々が楽しみや喜びを共有する宴のこと。この制作展でも、まさしく
                  convivium
                  のように制作者と鑑賞者が共に集い、作品を介して感動を分かち合えればと思います。
                  我々の展示や制作物を通して「感動する」ことを嗜み、その心地よさを共有していただければ幸いです。会場にて、共に感動を味いましょう。
                </p>
              }
              reverse={true}
            />
          </CommentWrapper>
        </Section>
        <Section paddingTop={true}>
          <Headline>Credit</Headline>
          <Crediets>
            <div>プロデューサ ／ 松田一郎</div>
            <div>イラスト ／ 濱田丈偉</div>
            <div>タイポグラフィ ／ 佐藤陽亮</div>
            <div>ポスターデザイン ／ 夏馨</div>
            <div>Webサイト ／ 和田優斗</div>
          </Crediets>
        </Section>
        <Footer />
      </Content>
    </>
  );
};

export default App;
