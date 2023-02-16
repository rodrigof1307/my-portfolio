import Apple from '../../public/apple.svg'
import Battery from '../../public/battery.svg'
import { FiGithub, FiLinkedin, FiMail, FiFile } from 'react-icons/fi'

interface navbarProps {
    activeSection: string,
    setActiveSection: (section: string) => void
}

interface improvedLinkProps extends navbarProps {
    text: string
}

export default function Navbar({activeSection, setActiveSection}: navbarProps) {
    return (
        <nav className='flex justify-between items-center w-full py-2 rounded-b-xl border-2 border-highlight-gray bg-dirty-white initial-animation fixed top-0 left-0 right-0 z-10'>
            <div className='flex justify-around items-center w-[41rem]'>
                <Apple className='mb-0.5'/>
                <ImprovedLink text='Intro' activeSection={activeSection} setActiveSection={setActiveSection}/>
                <ImprovedLink text='About Me' activeSection={activeSection} setActiveSection={setActiveSection}/>
                <ImprovedLink text='Experience' activeSection={activeSection} setActiveSection={setActiveSection}/>
                <ImprovedLink text='Projects' activeSection={activeSection} setActiveSection={setActiveSection}/>
                <ImprovedLink text='Education' activeSection={activeSection} setActiveSection={setActiveSection}/>
                <ImprovedLink text='Contact Me' activeSection={activeSection} setActiveSection={setActiveSection}/>
            </div>
            <div className='flex justify-around items-center w-[31rem]'>
                <FiGithub className='text-2xl'/>
                <FiLinkedin className='text-2xl'/>
                <FiMail className='text-2xl'/>
                <FiFile className='text-2xl'/>
                <div className='flex row items-center'>
                    <p className='text-lg'>100%</p>
                    <Battery className='ml-2'/>
                </div>
                <p className='text-lg'>Thu 13/07/2000 18:50</p>
            </div>
        </nav>
    )
}

const ImprovedLink = ({ text, activeSection, setActiveSection  }: improvedLinkProps) => {
    const formatedText = text.toLowerCase().replace(' ', '-')
    const handleClick = () => { setActiveSection(formatedText) }

    return <a href={`#${formatedText}`} className={`text-lg ${activeSection === formatedText ? 'font-bold' : ''}`} onClick={handleClick}>{text}</a>
}