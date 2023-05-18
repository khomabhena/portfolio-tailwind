import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Kholwani | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Kholwani Mabhena</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/khomabhena/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/khomabhena'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Full Stack Developer <span className='px-1'>|</span> Android Development{' '}
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Full Stack Developer</p>
            <p className='py-2'>Android Development</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Languages and Technologies */}
        <div className=' py-4'>
          <h5 className=' mt-8 text-slate-500 font-bold text-xl'>LANGUAGES AND TECHNOLOGIES</h5>
          <p className='py-2'>

            <span className='font-bold text-slate-600'>Proficient: </span>
            <span className='px-2'>|</span>JavaScript
            <span className='px-2'>|</span>Java
            <span className='px-2'>|</span> React JS
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Tailwind CSS
            <span className='px-2'>|</span>Node JS
            <span className='px-2'>|</span>Express
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>Firebase
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>SQLIte
            <span className='px-2'>|</span> JQuery
            <span className='px-2'>|</span> HTML5
            <span className='px-2'>|</span> CSS3
          </p>
          <p className=''>
            <span className='font-bold text-slate-600'>Exposure: </span>
            <span className='px-2'>|</span>Kotlin
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>Angular
            <span className='px-2'>|</span>C# 
          </p>
        </div>

        {/* Skills */}
        <div className=' py-4'>
          <h5 className=' mt-8 text-slate-500 font-bold text-xl'>SKILLS</h5>
          <p className='py-2'>Project Management
            <span className='px-2'>|</span>Product Designing
            <span className='px-2'>|</span>Designing Algorithms
            <span className='px-2'>|</span>System Designing
            <span className='px-2'>|</span>Project Structuring
            <span className='px-2'>|</span>Visual Designing
            <span className='px-2'>|</span>Managing Developers
            <span className='px-2'>|</span>Assigning Responsibilities
            <span className='px-2'>|</span>Discovering Developer Strengths
            <span className='px-2'>|</span>Producing a well-built project
          </p>
        </div>

        <h5 className='mt-8 text-slate-500 font-bold text-xl uppercase'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            UK Care Connection 
            </span>
            <span className='px-2'>|</span>Harare, ZW
          </p>
          <p className='py-1 italic'>Full Stack Developer (AUGUST 2022 - MAY 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Worked with the founders on mapping the development of their Care Workers Hiring platform.
            </li>
            <li>
              Designed the UI & UX of the landing page with React, Next JS and Tailwind CSS
            </li>
            <li>
              Delivered a full stack Next JS dashboard for applicants and employers
            </li>
            <li>
              Integrated the platform with Stripe for handling subscriptions from employers
            </li>
            <li>
              Build the database relations and host it on Firebase Firestore
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            ASTRO Mobile 
            </span>
            <span className='px-2'>|</span>Harare, ZW
          </p>
          <p className='py-1 italic'>Chief Software Engineer (AUGUST 2019 - JUNE 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Led a team of 4 Senior Engineers on the designing and development of the EShagi platform on Android and Web</li>
            <li>The app handled over 50,000 users and processed over a million dollars in civil servant loans</li>
            <li>Designed the software specifications for the app and assigned roles to each developer</li>
            <li>Developed the Android App and the algorithm which handled all the backend services</li>
            <li>Approved UI & UX designs from the engineers</li>
            <li>Handled presentations and meetings with stakeholders and potential investors</li>
            <li>Organised Hackerthons to upskill junior developer</li>
            <li>Participated in the hiring and vetting process of junior developers and Server Administrators</li>
          </ul>
        </div>


        {/* Personal Experience */}
        {/* <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Teaching & Mentoring Web Development
            </span>
            <span className='px-2'>|</span>Dallas, TX
          </p>
          <p className='py-1 italic'>Code Commerce - Youtube Channel (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In 2021 I started “Code Commerce”, a YouTube channel focused on
              sharing what I’m learning in web development, specifically
              front-end development.
            </li>
            <li>
              Private 1 on 1 Zoom coaching calls related to web development.
              More specifically debugging, teaching basic web development
              concepts and code reviews.
            </li>
          </ul>
        </div> */}

        {/*  */}
        {/* <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5> */}
      
        {/* Experience */}
        {/* <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>CITY OF SHERMAN, TX</span>
            <span className='px-2'>|</span>Sherman, TX
          </p>
          <p className='py-1 italic'>Paramedic / Firefighter (2010 – 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div> */}

      </div>
    </>
  );
};

export default resume;
