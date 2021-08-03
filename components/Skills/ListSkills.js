import SkillCard from 'components/Skills/SkillCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex-basis: 10%;
`;

export default function ListSkills({ allSkills }) {
  return allSkills.map((skill) => (
    <Wrapper key={skill.id}>
      <SkillCard skill={skill} />
    </Wrapper>
  ));
}
