import Image from 'next/image'

import Hello from '../../../public/hello.svg'

export default function Intro() {
    return(
        <div id='intro' className='origin-top 2xl:scale-[1.15] 2xl:mb-10'>
          <div className='w-full flex justify-center items-center pt-20 pb-10 relative' style={{height: 450}}>
            <Hello width={900} height={900*401/1217} viewBox="0 0 1217 401"/>
            <div className='absolute top-10 left-0 w-full flex justify-center items-center' style={{height: 450}}>
              <Image src={'/profile.png'} alt="Rodrigo Fernandes" width={325} height={325} className='initial-animation'/> 
            </div>
          </div>
          <div className='initial-animation'>
            <h1 className='text-6xl font-semibold text-center'>Rodrigo Fernandes</h1>
            <p className='text-3xl mt-3 text-center font-mono font-ultralight'>software engineer</p>
          </div>
        </div>
    )
}