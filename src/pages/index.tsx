import { useState, useEffect } from 'react'

import Layout from '@/components/layout'
import Navbar from '@/components/navbar'
import Intro from '@/components/sections/intro'
import SectionLayout from '@/components/sectionLayout'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import NFTRenter from '@/components/projects/nftRenter'
import BugPointer from '@/components/projects/bugPointer'
import LearningProjects from '@/components/projects/learningProjects'
import Education from '@/components/sections/education'
import ContactMe from '@/components/sections/contactMe'
import Footer from '@/components/footer'

export default function IndexPage() {
  const [activeSection, setActiveSection] = useState('intro')
  const [removeProjectsSticky, setRemoveProjectsSticky] = useState(false)
  const [emailInfo, setEmailInfo] = useState<EmailInfo[]>([
    {
        sender: "NFT Renter",
        subject: 'The dApp to lend and rent NFTs!',
        initialInfo: 'The NFT Renter dApp was done as the final project of the "Ethereum Developer Bootcamp" from Alchemy Universi...',
        read: true,
        body: NFTRenter()
    },
    {
        sender: "Bug Pointer",
        subject: 'A sybil-resistant bug bounty platform!',
        initialInfo: 'Bug Pointer is a bug bounty platform that effectively addresses the challenge of Sybil attacks using...',
        read: false,
        body: BugPointer()
    },
    {
        sender: 'Learning Projects',
        subject: 'Learning by doing!',
        initialInfo: 'Learning Projects is a Github repository that contains small simple projects that I built to learn new technologies...',
        read: false,
        body: LearningProjects()
    }
  ])
  const [highlightedEmail, setHighlightedEmail] = useState<EmailInfo | undefined>()
  const [removeEducationSticky, setRemoveEducationSticky] = useState(false)
  const [educationCode, setEducationCode] = useState(['','',''])

  const completeEducationCode = ['node masters.js', 'node bachelor.js', 'node courses.js']

  useEffect(() => {
    setEmailInfo(emailInfo.map((email) => {
      if(email.sender === highlightedEmail?.sender) {
        return {
          ...email,
          read: true
        }
      }
      return email
    }))
  }, [highlightedEmail])

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const nftRenter = document.getElementsByClassName("nft-renter");
    const bugPointer = document.getElementsByClassName("bug-pointer");

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
        if(0.05 <= ratio && ratio < 0.3) {
          setHighlightedEmail(emailInfo[0])
          if(nftRenter[0]) {
            nftRenter[0].scrollTo({ top: (nftRenter[0].scrollHeight - nftRenter[0].clientHeight)/0.25*(ratio-0.05), behavior: 'smooth'})
          }
        } 
        if(0.35 <= ratio && ratio < 0.4) {
          setHighlightedEmail(emailInfo[1])
          if(bugPointer[0]) {
            bugPointer[0].scrollTo({ top: 0, behavior: 'smooth'})
          }
        }
        if(0.4 <= ratio && ratio < 0.65) {
          setHighlightedEmail(emailInfo[1])
          if(bugPointer[0]) {
            bugPointer[0].scrollTo({ top: (bugPointer[0].scrollHeight - bugPointer[0].clientHeight)/0.25*(ratio-0.4), behavior: 'smooth'})
          }
        } 
        if(ratio >= 0.7) {
          setHighlightedEmail(emailInfo[2])
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

    if(window.outerWidth >= 768) {
      setHighlightedEmail(emailInfo[0])
    } else {
      setHighlightedEmail(undefined)
      setEmailInfo(emailInfo.map((email) => {
        return {
          ...email,
          read: false
        }
      }))
    }

    if(window.outerWidth >= 1230) {
      window.addEventListener('scroll', handleNavbar);
      window.addEventListener('scroll', handleProjects);
      window.addEventListener('scroll', handleEducation);
      window.addEventListener('scroll', handleEducationDone);
      window.addEventListener('scroll', handleRemoveSticky);
    }

    return () => {
      if(window.outerWidth >= 1230) {
        window.removeEventListener('scroll', handleNavbar);
        window.removeEventListener('scroll', handleProjects);
        window.removeEventListener('scroll', handleEducation);
        window.removeEventListener('scroll', handleEducationDone);
        window.removeEventListener('scroll', handleRemoveSticky);
      }
    };
  }, []);


  return (
    <Layout title="Rodrigo Fernandes">
      <Navbar activeSection={activeSection}/>
      <main className='-mt-20 sm:-mt-10 md:-mt-6 lg:mt-0'>
        <Intro />
        <div className='initial-animation'>
          <SectionLayout title='About Me'>
            <p className='font-mono text-md md:text-xl m-auto mb-9 xxs:w-[33rem] xs:w-[40rem] md:w-[80rem] mx-auto 2xl:w-[92rem]'>
              Hi! My name is <b>Rodrigo Fernandes</b> and I’m a <b>Frontend</b> and <b>Mobile Software Engineer</b> based in <b>Lisbon, Portugal</b>. I’m currently broadening my skills to become a <b>Full Stack Web3 Developer</b>!
            </p>
            <Skills />
          </SectionLayout>
          <SectionLayout title='Experience'>
            <Experience />
          </SectionLayout>
          <SectionLayout title='Projects' isStickySection>
            <Projects emailInfo={emailInfo} setEmailInfo={setEmailInfo} highlightedEmail={highlightedEmail} setHighlightedEmail={setHighlightedEmail} removeSticky={removeProjectsSticky}/>
          </SectionLayout>
          <SectionLayout title='Education' isStickySection>
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
