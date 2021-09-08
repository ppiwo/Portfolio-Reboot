import ListSkills from 'components/Skills/ListSkills';
import styled from 'styled-components';

const CategoryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  @media (min-width: 992px) {
    width: 77%;
    justify-content: center;
    margin-bottom: -27px;
    margin-left: 100px;
  }
`;

const HeaderContainer = styled.div`
  margin-bottom: 25px;
  @media (min-width: 992px) {
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:not(:nth-child(2)) {
      margin-top: -28px;
    }
    h3 {
      margin: 0;
      align-self: baseline;
    }
  }
`;

export default function Category({ categoryType }) {
  return (
    <HeaderContainer>
      <h3>{categoryType.title}</h3>
      <CategoryWrap>
        <ListSkills allSkills={categoryType.skillBlock} />
      </CategoryWrap>
    </HeaderContainer>
  );
}
