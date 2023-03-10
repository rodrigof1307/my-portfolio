import Image from 'next/image'

import Hello from '../../../public/hello.svg'

export default function Intro() {
    return(
        <div id='intro' className='origin-top scale-[0.8] -mb-36 lg:scale-90 lg:-mb-20 xl:scale-100 xl:mb-0 2xl:scale-[1.15] 2xl:mb-10'>
          <div className='w-full flex justify-center items-center pt-20 pb-10 relative -mb-10 sm:mb-0' style={{height: 450}}>
            <Hello width={900} height={900*401/1217} viewBox="0 0 1217 401"/>
            <div className='absolute top-10 left-0 w-full flex justify-center items-center' style={{height: 450}}>
              <Image src={'/profile.png'} alt="Rodrigo Fernandes" width={325} height={325}
              className='initial-animation scale-[0.65] sm:scale-[0.85] md:scale-100'/> 
            </div>
          </div>
          <div className='w-full initial-animation'>
            <h1 className='text-4xl sm:text-6xl font-semibold text-center'>Rodrigo Fernandes</h1>
            <p className='text-xl sm:text-3xl mt-3 text-center font-mono font-ultralight'>software engineer</p>
          </div>
        </div>
    )
}