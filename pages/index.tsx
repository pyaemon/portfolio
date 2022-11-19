import Head from "next/head"
import Landing from '../components/landing'
import Projects from '../components/project'
import Contact from '../components/contact'
import Skills from '../components/skill'
import Education from '../components/education'
import Experience from '../components/experience'
import dummyData from '../tools/portfolioData.json'

export default function Home() {
  return (
    <>
      <Head>
      <title>Pyae Phyo Mon</title>
      </Head>
      <Landing/>
      <Skills mySkill={dummyData?.skills}/>
      <Education eduData={dummyData?.education}/>
      <Experience experienceData={dummyData?.experience}/>
      <Projects/>
      <Contact/>
    </>
   
  )
}