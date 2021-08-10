import SkillCard from 'components/Skills/SkillCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 0 0 5%;
  margin-bottom: -21px;
`;

export default function ListSkills({ allSkills }) {
  return allSkills.map((skill) => (
    <Wrapper key={skill.id}>
      <SkillCard skill={skill} />
    </Wrapper>
  ));
}
