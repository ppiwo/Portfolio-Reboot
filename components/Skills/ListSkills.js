import SkillCard from 'components/Skills/SkillCard';

export default function ListSkills({ allSkills }) {
  return allSkills.map((skill) => (
    <div key={skill.id}>
      <SkillCard skill={skill} />
    </div>
  ));
}
