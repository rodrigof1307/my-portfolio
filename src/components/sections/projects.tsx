import SizingButtons from "./../sizingButtons";

import Bin from "../../../public/bin.svg";
import Box from "../../../public/box.svg";
import Circle from "../../../public/circle.svg";
import Flag from "../../../public/flag.svg";
import Left from "../../../public/left.svg";
import Left2 from "../../../public/left2.svg";
import Mail from "../../../public/mail.svg";
import Pencil from "../../../public/pencil.svg";
import Right from "../../../public/right.svg";
import Trash from "../../../public/trash.svg";
import Search from "../../../public/search.svg";
import Person from "../../../public/person.svg";

interface ProjectProps {
    emailInfo: EmailInfo[];
    setEmailInfo: React.Dispatch<React.SetStateAction<EmailInfo[]>>;
    highlightedEmail: EmailInfo;
    setHighlightedEmail: React.Dispatch<React.SetStateAction<EmailInfo>>;
    removeSticky: boolean;
}

export default function Projects({emailInfo, setEmailInfo, highlightedEmail, setHighlightedEmail, removeSticky }: ProjectProps) {

    return (
        <div className={`relative w-[80rem] ${removeSticky ? '' : 'h-[135rem] 2xl:h-[155.25rem]'}`}>
            <div className={`w-[80rem] h-[47rem] bg-white border-highlight-gray border-[0.1rem] rounded-xl flex flex-row ${removeSticky ? '' : 'sticky'} top-[4.5rem] left-0 
                origin-top 2xl:scale-[1.15] 2xl:h-[49rem] 2xl:top-[5.175rem] 2xl:mb-24`}>
                <div className='w-1/3 flex flex-col justify-start items-center rounded-l-xl relative'>
                    <div className="w-full h-14 bg-dirty-white rounded-tl-xl border-highlight-gray border-b-[0.1rem] border-r-[0.1rem] flex flex-row justify-between items-center pl-[4.5rem] pr-3">
                        <SizingButtons/>
                        <div className="-mt-1">
                            <h4 className="text-lg font-semibold">Inbox</h4>
                            <p className="text-xs -mt-1">{`${emailInfo.length} messages, ${emailInfo.filter((email) => !email.read).length} unread`}</p>
                        </div>
                        <Circle width={21} height={21} viewBox='0 0 23.9062 23.918' />
                    </div>
                    <div className="w-full flex-1 border-highlight-gray border-r-[0.1rem] pt-1.5">
                        { emailInfo.map((_email, index) => 
                            <EmailSummary key={index} index={index} highlightedEmail={highlightedEmail} setHighlightedEmail={setHighlightedEmail} emailInfo={emailInfo} setEmailInfo={setEmailInfo} removeSticky={removeSticky}/>
                        )}
                    </div>
                </div>
                <div className='flex-1 flex flex-col justify-start items-center rounded-r-xl'>
                    <div className="w-full h-14 flex flex-row justify-between items-center px-3">
                        <div className="w-20 flex flex-row justify-between items-center">
                            <Mail width={21} height={21} viewBox='0 0 25.875 20.2148'/>
                            <Pencil width={21} height={21} viewBox='0 0 23.1855 24.7675'/>
                        </div>
                        <div className="flex flex-row justify-center items-center">
                            <Box width={19} height={20} viewBox='0 0 23.4258 21.5977'/>
                            <div className='bg-[#C0C0C0] h-5 w-[0.08rem] mx-1.5'  />
                            <Trash width={19} height={21} viewBox='0 0 22.6875 28.1836'/>
                            <div className='bg-[#C0C0C0] h-5 w-[0.08rem] mx-1.5'  />
                            <Bin width={19} height={21} viewBox='0 0 28.1133 21.5977'/>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <Left width={19} height={21} viewBox='0 0 25.2656 21.5039'/>
                            <div className='bg-[#C0C0C0] h-5 w-[0.08rem] mx-1.5'  />
                            <Left2 width={21} height={21} viewBox='0 0 31.1016 21.5039'/>
                            <div className='bg-[#C0C0C0] h-5 w-[0.08rem] mx-1.5'  />
                            <Right width={19} height={21} viewBox='0 0 25.2656 21.5039'/>
                        </div>
                        <Flag className='mr-16' width={21} height={21} viewBox='0 0 20.8125 23.0039'/>
                        <div className="w-44 h-8 border-highlight-gray border-[0.09rem] rounded-lg flex items-center" >
                            <Search className='mx-2 -mt-0.5' width={16} height={16} viewBox='0 0 22.8984 23.1211' fill={'#C0C0C0'}/>
                            <p className="text-highlight-gray">Search</p>
                        </div>
                    </div>
                    <div className="w-full px-4 pt-1">
                        <div className="w-full flex flex-row justify-start items-center px-1 border-highlight-gray border-b-[0.1rem] pb-3.5">
                            <Person width={38} height={38} viewBox="0 0 23.9062 23.918"/>
                            <div className="ml-2.5">
                                <h3 className="font-bold text-lg">{highlightedEmail.sender}</h3>
                                <h4 className="text-sm -mt-1">{highlightedEmail.subject}</h4>
                            </div>
                        </div>
                        <div className="pt-2">
                            {highlightedEmail.body}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface EmailSummaryProps {
    index: number;
    emailInfo: EmailInfo[];
    setEmailInfo: (emailInfo: EmailInfo[]) => void;
    highlightedEmail: EmailInfo;
    setHighlightedEmail: (email: EmailInfo) => void;
    removeSticky: boolean;
}

const EmailSummary = ({index, highlightedEmail, setHighlightedEmail, emailInfo, setEmailInfo, removeSticky}: EmailSummaryProps) => {

    const handleClick = () => {
        setEmailInfo(emailInfo.map((email, i) => {
            if (i === index) {
                return {...email, read: true}
            }
            return email
        }))
        setHighlightedEmail({...emailInfo[index], read: true})
        const html = document.querySelectorAll("html")
        const sections = document.querySelectorAll("section");
        if(!removeSticky) {
            html[0].style.scrollBehavior = 'auto'
            if(index == 0) {
                html[0].scrollTo({ top: (0.15)*(sections[3].offsetTop - sections[2].offsetTop) + sections[2].offsetTop, behavior: 'auto' })
            } else {
                html[0].scrollTo({ top: (0.5)*(sections[3].offsetTop - sections[2].offsetTop) + sections[2].offsetTop, behavior: 'auto'})
            }
            html[0].style.scrollBehavior = 'smooth'
        }
    }

    const isHighlighted = highlightedEmail.sender === emailInfo[index].sender

    return(
        <div>
            <div className={`h-[6.2rem] flex flex-row justify-start pt-1.5 mx-2 ${isHighlighted ? 'bg-apple-blue rounded-md' : ''}`} onClick={handleClick}>
                <div className="w-8 flex flex-col justify-start items-center">
                    {!emailInfo[index].read && <div className="w-2.5 h-2.5 bg-apple-blue rounded-full mt-[0.35rem]" />}
                </div>
                <div className="h-full flex-1 mr-8 flex flex-col justify-start items-start">
                    <h3 className={`font-bold -mb-0.5 ${isHighlighted ? 'text-white' : ''}`}>{emailInfo[index].sender}</h3>
                    <h4 className={`text-sm font-medium ${isHighlighted ? 'text-white' : ''}`}>{emailInfo[index].subject}</h4>
                    <p className={`text-sm ${isHighlighted ? 'text-white' : 'text-dark-gray'}`}>{emailInfo[index].initialInfo}</p>
                </div>
            </div>
            { !isHighlighted && <div className="h-[0.05rem] mx-7 bg-highlight-gray" />}
        </div>
    )
}


