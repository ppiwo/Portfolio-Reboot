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
  margin-bottom: ${(props) => props.marginBottom || '35px'};
  h2 {
    max-width: 18ch;
    margin-bottom: 20px;
    margin-left: ${(props) => (props.center ? `auto` : 0)};
    margin-right: ${(props) => (props.center ? `auto` : 0)};
  }
  @media (min-width: 992px) {
    max-width: unset;
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
  if (!text) return;
  text = text.split('\\n');
  // eslint-disable-next-line react/jsx-key
  return text.map((line) => <p key={line}>{line.replace('\\n', '')}</p>);
};

/**
 * Conditional rendering
 * @param {String} textContent
 * @returns {Object | Boolean}
 */
const renderTextContent = (textContent) => {
  if (!textContent) return null;
  else return <p>{textContent}</p>;
};

export default function SectionHeader({ mainHeader, ...headerProps }) {
  // If mainHeader is true, it's a hero section, use H1
  return mainHeader && mainHeader == true ? (
    <>
      <HeroHeaderWrap>
        <WrappedH1>
          <span>{headerProps.greeting}</span>
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
      {renderTextContent(headerProps.subheader)}
    </HeaderWrap>
  );
}
SectionHeader.defaultProps = {
  mainHeader: null
};
