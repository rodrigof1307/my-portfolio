import { ReactNode } from "react";

import Image from "next/image";

import Website from "../../../public/website.svg";
import AppStore from "../../../public/appStore.svg";
import PlayStore from "../../../public/playStore.svg";

import SizingButtons from "./../sizingButtons"

export default function Experience() {
    return(
        <div className='flex xxs:w-[33rem] xs:w-[40rem] md:w-[80rem] flex-col bg-dirty-white border-highlight-gray border-[0.1rem] relative rounded-xl 
        2xl:scale-[1.15] 2xl:my-12 mb-[-44rem] md:mb-[-27rem] lg:-mb-64 0.5xl:-mb-32 xl:-mb-0'>
            <SizingButtons />
            <div className="xxs:w-[15rem] xs:w-[20rem] md:w-[45rem] absolute top-2 xxs:left-[9rem] xs:left-[10rem] md:left-[17.5rem] bg-light-gray rounded-md flex items-center justify-center">
                <p className="my-0.5 text-sm">localhost:3000/experience?q=outgoing</p>
            </div>
            <div className="flex flex-col md:h-[52.75rem] md:flex-row justify-between items-start mt-10 px-8 py-12 bg-gradient-to-r from-[#02112E] to-[#17397B] border-highlight-gray border-t-[0.1rem] rounded-b-xl">
                <div className="w-full flex flex-col justify-start items-start mr-5">
                    <div className="w-full flex flex-row justify-between items-center">
                        <h3 className="w-[25.75rem] font-semibold text-4xl text-white">Co-Founder - <span className="text-apple-blue font-bold">outGoing</span></h3>
                        <>
                            <div className="hidden md:flex">
                                <LinkButtons href={'https://apps.apple.com/pt/app/outgoing/id1585889075'} name="App Store">
                                    <AppStore width={25} height={25} viewBox='0 0 25 25' />
                                </LinkButtons>
                            </div>
                            <div className="hidden md:flex">
                                <LinkButtons href={'https://play.google.com/store/apps/details?id=com.rodrigofernandes.outgoing'} name="Play Store">
                                    <PlayStore width={25} height={25} viewBox='0 0 25 25' />
                                </LinkButtons> 
                            </div>
                            <div className="flex">
                                <LinkButtons href={'https://www.outgoingapp.net'} name="Website">
                                    <Website width={25} height={25} viewBox='0 0 27.9375 24.4336' />
                                </LinkButtons>
                            </div>
                        </>
                    </div>
                    <p className="text-white font-thin text-xl mt-1 mb-3">Nov. 2021 - Present</p>
                    <div className="ml-2">
                        <p className="text-white text-lg tracking-[0.01rem]">
                            <HL>outGoing</HL> facilitates the purchase of <HL>tickets</HL> and <HL>consumables</HL> at events as well as their management through a digital platform. 
                            The app currently has over 5000 users and has hosted 8 events in Lisbon, totalling 3500 tickets and 6000 consumables sold.
                            <br/><br/>
                            As co-founder, I’ve worn many hats. Here’s what I do as:
                        </p>
                        <RoleTitle title="Frontend Developer"/>
                        <p className="text-white text-lg tracking-[0.01rem]">
                            I am responsible for the design and development of our website’s frontend, which has been built using <HL>React</HL>, <HL>TypeScript</HL>, <HL>JavaScript</HL>, 
                            and connected to our AWS backend using <HL>GraphQL</HL>. The website is used by the organizers to <HL>create</HL> and <HL>edit events</HL> as well as to check 
                            <HL> event statistics</HL> and perform <HL>ticket refunds</HL>.
                        </p>
                        <RoleTitle title="Mobile Developer"/>
                        <p className="text-white text-lg tracking-[0.01rem]">
                            I am responsible for the design and development of our app, which has been built using <HL>React Native</HL>, <HL>Expo</HL>, <HL>TypeScript</HL>, 
                            <HL>JavaScript</HL>, and connected to our AWS backend using <HL>GraphQL</HL>. The app is used by the public to <HL>find events</HL>, <HL>buy tickets</HL> and <HL>consumables</HL> as well as <HL>share consumables </HL>  
                            with friends. The collaborators have a dedicated interface to <HL>validate tickets</HL> and <HL>consumable</HL> purchases.
                        </p>
                        <RoleTitle title="Project Manager"/>
                        <p className="text-white text-lg tracking-[0.01rem]">
                        I <HL>organized</HL> and <HL>led</HL> a team of three developers using an <HL>Agile methodology</HL> based on sprints with clear deadlines and goals to achieve both 
                        business and development goals. I was also responsible for <HL>pitching</HL> our product to <HL>clients</HL> and <HL>partners</HL> and coordinating its 
                        implementation on their events.
                        </p>
                    </div>
                </div>
                <div className="w-[26.75rem] mt-8 mb-8 ml-[4rem] flex md:hidden flex-row items-end group">
                    <Image className="mr-[-4rem]" src={'/consume.png'} alt="outGoing App Consume" width={190} height={383}/>
                    <Image className="mb-[-3rem] z-10" src={'/events.png'} alt="outGoing App Events" width={190} height={395}/>
                    <Image className="ml-[-4rem]" src={'/leaderboard.png'} alt="outGoing App Leaderboard" width={191} height={382}/>
                </div>
                <div className="w-[26.75rem] m-0 hidden md:flex flex-col items-end group">
                    <Image className="group-hover:-mr-2 group-hover:-mt-2 group-hover:scale-105 transition-all" src={'/events.png'} alt="outGoing App Events" width={190} height={395}/>
                    <Image className="-mt-44 mr-[8rem] z-10 group-hover:mr-[9rem] group-hover:-mt-40 group-hover:scale-105 transition-all" src={'/consume.png'} alt="outGoing App Consume" width={190} height={383}/>
                    <Image className="-mt-48 mr-2 group-hover:-mt-44 group-hover:-mr-2 group-hover:scale-105 transition-all" src={'/leaderboard.png'} alt="outGoing App Leaderboard" width={191} height={382}/>
                </div>
            </div>
        </div>
    )
}

interface LinkButtonsProps {
    name: string;
    href: string;
    children?: ReactNode;
}

const LinkButtons = ({ name, href, children }: LinkButtonsProps) => (
    <a href={href} className="w-36 h-11 flex flex-row justify-center items-center bg-transparent border-white border-2 rounded-lg" target="_blank" rel="noopener noreferrer">
        <div className="mb-0.5">
            {children}
        </div>
        <p className="text-white ml-2.5 font-light">{name}</p>
    </a>
)

interface RoleTitleProps {
    title: string;
}

const RoleTitle = ({title}: RoleTitleProps) => (
    <h3 className="w-fit font-semibold text-2xl text-white border-apple-blue border-b-2 py-0.5 mt-3 mb-1.5">{title}</h3>
)

const HL = ({children}: {children: ReactNode}) => (
    <span className="text-apple-blue font-bold">{children}</span>
)