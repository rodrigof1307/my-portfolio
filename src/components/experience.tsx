import { ReactNode } from "react";
import SizingButtons from "./sizingButtons"

export default function Experience() {
    return(
        <div className='w-[80rem] h-[40rem] flex flex-col bg-dirty-white border-highlight-gray border-[0.1rem] relative rounded-xl'>
            <SizingButtons />
            <div className="w-[45rem] absolute top-2 left-[17.5rem] bg-light-gray rounded-md flex items-center justify-center">
                <p className="my-0.5 text-sm">localhost:3000/experience?q=outgoing</p>
            </div>
            <div className="flex flex-1 flex-row flex-between items-start mt-10 px-8 py-12 bg-gradient-to-r from-[#02112E] to-[#17397B] border-highlight-gray border-t-[0.1rem] rounded-b-xl">
                <div className="w-full flex flex-row justify-start items-center">
                    <h4 className="font-semibold text-4xl text-white">Co-Founder - <span>outGoing</span></h4>
                    <>
                        <LinkButtons name="App Store">
                        
                        </LinkButtons>
                        <LinkButtons name="Play Store">
                        
                        </LinkButtons>
                        <LinkButtons name="Website">
                        
                        </LinkButtons>
                    </>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

interface LinkButtonsProps {
    name: string;
    children?: ReactNode;
}

const LinkButtons = ({ name, children }:LinkButtonsProps) => (
    <a className="w-36 h-10 flex flex-row justify-center items-center bg-transparent border-white border-2 rounded-lg">
        {children}
        <p className="text-white">{name}</p>
    </a>
)