import ListSkills from 'components/Skills/ListSkills';

export default function Category({ categoryType }) {
  return (
    <div>
      <h3>{categoryType.title}</h3>
      <ListSkills allSkills={categoryType['skill_block']} />
    </div>
  );
}
