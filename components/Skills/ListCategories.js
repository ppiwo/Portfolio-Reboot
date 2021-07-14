import Category from 'components/Skills/Category';

export default function ListCategories({ skillCategories }) {
    console.log(skillCategories)
  return skillCategories.map((category) => (
    <Category key={category.id} categoryType={category} />
  ));
}
