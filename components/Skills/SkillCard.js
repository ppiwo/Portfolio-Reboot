import Image from 'next/image';
import styled from 'styled-components';

const CardWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 10px;
    min-width: 130px;
    color: black;
    background: #d0d0d0;
    max-height: 40px;
    span {
        font-weight: 500;
        font-size: 14px;
        margin-left: 10px;
    }
    @media (min-width: 992px) {
        flex-direction: column;
        background: transparent;
        justify-content: center;
        margin: 0;
        min-width: unset;
        max-height: unset;
        span {
            margin-left: 0;
            font-size: 12px;
            text-align: center;
            margin: 0 5px;
        }
    }
`;

const ShapeParent = styled.div`
  position: relative;
  margin: 6px 6px 0 0;
  @media (min-width: 992px) {
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ImgWrap = styled.div`
  width: 20px;
  @media (min-width: 992px) {
      width: 27px;
    }
  @media (min-width: 1200px) {
    width: 40px;
  }
`;

export default function SkillCard({ skill }) {
  return (
    <ShapeParent>
      <Image
        alt={skill.logo.alternativeText}
        src='/../public/skill_hex.svg'
        layout='fill'
      />
      <CardWrap>
        <ImgWrap>
          <Image
            src={skill.logo.url}
            alt={skill.logo.alternativeText}
            height='100'
            width='100'
            layout='responsive'
          />
        </ImgWrap>
        <span>{skill.text}</span>
      </CardWrap>
    </ShapeParent>
  );
}
