import Apple from '../../public/apple.svg'
import Battery from '../../public/battery.svg'
import { FiGithub, FiLinkedin, FiMail, FiFile } from 'react-icons/fi'

interface navbarProps {
    activeSection: string,
}

interface improvedLinkProps extends navbarProps {
    text: string
}

export default function Navbar({activeSection}: navbarProps) {
    return (
        <nav className='w-full justify-between items-center py-2 rounded-b-xl border-2 border-highlight-gray bg-dirty-white initial-animation fixed top-0 left-0 right-0 z-10
        h-10 xl:h-auto hidden lg:flex'>
            <div className='flex justify-around items-center w-[41rem]
            scale-[0.80] origin-left xl:scale-100'>
                <Apple className='mb-0.5'/>
                <ImprovedLink text='Intro' activeSection={activeSection}/>
                <ImprovedLink text='About Me' activeSection={activeSection}/>
                <ImprovedLink text='Experience' activeSection={activeSection}/>
                <ImprovedLink text='Projects' activeSection={activeSection}/>
                <ImprovedLink text='Education' activeSection={activeSection}/>
                <ImprovedLink text='Contact Me' activeSection={activeSection}/>
            </div>
            <div className='flex justify-around items-center w-[31rem]
            scale-[0.80] origin-right xl:scale-100'>
                <a target="_blank" href="https://github.com/rodrigof1307" rel="noopener noreferrer">
                    <FiGithub className='text-2xl'/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/rodrigof1307/" rel="noopener noreferrer">
                    <FiLinkedin className='text-2xl'/>
                </a>
                <a target="_blank" href="mailto: rodrigo.fernandes.1307@gmail.com" rel="noopener noreferrer">
                    <FiMail className='text-2xl'/>
                </a>
                <a target="_blank" href={'/RodrigoFernandesCV.pdf'} rel="noopener noreferrer">
                    <FiFile className='text-2xl'/>
                </a>
                <div className='flex row items-center'>
                    <p className='text-lg'>100%</p>
                    <Battery className='ml-2'/>
                </div>
                <p className='text-lg'>Thu 13/07/2000 18:50</p>
            </div>
        </nav>
    )
}

const ImprovedLink = ({ text, activeSection  }: improvedLinkProps) => {
    const formatedText = text.toLowerCase().replace(' ', '-')

    return <a href={`#${formatedText}`} className={`text-lg ${activeSection === formatedText ? 'font-bold' : ''}`}>{text}</a>
}