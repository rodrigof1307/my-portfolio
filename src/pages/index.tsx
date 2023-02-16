import { useState } from 'react'

import Layout from '@/components/layout'
import Hello from '../../public/hello.svg'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import SectionLayout from '@/components/sectionLayout'
import Footer from '@/components/footer'

export default function IndexPage() {
  const [activeSection, setActiveSection] = useState('intro')

  return (
    <Layout title="Rodrigo Fernandes">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <div id='intro' className='w-full flex justify-center items-center pt-20 pb-10 relative' style={{height: 450}}>
          <Hello className='scale-75'/>
          <div className='absolute top-10 left-0 w-full flex justify-center items-center' style={{height: 450}}>
            <Image src={'/profile.png'} alt="Rodrigo Fernandes" width={325} height={325} className='initial-animation'/> 
          </div>
        </div>
        <div className='initial-animation'>
          <h1 className='text-6xl font-semibold text-center' >Rodrigo Fernandes</h1>
          <p className='text-3xl mt-3 text-center font-mono font-ultralight'>software engineer</p>
          <SectionLayout title='About Me'>
            <p className='font-mono text-xl m-auto w-[80rem] mb-9'>Hi! My name is <b>Rodrigo Fernandes</b> and I’m a <b>Frontend</b> and <b>Mobile Software Engineer</b> based in <b>Lisbon, Portugal</b>. I’m currently broadening my skills to become a <b>Full Stack Web3 Developer</b>!</p>
            <div className='bg-dirty-white border-highlight-gray border-[0.1rem] w-[80rem] h-96 rounded-xl' />
          </SectionLayout>
          <SectionLayout title='Experience'>
            <div className='bg-dirty-white border-highlight-gray border-[0.1rem] w-[80rem] h-96 rounded-xl' />
          </SectionLayout>
          <SectionLayout title='Projects'>
            <div className='bg-dirty-white border-highlight-gray border-[0.1rem] w-[80rem] h-96 rounded-xl' />
          </SectionLayout>
          <SectionLayout title='Education'>
            <div className='bg-dirty-white border-highlight-gray border-[0.1rem] w-[80rem] h-96 rounded-xl' />
          </SectionLayout>
          <SectionLayout title='Contact Me'>
            <div className='bg-dirty-white border-highlight-gray border-[0.1rem] w-[80rem] h-96 rounded-xl' />
          </SectionLayout>
          <Footer/>
        </div>
      </main>
    </Layout>
  )
}
