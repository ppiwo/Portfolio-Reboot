import ListSkills from '@/components/Skills/ListSkills';
import styled from 'styled-components';

const TechWrapper = styled.div`
  display: flex;
  margin-bottom: 18px;
  flex-wrap: wrap;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
`;

export default function TechOverview({ techStack, textContent }) {
  return (
    <>
      <TechWrapper>
        <ListSkills allSkills={techStack} techStack />
      </TechWrapper>
      <h3>The Thought Process</h3>
      <p>{textContent}</p>
    </>
  );
}
