import styled from 'styled-components';

const WrappedH1 = styled.h1`
  white-space: pre;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 50%,
    rgba(72, 249, 202, 1) 51%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeaderWrap = styled.header`
  margin-bottom: ${(props) => props.marginBottom || '40px'};
  max-width: 50ch;
`;

const HeroHeaderWrap = styled.header`
  p {
    margin-bottom: 0;
    white-space: pre-line;
  }
`;

const lineBreaks = (text) => {
  text = text.split('\n');
  // eslint-disable-next-line react/jsx-key
  return text.map((line) => <p>{line.replace('\\n', '')}</p>);
};

export default function SectionHeader({ mainHeader, ...headerProps }) {
  // If mainHeader is true, it's a hero section, use H1
  return mainHeader && mainHeader == true ? (
    <>
      <HeroHeaderWrap>
        <WrappedH1>{headerProps.header}</WrappedH1>
        {lineBreaks(headerProps.subheader)}
      </HeroHeaderWrap>
    </>
  ) : (
    <HeaderWrap marginBottom={headerProps.marginBottom}>
      <h2>{headerProps.header}</h2>
      <p>{headerProps.subheader}</p>
    </HeaderWrap>
  );
}
SectionHeader.defaultProps = {
  mainHeader: null
};
