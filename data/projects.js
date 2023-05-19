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
        desc: 'It’s a platform for Care Workers to find jobs in the UK and for employers to source talent for various open positions. It was built using React and then later on migrated to Next JS and Tailwind to improve page loading times and it’s hosted on Firebase. The platform employs the Stripe Payment Service to handle subscriptions.',
        techStack: [
            'React', 'Next JS', 'Tailwind CSS', 'Firebase', 'Stripe'
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
        desc: 'Designed as an e-commerce service to sell equipment and other phone accessories. The service was developed using Next JS to utilise the Server Rendering function for faster loading times of product pages and give a seamless experience to customers. The products are handled and managed on the Sanity CMS engine for easier product and store management without involving engineers. Product payments are facilitated by the Stripe platform.',
        techStack: [
            'React', 'Next JS', 'Sanity CMS', 'Stripe'
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
        desc: 'It’s a platform for Care Workers to find jobs in the UK and for employers to source talent for various open positions. It was built using React and then later on migrated to Next JS and Tailwind to improve page loading times and it’s hosted on Firebase. The platform employs the Stripe Payment Service to handle subscriptions.',
        techStack: [
            'React', 'Next JS', 'Tailwind CSS', 'Stripe'
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
        desc: 'This is my personal portfolio, developed using Next JS and Tailwind and hosted locally.',
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
        desc: 'This service is designed to allow individuals to manage their income and spend wisely. The system employs complex algorithms which make sure that every cent is accounted for and one doesn’t spend more than one can afford. Your income will be allocated to various buckets and you can then spend according to the bucket allocation. The platform is developed using Next JS and Tailwind and plans are to host it on MongoDB.',
        techStack: [
            'React', 'Next JS', 'Tailwind CSS', 'Firebase'
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
        desc: 'Daylong is a system that helps with day management for freelancers so that they can get more work done on a single project and also be able to work on various projects during the day. It also allows a freelancer to dedicate some time to upskilling and learning new things in their field of work.',
        techStack: [
            'React', 'Next JS', 'Tailwind CSS', 'MongoDB'
        ]
    }
  ]
}

export default getProjects