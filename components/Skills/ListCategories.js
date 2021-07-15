import Category from 'components/Skills/Category';

export default function ListCategories({ skillCategories }) {
  return skillCategories.map((category) => (
    <Category key={category.id} categoryType={category} />
  ));
}
