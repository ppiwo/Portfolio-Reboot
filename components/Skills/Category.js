import ListSkills from 'components/Skills/ListSkills';
import styled from 'styled-components';

const CategoryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
`;

export default function Category({ categoryType }) {
  return (
    <>
      <h3>{categoryType.title}</h3>
      <CategoryWrap>
        <ListSkills allSkills={categoryType['skill_block']} />
      </CategoryWrap>
    </>
  );
}
