import styled from 'styled-components';

const WrappedH1 = styled.h1`
  margin-top: 0;
  white-space: pre;
  color: rgba(72, 249, 202, 1);
  span {
    color: white;
  }
`;

const HeaderWrap = styled.header`
  margin-bottom: ${(props) => props.marginBottom || '55px'};
  max-width: 50ch;
  h2 {
    max-width: 16ch;
    margin-bottom: 20px;
    margin-left: ${(props) => (props.center ? `auto` : 0)};
    margin-right: ${(props) => (props.center ? `auto` : 0)};
  }
`;

const HeroHeaderWrap = styled.header`
  margin-bottom: 15px;
  p {
    margin-bottom: 0;
    white-space: pre-line;
    padding-right: 10px;
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
        <WrappedH1>
          <span>Hi, I'm</span>
          <br />
          {headerProps.header}
        </WrappedH1>
        {lineBreaks(headerProps.subheader)}
      </HeroHeaderWrap>
    </>
  ) : (
    <HeaderWrap
      marginBottom={headerProps.marginBottom}
      center={headerProps.center}
    >
      <h2>{headerProps.header}</h2>
      <p>{headerProps.subheader}</p>
    </HeaderWrap>
  );
}
SectionHeader.defaultProps = {
  mainHeader: null
};
