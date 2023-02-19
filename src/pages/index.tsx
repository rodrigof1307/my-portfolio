import { useState, useEffect } from 'react'

import Image from 'next/image'

import Hello from '../../public/hello.svg'

import Layout from '@/components/layout'
import Navbar from '@/components/navbar'
import SectionLayout from '@/components/sectionLayout'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Education from '@/components/education'
import ContactMe from '@/components/contactMe'
import Footer from '@/components/footer'
import Projects from '@/components/projects'

import NFTRenter from '@/components/projects/nftRenter'
import LearningProjects from '@/components/projects/learningProjects'

export default function IndexPage() {
  const [activeSection, setActiveSection] = useState('intro')
  const [removeProjectsSticky, setRemoveProjectsSticky] = useState(false)
  const [emailInfo, setEmailInfo] = useState<EmailInfo[]>([
    {
        sender: "NFT Renter",
        subject: 'The dApp to lend and rent NFTs!',
        initialInfo: 'The NFT Renter dApp was done as the final project of the "Ethereum Developer Bootcamp" from Alchemy...',
        read: true,
        body: NFTRenter()
    },
    {
        sender: 'Learning Projects',
        subject: 'Learning by doing!',
        initialInfo: 'Learning Projects is a Github repository that contains small simple projects that I built to learn...',
        read: false,
        body: LearningProjects()
    }
  ])
  const [highlightedEmail, setHighlightedEmail] = useState(emailInfo[0])
  const [removeEducationSticky, setRemoveEducationSticky] = useState(false)
  const [educationCode, setEducationCode] = useState(['','',''])


  const completeEducationCode = ['node masters.js', 'node bachelor.js', 'node courses.js']

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const nftRenter = document.getElementsByClassName("nft-renter");

    const handleNavbar = () => {
      let activeSectionHelper = ''
      for(let section of sections) {
        const sectionTop = section.offsetTop;
        if(scrollY === 0) {
          activeSectionHelper = 'intro'
          break
        } else if(scrollY >= sectionTop - 500) {
          activeSectionHelper = section.id;
        } else {
          break;
        }
      }
      setActiveSection(activeSectionHelper)
    };

    const handleProjects = () => {
      if(scrollY >= sections[2].offsetTop - 500) {
        const ratio = (scrollY - sections[2].offsetTop)/(sections[3].offsetTop - sections[2].offsetTop)
        if(0.15 <= ratio && ratio < 0.45) {
          setHighlightedEmail(emailInfo[0])
          if(nftRenter[0]) {
            nftRenter[0].scrollTo({ top: (ratio-0.15)*1500, behavior: 'smooth'})
          }
        } if(ratio >= 0.5) {
          setEmailInfo(emailInfo.map((email) => {
            if(email.sender === emailInfo[1].sender) {
              return {
                ...email,
                read: true
              }
            }
            return email
          }))
          setHighlightedEmail(emailInfo[1])
        }
      }
    }

    const handleEducation = () => {
      if(scrollY >= sections[3].offsetTop - 500) {
        const ratio = (scrollY - sections[3].offsetTop)/(sections[4].offsetTop - sections[3].offsetTop)
        const helperMasters = completeEducationCode[0]
        const helperBachelors = completeEducationCode[1]
        const helperCourses = completeEducationCode[2]
        if(0.15 < ratio && ratio<0.3) {
          setEducationCode([ helperMasters.substring(0, Math.ceil((ratio-0.15)/0.15*helperMasters.length)), '', ''])
        } else if(0.325 < ratio && ratio < 0.475) {
          setEducationCode([ helperMasters, helperBachelors.substring(0, Math.ceil((ratio-0.325)/0.15*helperBachelors.length)), ''])
        } else if(0.5 < ratio && ratio < 0.65) {
          setEducationCode([ helperMasters, helperBachelors, helperCourses.substring(0, Math.ceil((ratio-0.5)/0.15*helperCourses.length))])
        }
      }
    }

    const handleEducationDone = () => {
      if(scrollY >= sections[3].offsetTop - 500) {
        const ratio = (scrollY - sections[3].offsetTop)/(sections[4].offsetTop - sections[3].offsetTop)
        if(ratio > 0.65) {
          window.removeEventListener('scroll', handleEducation);
          window.removeEventListener('scroll', handleEducationDone);
        }
      }
    }

    const handleRemoveSticky = () => {
      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        /* If the scroll is done very fast the educationCodeText might not finish writing and thus we have to complete it this way */
        setEducationCode([...completeEducationCode])
        setRemoveEducationSticky(true)
        setRemoveProjectsSticky(true)
        window.removeEventListener('scroll', handleProjects);
        window.removeEventListener('scroll', handleRemoveSticky);
      }
    }

    window.addEventListener('scroll', handleNavbar);
    window.addEventListener('scroll', handleProjects);
    window.addEventListener('scroll', handleEducation);
    window.addEventListener('scroll', handleEducationDone);
    window.addEventListener('scroll', handleRemoveSticky);

    return () => {
      window.removeEventListener('scroll', handleNavbar);
      window.removeEventListener('scroll', handleProjects);
      window.removeEventListener('scroll', handleEducation);
      window.removeEventListener('scroll', handleEducationDone);
      window.removeEventListener('scroll', handleRemoveSticky);
    };
  }, []);


  return (
    <Layout title="Rodrigo Fernandes">
      <Navbar activeSection={activeSection}/>
      <main>
        <div id='intro' className='w-full flex justify-center items-center pt-20 pb-10 relative' style={{height: 450}}>
          <Hello width={900} height={900*401/1217} viewBox="0 0 1217 401"/>
          <div className='absolute top-10 left-0 w-full flex justify-center items-center' style={{height: 450}}>
            <Image src={'/profile.png'} alt="Rodrigo Fernandes" width={325} height={325} className='initial-animation'/> 
          </div>
        </div>
        <div className='initial-animation'>
          <h1 className='text-6xl font-semibold text-center' >Rodrigo Fernandes</h1>
          <p className='text-3xl mt-3 text-center font-mono font-ultralight'>software engineer</p>
          <SectionLayout title='About Me'>
            <p className='font-mono text-xl m-auto w-4/5 min-w-[80rem] mb-9'>Hi! My name is <b>Rodrigo Fernandes</b> and I’m a <b>Frontend</b> and <b>Mobile Software Engineer</b> based in <b>Lisbon, Portugal</b>. I’m currently broadening my skills to become a <b>Full Stack Web3 Developer</b>!</p>
            <Skills />
          </SectionLayout>
          <SectionLayout title='Experience'>
            <Experience />
          </SectionLayout>
          <SectionLayout title='Projects'>
            <Projects emailInfo={emailInfo} setEmailInfo={setEmailInfo} highlightedEmail={highlightedEmail} setHighlightedEmail={setHighlightedEmail} removeSticky={removeProjectsSticky}/>
          </SectionLayout>
          <SectionLayout title='Education'>
            <Education educationCode={educationCode} completeEducationCode={completeEducationCode} removeSticky={removeEducationSticky}/>
          </SectionLayout>
          <SectionLayout title='Contact Me'>
            <ContactMe />
          </SectionLayout>
          <Footer/>
        </div>
      </main>
    </Layout>
  )
}
