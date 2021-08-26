import SkillCard from 'components/Skills/SkillCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 0 1 50%;
  @media (min-width: 992px) {
    flex: 0 1 18%;
    margin-bottom: -19px;
  }
`;

export default function ListSkills({ allSkills }) {
  return allSkills.map((skill) => (
    <Wrapper key={skill.id}>
      <SkillCard skill={skill} />
    </Wrapper>
  ));
}
