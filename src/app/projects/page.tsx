import SplitText from '@/components/split-text/splitText';
import styled from './projects.module.scss';
import TagDeco from '@/components/tag-deco/tagDeco';
import ProjectsWindow from '@/components/projectsWindow/projectsWindow';

export default function Projects() {
  return (
    <>
      <div className={styled.projects_page}>
        <div className={styled.projects__header}>
          <TagDeco text='<h2>' />
          <SplitText text='My' />
          <div>&nbsp; </div>
          <SplitText text='Projects' />
          <TagDeco text='</h2>' />
        </div>

        <ProjectsWindow />
      </div>
    </>
  );
}
