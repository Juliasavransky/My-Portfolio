import styled from './projectsWindow.module.scss';
import projectList from '../../components/utils/projectsList.json';
import Card from '../card/card';
import TagDeco from '../tag-deco/tagDeco';

interface Project {
  projectName: string;
  gitHubLink: string;
  pageLink: string;
  summary: string;
  img: string;
}

export default function ProjectsWindow() {
  const projects: Project[] = projectList;

  return (
    <div className={styled.container}>
      <div className={styled.container_title}>
        <TagDeco text='<p>' />
        <div>Welcome to check some of my projects and</div>
        <TagDeco text='</p>' />
      </div>

      {projects.map((project) => (
        <Card
          projectName={project.projectName}
          gitHubLink={project.gitHubLink}
          pageLink={project.pageLink}
          summary={project.summary}
          img={project.img}
        />
      ))}
    </div>
  );
}
