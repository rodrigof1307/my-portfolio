import Image from 'next/image'

export default function ContactMe() {
    return (
        <div className='bg-dirty-white border-highlight-gray border-[0.1rem] w-[80rem] h-[24.5rem] rounded-xl flex flex-col origin-top 2xl:scale-[1.15] 2xl:mb-10
        -mb-56 lg:-mb-36 xl:-mb-0'>
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
                    My Resume:                
                    <a className='underline ml-1' target="_blank" href='/RodrigoFernandesCV.pdf' rel="noopener noreferrer">
                        Rodrigo Fernandes
                    </a></p>
                    <p className='apple-bubble from-them ml-1 font-sans text-lg'>Feel free to hit me up!</p>
                </div>
            </div>
        </div>
    )
}