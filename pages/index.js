import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kho Mab | Fullstack Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/colwanymab-favicon-color.png" /> 
      </Head>
      <Navbar />
      <div className=' px-4 md:px-12'>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
