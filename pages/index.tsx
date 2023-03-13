import Head from "next/head";
import Landing from "../components/landing";
import Projects from "../components/project";
import Contact from "../components/contact";
import Skills from "../components/skill";
import Education from "../components/education";
import Experience from "../components/experience";
import dummyData from "../tools/portfolioData.json";
import { RevealWrapper } from "next-reveal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pyae Phyo Mon</title>
      </Head>
      <Landing />
      <RevealWrapper
        rotate={{ x: 5, y: 5, z: 0 }}
        delay={200}
        duration={1000}
        reset={true}
      >
        <Skills mySkill={dummyData?.skills} />
      </RevealWrapper>
      <RevealWrapper
        rotate={{ x: 0, y: 0, z: 0 }}
        delay={200}
        duration={1000}
        reset={true}
      >
        <Education eduData={dummyData?.education} />
      </RevealWrapper>
      <RevealWrapper
        rotate={{ x: 5, y: 5, z: 0 }}
        delay={200}
        duration={1000}
        reset={true}
      >
        <Experience experienceData={dummyData?.experience} />
      </RevealWrapper>
      <RevealWrapper
        rotate={{ x: 7, y: 7, z: 0 }}
        origin="left"
        delay={200}
        duration={1000}
        distance="500px"
        reset={true}
        viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
      >
        <Projects />
      </RevealWrapper>
      <Contact />
    </>
  );
}
