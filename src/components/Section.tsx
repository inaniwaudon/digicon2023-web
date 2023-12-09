import styled from "@emotion/styled";

const Wrapper = styled.section<{ paddingTop: boolean }>`
  width: 80%;
  margin: auto;
  padding-top: ${({ paddingTop }) => (paddingTop ? "48px" : "0")};
`;

interface SectionProps {
  paddingTop?: boolean;
  children: React.ReactNode;
}

const Section = ({ paddingTop = false, children }: SectionProps) => {
  return <Wrapper paddingTop={paddingTop}>{children}</Wrapper>;
};

export default Section;
