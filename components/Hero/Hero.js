import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import ListIconButtons from 'components/ListIconButtons';
import PropTypes from 'prop-types';
import SectionHeader from 'components/SectionHeader';
import { gql } from '@apollo/client';
import useHeight from 'hooks/useHeight';

const Section = styled.section`
  height: ${(props) => props.height || 812}px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  transform: translateY(35vh);
  @media (min-width: 992px) {
    padding-bottom: 50px;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 40vw; // Aspect ratio
  max-height: 315px;
  position: absolute;
  bottom: 0;
  @media (min-width: 992px) {
    width: 37vw;
    margin-left: auto;
    height: 22vw;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

const SlideIn = styled.div`
  animation: ${slideIn} 0.86s ease-in;
`;

const slideLeft = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SlideLeft = styled.div`
  opacity: 0;
  animation: ${slideLeft} 0.86s ease-in-out 0.86s forwards;
`;

const ImgContain = styled.div``;

export default function Hero({ hero: { Header, Subheader, button, heroImg } }) {
  const getHeight = useHeight();
  return (
    <Section height={getHeight}>
      <SlideIn>
        <HeaderWrap>
          <SectionHeader header={Header} subheader={Subheader} mainHeader />
          <ListIconButtons icons={button} priority />
        </HeaderWrap>
      </SlideIn>
      <SlideLeft>
        <ImgContain>
          <ImgWrap>
            <Image
              src={heroImg.url}
              alt={heroImg.alternativeText}
              layout='fill'
              priority
              objectPosition='bottom'
            />
          </ImgWrap>
        </ImgContain>
      </SlideLeft>
    </Section>
  );
}

Hero.propTypes = {
  hero: PropTypes.object.isRequired
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
