import React from 'react'

const getProjects = () => {
    const placeholder = 'This app was built using React JS and is hosted on Firebase. Users are able to search properties based on an Address, City, or ZIP code to retrieve a list of active properties currently for sale. You will be able to view property information as well as the specific location of the property integrated with the Google Maps API. User authentication is available so you can signup and signin to your account with an email address in order to save your favorite properties. This is made possible with Zillow API.'
  return [
    {
        id: 'ukc',
        title: 'UK Care Connection',
        image: '/assets/projects/project-ukc.PNG',
        link: '/projects/ukc',
        tech: 'Next JS',
        techMore: 'React / Next JS',
        liveDemo: 'https://uk-care-connection.vercel.app',
        gitHubLink: 'https://github.com/khomabhena/ukc-tailwind',
        desc: placeholder,
        techStack: [
            'React', 'Next JS', 'Tailwind CSS'
        ]
    },
    {
        id: 'ecommerce',
        title: 'ECommerce Shop',
        image: '/assets/projects/project-ecommerce.PNG',
        link: '/projects/ecommerce',
        tech: 'Next JS',
        techMore: 'React / Next JS',
        liveDemo: 'https://khomab-shop.vercel.app',
        gitHubLink: 'https://github.com/khomabhena/ecommerce',
        desc: placeholder,
        techStack: [
            'React', 'Next JS', 'Tailwind CSS'
        ]
    },
    {
        id: 'ukc-dashboard',
        title: 'UKC Dashboard',
        image: '/assets/projects/project-ukc-dashboard.PNG',
        link: '/projects/ukc-dashboard',
        tech: 'Next JS',
        techMore: 'React / Next JS',
        liveDemo: 'https://uk-care-connection.vercel.app/applicant/signin',
        gitHubLink: 'https://github.com/khomabhena/ukc-tailwind',
        desc: placeholder,
        techStack: [
            'React', 'Next JS', 'Tailwind CSS'
        ]
    },
    {
        id: 'portfolio',
        title: 'Personal Portfolio',
        image: '/assets/projects/project-portfolio.PNG',
        link: '/projects/portfolio',
        tech: 'Next JS',
        techMore: 'Next JS / Tailwind CSS',
        liveDemo: 'https://khomabhena.vercel.app',
        gitHubLink: 'https://github.com/khomabhena/portfolio-tailwind',
        desc: placeholder,
        techStack: [
            'React', 'Next JS', 'Tailwind CSS'
        ]
    },
    {
        id: 'imali',
        title: 'iMali App',
        image: '/assets/projects/project-imali.PNG',
        link: '/projects/imali',
        tech: 'Next JS',
        techMore: 'React / Next JS',
        liveDemo: 'https://imali-app.vercel.app',
        gitHubLink: 'https://github.com/khomabhena/imali-tailwind',
        desc: placeholder,
        techStack: [
            'React', 'Next JS', 'Tailwind CSS'
        ]
    },
    {
        id: 'daylong',
        title: 'Daylong App',
        image: '/assets/projects/project-daylong.PNG',
        link: '/projects/daylong',
        tech: 'Next JS',
        techMore: 'React / Next JS',
        liveDemo: 'https://daylong.vercel.app',
        gitHubLink: 'https://github.com/khomabhena/daylong',
        desc: placeholder,
        techStack: [
            'React', 'Next JS', 'Tailwind CSS'
        ]
    }
  ]
}

export default getProjects