import Layout from '@/components/layout'
import Hello from '../../public/hello.svg'
import Image from 'next/image'

export default function IndexPage() {
  return (
    <Layout title="Rodrigo Fernandes">
      <main>
        <div className='w-full flex justify-center items-center my-10 relative' style={{height: 450}}>
          <Hello className='scale-75'/>
          <div className='absolute top-0 left-0 w-full flex justify-center items-center' style={{height: 450}}>
            <Image src={'/profile.png'} alt="Rodrigo Fernandes" width={325} height={325} className='initial-animation'/> 
          </div>
        </div>
        <h1 className='text-5xl font-semibold text-center initial-animation' >Rodrigo Fernandes</h1>
        <p className='text-2xl mt-2 text-center initial-animation font-mono font-ultralight'>software engineer</p>
      </main>
    </Layout>
  )
}
