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
  span {
    font-weight: 500;
    font-size: 14px;
    margin-left: 10px;
  }
  @media (min-width: 992px) {
    margin: 0;
    z-index: 2;
    height: 75px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    span { margin: 0; }
  }
`;

const ShapeParent = styled.div`
  position: relative;
  margin: 25px 6px;
`;

const ImgWrap = styled.div`
  width: 20px;
  height: auto;
  @media (min-width: 992px) {
    width: 45px;
  }
`;

const CardShape = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: #d0d0d0;
  transform: rotate(${props => props.rotate});
  z-index: 0;
`;

export default function SkillCard({ skill }) {
  return (
    <ShapeParent>
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
      <CardShape rotate={"-60deg"} />
      <CardShape rotate={"60deg"} />
    </ShapeParent>
  );
}
