import styled from "@emotion/styled";

const H3 = styled.h2<{ shadow: boolean }>`
  font-size: 40px;
  font-weight: 400;
  text-shadow: ${({ shadow }) =>
    shadow ? "0 2px 8px #000, 0 0px 20px #000" : "unset"};
  font-family: "Oswald", sans-serif;
  margin: 0 0 16px 0;
`;

interface HeadlineProps {
  shadow?: boolean;
  children: string;
}

const Headline = ({ shadow = true, children }: HeadlineProps) => {
  return <H3 shadow={shadow}>{children}</H3>;
};

export default Headline;
