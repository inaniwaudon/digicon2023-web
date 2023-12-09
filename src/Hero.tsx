import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const initialSize = 600;

const getSize = (ratio: number) => {
  return initialSize + ratio * 2000;
};

const getLeft = (ratio: number) => {
  return 40 - ratio * 2000 * 0.15;
};

const LogoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Logo = styled.div<{ ratio: number }>`
  width: 100%;
  height: 100%;
  -webkit-mask-image: url("/logo.svg");
  -webkit-mask-size: cover;
  mask-image: url("/logo.svg");
  mask-size: ${({ ratio }) => getSize(ratio)}px;
  mask-repeat: no-repeat;
  mask-position: ${({ ratio }) => getLeft(ratio)}px center;
  opacity: ${({ ratio }) => Math.min(1.0 - ratio * 1.5)};

  .content {
    width: 100%;
    height: 100%;
    background: #f00;
  }
`;

const Wrapper = styled.div<{ ratio: number }>`
  width: 100%;
  height: 100vh;
  opacity: ${({ ratio }) => 0.9 - ratio * 0.9};
  filter: blur(${({ ratio }) => ratio * 20}px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Photo = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/theme.webp");
  background-size: cover;
  background-position: top;
`;

const Section = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;

  @media (width < 1100px) {
    filter: drop-shadow(0 0 8px #000);
    justify-content: flex-end;
    bottom: 120px;
    left: 40px;
  }
  @media (1100px <= width) {
    top: 0;
    right: 0;
  }
`;

const Scroll = styled.div`
  text-align: right;
  font-size: 80px;
  font-family: "Oswald", sans-serif;
  font-weight: 200;
  opacity: 0.4;
  transform: rotate(-90deg);
  position: absolute;
  bottom: 140px;
  right: -160px;
  z-index: 2;
`;

const Background = styled.div<{ ratio: number }>`
  width: 100%;
  height: 100vh;
  background: rgba(16, 16, 16, 1);
  opacity: ${({ ratio }) => 1.0 - ratio};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  const ratio = Math.max(scrollY, 0) / window.innerHeight;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);
  return (
    <>
      <LogoWrapper>
        <Logo ratio={ratio}>
          <Photo />
        </Logo>
      </LogoWrapper>
      <Wrapper ratio={ratio}>
        <Section>
          <img
            src="/text.svg"
            alt="ディジタルコンテンツ表現実習 制作展「感動の饗宴」
12/14, 15 13:00–19:00
場所 筑波大学春日エリア 7A202 教室
料金 無料
主催 筑波大学 情報学群 情報メディア創成学類"
            width={Math.min(335, window.innerWidth - 40 * 2)}
          />
        </Section>
      </Wrapper>
      <Scroll>◀ Scroll Down</Scroll>
      <Background ratio={ratio} />
    </>
  );
};

export default Hero;
