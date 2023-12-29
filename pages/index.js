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
        <title>Kho Mab | Fullstack Developer</title>
        <meta name="description" content="I’m a full-stack software developer/engineer specializing in building and designing exceptional web applications." />
        <link rel="icon" href="/colwanymab-favicon-color.png" /> 
      </Head>
      <Navbar />
      <div className=' px-4 md:px-12'>
        <Main />
        <About />
        <Technologies />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
