import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from '@/components/Main'
import About from '@/components/About'
import Technologies from '@/components/Technologies'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kho Mabhena | Meta Certified Fullstack Developer</title>
        <meta name="description" content="I’m a full-stack software developer/engineer specializing in building and designing exceptional web applications." />
        
        <meta property="og:title" content="Kho Mabhena | Meta Certified SWE" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/kho-desk-setup.png" /> */}
        <meta property="og:image" content="/colwanymab-favicon-color.png" />
        <meta property="og:url" content="https://littlelemon.com" />

        <meta property="og:description" content="I’m a full-stack software developer/engineer specializing in building and designing exceptional web applications." />
        <meta property="og:locale" content=""en_US />
        <meta property="og:site_name" content="Little Lemon"></meta>

        <link rel="icon" href="/colwanymab-favicon-color.png" /> 
      </Head>
      <Navbar />
      <div className=' px-4 md:px-12'>
        <Main />
        <About />
        <Technologies />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </div>
    </div>
  )
}
