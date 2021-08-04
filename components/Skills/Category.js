import ListSkills from 'components/Skills/ListSkills';
import styled from 'styled-components';

const CategoryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  @media (min-width: 992px) {
    justify-content: center;
    flex-basis: 85%;
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
    }
    :not(:last-child){
      margin-bottom: -20px;
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
