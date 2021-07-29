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
`;

const ImgWrap = styled.div`
  width: 20px;
  height: auto;
`;

export default function SkillCard({ skill }) {
  return (
    <div className='shape-parent'>
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
        <div className='shape1' />
        <div className='shape2' />
    </CardWrap>
    </div>
  );
}
