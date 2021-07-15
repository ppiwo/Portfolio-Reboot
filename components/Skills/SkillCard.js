import Image from 'next/image';

export default function SkillCard({ skill }) {
  return (
    <div>
      <Image
        src={skill.Logo.url}
        alt={skill.Logo.alternativeText}
        height='50'
        width='50'
      />
      <span>{skill.Text}</span>
    </div>
  );
}
