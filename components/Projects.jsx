import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const data = [
    {
      title: 'UK Care Connection',
      image: '/assets/projects/project-ukc.PNG',
      link: '/ukc',
      tech: 'Next JS'
    },
    {
      title: 'ECommerce Shop',
      image: '/assets/projects/project-ecommerce.PNG',
      link: '/shop',
      tech: 'Next JS'
    },
    {
      title: 'UKC Dashboard',
      image: '/assets/projects/project-ukc-dashboard.PNG',
      link: '/dashboard',
      tech: 'Next JS'
    },
    {
      title: 'iMali App',
      image: '/assets/projects/project-imali.PNG',
      link: '/imali',
      tech: 'Next JS'
    },
    {
      title: 'Daylong App',
      image: '/assets/projects/project-daylong.PNG',
      link: '/daylong',
      tech: 'Next JS'
    },
  ]
  return (
    <div id='projects' className='w-full mt-12'>
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
