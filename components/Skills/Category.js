import ListSkills from 'components/Skills/ListSkills';
import styled from 'styled-components';

const CategoryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  @media (min-width: 992px) {
    justify-content: center;
    flex-basis: 73%;
    align-items: flex-end;
    flex-grow: 0;
  }
`;

const HeaderContainer = styled.div`
  @media (min-width: 992px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    white-space: nowrap;
    h3 {
      flex-basis: 15%;
      margin: 0;
    }
  }
`;

export default function Category({ categoryType }) {
  return (
    <HeaderContainer>
      <h3>{categoryType.title}</h3>
      <CategoryWrap>
        <ListSkills allSkills={categoryType['skill_block']} />
      </CategoryWrap>
    </HeaderContainer>
  );
}
