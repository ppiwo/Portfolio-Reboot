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
    margin: auto;
    padding: 36px 13px;
    span {
      margin-left: 0;
      text-align: center;
      white-space: normal;
      font-size: 14px;
    }
  }
`;

const ShapeParent = styled.div`
  position: relative;
  margin: 24px 6px;
  @media (min-width: 992px) {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0;
  }
`;

const ImgWrap = styled.div`
  width: 20px;
  height: auto;
  @media (min-width: 992px) {
    width: 100%;
    max-width: 40px;
  }
`;

export default function SkillCard({ skill }) {
  return (
    <ShapeParent>
      <Image
        alt={skill.Logo.alternativeText}
        src='/../public/skill_hex.svg'
        layout='fill'
      />
      <CardWrap>
        <ImgWrap>
          <Image
            src={skill.Logo.url}
            alt={skill.Logo.alternativeText}
            height='100'
            width='100'
            layout='responsive'
          />
        </ImgWrap>
        <span>{skill.Text}</span>
      </CardWrap>
    </ShapeParent>
  );
}
