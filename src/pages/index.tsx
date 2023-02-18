import { useState, useEffect } from 'react'

import Layout from '@/components/layout'
import Hello from '../../public/hello.svg'
import React from '../../public/react.svg'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import SectionLayout from '@/components/sectionLayout'
import Footer from '@/components/footer'
import SizingButtons from '@/components/sizingButtons'

export default function IndexPage() {
  const [activeSection, setActiveSection] = useState('intro')
  const [educationCode, setEducationCode] = useState(['','',''])
  const [removeSticky, setRemoveSticky] = useState(false)

  const completeEducationCode = ['node masters.js', 'node bachelor.js', 'node courses.js']

  useEffect(() => {
    const sections = document.querySelectorAll("section");

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

    /* This listener had to be separated from handleEducationDone since otherwise there would be an abrupt movement of the terminal */
    const handleRemoveSticky = () => {
      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        /* If the scroll is done very fast the educationCodeText might not finish writing and thus we have to complete it this way */
        setEducationCode([...completeEducationCode])
        setRemoveSticky(true)
        window.removeEventListener('scroll', handleRemoveSticky);
      }
    }

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

    window.addEventListener('scroll', handleNavbar);
    window.addEventListener('scroll', handleEducation);
    window.addEventListener('scroll', handleEducationDone);
    window.addEventListener('scroll', handleRemoveSticky);

    return () => {
      window.removeEventListener('scroll', handleNavbar);
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
            <div className='bg-dirty-white border-highlight-gray border-[0.1rem] w-[80rem] h-96 rounded-xl'>
              {/* <React width={200} height={200} viewBox="0 0 60 60"/> */}
            </div>
          </SectionLayout>
          <SectionLayout title='Experience'>
            <div className='bg-dirty-white border-highlight-gray border-[0.1rem] w-[80rem] h-96 rounded-xl' />
          </SectionLayout>
          <SectionLayout title='Projects'>
            <div className='bg-dirty-white border-highlight-gray border-[0.1rem] w-[80rem] h-96 rounded-xl' />
          </SectionLayout>
          <SectionLayout title='Education'>
            <div className={`relative w-[80rem] ${removeSticky ? '' : 'h-[145rem]'}`}>
              <div className={`bg-dirty-white border-highlight-gray border-[0.1rem] w-[80rem] h-[calc(100vh-6.5rem)] rounded-xl ${removeSticky ? '' : 'sticky'}  flex flex-col justify-start items-center top-[4.5rem] left-0`}>
                <SizingButtons />
                <div className='w-full h-10 flex justify-center items-center rounded-t-xl bg-dirty-white'>
                  <p className='font-semibold'>rodrigofernandes — - zsh — 120x40 </p>
                </div>
                <div className='w-full flex-auto py-1.5 px-2 bg-black rounded-b-xl'>
                  <p className='font-mono text-code-green'>{`rodrigofernandes@Macbook-Pro-de-Rodrigo ~ % ${educationCode[0]}`}</p>
                  { educationCode[0] === completeEducationCode[0] &&
                  <>
                    <p className='font-mono text-code-green tracking-wider'>{'*'.repeat(118)}</p>
                    <div className='flex justify-between items-center'>
                      <p className='font-mono text-code-green'>Master of Science in Aerospace Engineering</p>
                      <p className='font-mono text-code-green'>09/2021 - 07/2023</p>
                    </div>
                    <div className='flex justify-between items-center'>
                      <p className='font-mono text-code-green'>Instituto Superior Técnico</p>
                      <p className='font-mono text-code-green'>Lisboa</p>
                    </div>
                    <p className='font-mono text-code-green'>
                        <br/>
                        - Major in Aircraft, Minor in both Strucutres & Materials and Entrepreneurship and Innovation<br/>
                        - Relevant Courses: Aeroelasticity, Product and Service Development, Engineering Economics<br/>
                        - Extracurricular activities: JUNITEC<br/>
                        - GPA: 17/20
                    </p>
                    <p className='font-mono text-code-green tracking-wider'>{'*'.repeat(118)}</p>
                    <p className='font-mono text-code-green'>{`rodrigofernandes@Macbook-Pro-de-Rodrigo ~ % ${educationCode[1]}`}</p>
                  </>
                  }
                  { educationCode[1] === completeEducationCode[1] &&
                  <>
                    <p className='font-mono text-code-green tracking-wider'>{'*'.repeat(118)}</p>
                    <div className='flex justify-between items-center'>
                      <p className='font-mono text-code-green'>Bachelor of Science in Aerospace Engineering</p>
                      <p className='font-mono text-code-green'>09/2018 - 07/202</p>
                    </div>
                    <div className='flex justify-between items-center'>
                      <p className='font-mono text-code-green'>Instituto Superior Técnico</p>
                      <p className='font-mono text-code-green'>Lisboa</p>
                    </div>
                    <p className='font-mono text-code-green'>
                        <br/>
                        - Relevant Courses: Programming, Digital Systems, Differential and Integral Calculus I and II, Linear Algebra<br/>
                        - Extracurricular activities: JUNITEC, Aerotec<br/>
                        - GPA: 17/20 <br/>
                    </p>
                    <p className='font-mono text-code-green tracking-wider'>{'*'.repeat(118)}</p>
                    <p className='font-mono text-code-green'>{`rodrigofernandes@Macbook-Pro-de-Rodrigo ~ % ${educationCode[2]}`}</p>
                  </>
                  }
                  { educationCode[2] === completeEducationCode[2] &&
                  <>
                    <p className='font-mono text-code-green tracking-wider'>{'*'.repeat(118)}</p>
                    <div className='flex justify-between items-center'>
                      <a target="_blank" href='https://www.educative.io/verify-certificate/RgxzXQFQrYv5vXDrRuX0VLxX3AO5F6' rel="noopener noreferrer"
                        className='font-mono text-code-green underline'>
                        TypeScript for Front-End Developers - Educative
                      </a>
                      <p className='font-mono text-code-green'>12/2022</p>
                    </div>
                    <div className='flex justify-between items-center'>
                      <a target="_blank" href='https://www.educative.io/verify-certificate/DR5gxyCD1BKDonDPNF8BqXG8D1ZYuG' rel="noopener noreferrer"
                        className='font-mono text-code-green underline'>
                        React for Front-End Developers - Educative
                      </a>
                      <p className='font-mono text-code-green'>11/2022</p>
                    </div>
                    <p className='font-mono text-code-green tracking-wider'>{'*'.repeat(118)}</p>
                  </>
                  }
                </div>
              </div>
            </div>
          </SectionLayout>
          <SectionLayout title='Contact Me'>
            <div className='bg-dirty-white border-highlight-gray border-[0.1rem] w-[80rem] h-[24.5rem] rounded-xl flex flex-col'>
              <div className='w-full h-28 flex flex-col justify-center items-center'>
                <Image src={'/profile.png'} alt="Rodrigo Fernandes" width={65} height={65} className='initial-animation'/>
                <h3 className='mt-0.5'>Rodrigo Fernandes</h3>
              </div>
              <div className='w-full flex-auto my-auto px-2 bg-white rounded-b-xl border-highlight-gray border-t-[0.1rem] flex justify-center items-center'>
                <div className='w-full'>
                  <p className='apple-bubble ml-1 mb-2 font-sans text-lg'>
                    My Github: 
                    <a className='underline ml-1' target="_blank" href='https://www.github.com/rodrigof1307' rel="noopener noreferrer">
                      www.github.com/rodrigof1307
                    </a>
                  </p>
                  <p className='apple-bubble ml-1 mb-2 font-sans text-lg'>
                    My Linkedin: 
                    <a className='underline ml-1' target="_blank" href='https://www.linkedin.com/in/rodrigof1307' rel="noopener noreferrer">
                      www.linkedin.com/in/rodrigof1307
                    </a>
                  </p>
                  <p className='apple-bubble ml-1 mb-2 font-sans text-lg'>
                    My Email:
                    <a className='underline ml-1' target="_blank" href='mailto: rodrigo.fernandes.1307@gmail.com' rel="noopener noreferrer">
                      rodrigo.fernandes.1307@gmail.com
                    </a>
                  </p>
                  <p className='apple-bubble ml-1 mb-2 font-sans text-lg'>
                    My Resume: Rodrigo Fernandes</p>
                  <p className='apple-bubble from-them ml-1 font-sans text-lg'>Feel free to hit me up!</p>
                </div>
              </div>
            </div>
          </SectionLayout>
          <Footer/>
        </div>
      </main>
    </Layout>
  )
}
