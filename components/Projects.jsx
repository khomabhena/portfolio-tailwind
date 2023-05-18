import React from 'react';
import ProjectItem from './ProjectItem';
import getProjects from '@/data/projects';

const Projects = () => {
  const data = getProjects()
  
  return (
    <div id='projects' className='w-full mt-32'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {
            data?.map(({title, image, link, tech}, index) => (
              <ProjectItem
                key={index}
                title={title}
                backgroundImg={image}
                projectUrl={link}
                tech={tech}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;
