import SkillCard from 'components/Skills/SkillCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 0 1 50%;
  @media (min-width: 400px) {
    flex-basis: 25%;
  }
  @media (min-width: 992px) {
    flex-basis: ${(props) => (props.techStack ? '18%' : '20%')};
    margin-bottom: -19px;
  }
`;

export default function ListSkills({ allSkills, techStack }) {
  return allSkills.map((skill) => (
    <Wrapper key={skill.id} techStack={techStack}>
      <SkillCard skill={skill} />
    </Wrapper>
  ));
}
