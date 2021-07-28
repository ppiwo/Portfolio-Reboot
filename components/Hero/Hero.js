import Image from 'next/image';
import ListIconButtons from 'components/ListIconButtons';
import PropTypes from 'prop-types';
import SectionHeader from 'components/SectionHeader';
import { gql } from '@apollo/client';
import styled from 'styled-components';
import useHeight from 'hooks/useHeight';

const Section = styled.section`
  height: ${(props) => props.height || 0}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  @media (min-width: 992px) and (max-width: 1199.98px) {
    justify-content: flex-end;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 40vw; // Aspect ratio
  max-height: 315px;
  position: relative;
  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: 80%;
    margin-left: auto;
  }
`;

export default function Hero({ hero: { Header, Subheader, button, heroImg } }) {
  const getHeight = useHeight();
  return (
    <Section height={getHeight}>
      <HeaderWrap>
        <SectionHeader header={Header} subheader={Subheader} mainHeader />
        <ListIconButtons icons={button} priority />
      </HeaderWrap>

      <ImgWrap>
        <Image
          src={heroImg.url}
          alt={heroImg.alternativeText}
          layout='fill'
          priority
          objectPosition='bottom'
        />
      </ImgWrap>
    </Section>
  );
}

Hero.PropTypes = {
  hero: PropTypes.object.isRequired,
  Header: PropTypes.string.isRequired,
  Subheader: PropTypes.string.isRequired,
  button: PropTypes.object.isRequired,
  heroImg: PropTypes.string.isRequired
};

export const QUERY_HERO = gql`
  query ($heroesLimit: Int!) {
    heroes(limit: $heroesLimit) {
      Header
      Subheader
      heroImg {
        url
        alternativeText
      }
      button {
        id
        link
        label
        logo {
          url
          alternativeText
        }
      }
    }
  }
`;
