import ListSkills from 'components/Skills/ListSkills';
import styled from 'styled-components';

const CategoryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  @media (min-width: 992px) {
    justify-content: center;
    margin-bottom: 37px;
  }
`;

const HeaderContainer = styled.div`
  @media (min-width: 992px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
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
