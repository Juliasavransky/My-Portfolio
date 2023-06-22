import TagDeco from '@/components/tag-deco/tagDeco';
import styled from './skills.module.scss';
import SplitText from '@/components/split-text/splitText';
import TextCloud from '@/components/text-cloud/textCloud';

export default function Skills() {
  return (
    <div className={styled.skills_page}>
      <div className={styled.skills_text}>
        <h1 className={styled.skills_text__header}>
          <TagDeco text='<h2>' />
          <SplitText text='Me, Myself and I' />
          <TagDeco text='</h2>' />
        </h1>
        <div className={styled.skills_text__text}>
          <TagDeco text='<p>' />
          <p>
            Aspiring Front End Developer, in the process of a career change from
            Industrial Design, just before my big break… <br /> I am a fast
            learner, with excellent analytical skills, passionate about
            challenges and learning new technologies.
            <br /> I volunteer in the She Codes community as a Web module
            Leader, supporting course participants in their studies of HTML5,
            CSS3, JavaScript, React-JS. <br /> I contribute to the open-source
            project "Brave Together" <br /> I'm looking for a Junior Web
            Developer position where I can bring value to the team with my
            knowledge and skills.
          </p>
          <TagDeco text='</p>' />
        </div>
      </div>

      <TextCloud />
    </div>
  );
}
