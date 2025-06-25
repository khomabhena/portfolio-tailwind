import React from 'react'

const getProjects = () => {
    const placeholder = 'This app was built using React JS and is hosted on Firebase. Users are able to search properties based on an Address, City, or ZIP code to retrieve a list of active properties currently for sale. You will be able to view property information as well as the specific location of the property integrated with the Google Maps API. User authentication is available so you can signup and signin to your account with an email address in order to save your favorite properties. This is made possible with Zillow API.'
  return [
    {
        id: 'appletree',
        title: 'Apple Tree',
        image: '/assets/projects/project-appletree.png',
        link: '/projects/appletree',
        tech: 'ReactJS',
        techMore: 'ReactJS / TailwindCSS',
        liveDemo: 'https://appletree-mdu.vercel.app',
        gitHubLink: 'https://github.com/khomabhena/appletree',
        desc: 'This UI was designed using Vite, React and TailwindCSS',
        techStack: [
            'React', 'Vite', 'Tailwind CSS',
        ]
    },
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
        desc: 'The e-commerce service was developed using Next JS to leverage the Server Rendering feature, which reduces loading times of product pages, providing customers with a seamless experience. The Sanity CMS engine is used to manage and handle products, which makes it easier for non-engineers to manage the store and its products. The Stripe platform is used to facilitate product payments, making it easier for customers to purchase products from the store.',
        techStack: [
            'React', 'Next JS', 'Sanity CMS', 'Stripe'
        ]
    },
    {
        id: 'dolla',
        title: 'Dolla Fintech',
        image: '/assets/projects/project-dolla.PNG',
        link: '/projects/dolla',
        tech: 'React JS',
        techMore: 'React JS',
        liveDemo: 'https://dolla-fintech.vercel.app',
        gitHubLink: 'https://github.com/khomabhena/dolla-finance-website',
        desc: 'Landing page for the Dolla Fin-tech Business. Designed as a web service to sell financial advice and other financial services. The service was developed using React JS.',
        techStack: [
            'React', 'Styled Components', 'JavaScript', 'HTML', 'CSS'
        ]
    },
    {
        id: 'talentsync',
        title: 'Talent Sync',
        image: '/assets/projects/project-talent-sync.PNG',
        link: '/projects/talentsync',
        tech: 'React JS',
        techMore: 'React JS | Tailwind CSS',
        liveDemo: 'https://kho-mab-talentsync.vercel.app',
        gitHubLink: 'https://github.com/khomabhena/kho-mab-talentsync',
        desc: 'Landing page for Clear Link. Designed for desktop viewing, it\'s not mobile responsive. The service was developed using React JS.',
        techStack: [
            'React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'
        ]
    },
    {
        id: 'mnandi',
        title: 'Mnandi Meals',
        image: '/assets/projects/project-mnandi.PNG',
        link: '/projects/mnandi',
        tech: 'Next.js',
        techMore: 'Next.js | React.js',
        liveDemo: 'https://mnandi-meals.vercel.app',
        gitHubLink: 'https://github.com/khomabhena/odin-recipes',
        desc: 'The Mnandi Meals landing page is a web service built using Next JS. The purpose of Mnandi Meals is to showcase exceptional home-cooked meal recipes.',
        techStack: [
            'Next.js', 'Tailwind CSS', 'APIs', 'Node.js', 'JavaScript', 'HTML', 'CSS'
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
    },
    {
        id: 'tic-tac-toe',
        title: 'Tic-Tac-toe Game',
        image: '/assets/projects/project-tic-tac-toe.PNG',
        link: '/projects/tic-tac-toe',
        tech: 'Javascript',
        techMore: 'Javascript | HTML | CSS',
        liveDemo: 'https://khomabhena.github.io/tictactoe/',
        gitHubLink: 'https://github.com/khomabhena/tictactoe',
        desc: 'This is a Tic Tac Toe game created on the web using Javascript, HTML5 and CSS.',
        techStack: [
            'Javascript', 'HTML5', 'CSS', 'Local Storage'
        ]
    }
  ]
}

export default getProjects