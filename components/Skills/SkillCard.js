import Image from 'next/image';
import styled from 'styled-components';

const CardWrap = styled.div`
  span {
    font-weight: 500;
    font-size: 14px;
    margin-left: 10px;
  }
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background: ${(props) => props.color};
  min-width: 30%;
`;

const ImgWrap = styled.div`
  width: 20px;
  height: auto;
`;

export default function SkillCard({ skill }) {
  console.log(skill);
  return (
    <CardWrap color={skill.hex_code}>
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
  );
}
