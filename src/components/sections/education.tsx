import { useEffect, useState } from 'react';

import SizingButtons from './../sizingButtons';

interface EducationProps {
    removeSticky: boolean;
    educationCode: string[];
    completeEducationCode: string[];
}

export default function Education({ removeSticky, educationCode, completeEducationCode }: EducationProps) {
    const [isMinimumAnimationSize, setIsMinimumAnimationSize] = useState(true);

    useEffect(() => {
        setIsMinimumAnimationSize(window.outerWidth >= 1230)
    }, [])

    return (
        <div className={`relative xxs:w-[33rem] xs:w-[40rem] md:w-[80rem] ${removeSticky ? '' : '0.5xl:h-[110rem] xl:h-[135rem] 2xl:h-[155.25rem]'} -mb-[22rem] md:-mb-[20.5rem] lg:-mb-52 0.5xl:-mb-28 xl:-mb-0`}>
            <div className={`${removeSticky ? '' : '0.5xl:sticky'} bg-dirty-white border-highlight-gray border-[0.1rem] w-[80rem] rounded-xl flex
            flex-col justify-start items-center left-0 origin-top
            xxs:w-[33rem] xs:w-[40rem] md:w-[80rem] mx-auto
            0.5xl:h-[calc(100vh-5rem)] 0.5xl:min-h-[44rem] 0.5xl:top-[4.1rem] 0.5xl:scale-[0.9] 0.5xl:mb-0
            xl:h-[calc(100vh-6.5rem)] xl:min-h-[45rem] xl:top-[4.5rem] xl:scale-100
            2xl:h-[calc(100vh-15rem)] 2xl:min-h-[46rem] 2xl:top-[5.175rem] 2xl:scale-[1.15] 2xl:mb-24`}
            suppressHydrationWarning>
                <SizingButtons />
                <div className='w-full h-10 flex justify-center items-center rounded-t-xl bg-dirty-white'>
                    <p className='font-semibold'>rodrigofernandes — - zsh — 120x40 </p>
                </div>
                <div className='w-full flex-auto py-1.5 px-2 bg-black rounded-b-xl'>
                    <p className='font-mono text-code-green'>{`rodrigofernandes@Macbook-Pro-de-Rodrigo ~ % ${isMinimumAnimationSize ? educationCode[0] : completeEducationCode[0]}`}</p>
                    { ((!isMinimumAnimationSize) || educationCode[0] === completeEducationCode[0]) &&
                    <>
                    <p className='font-mono text-code-green tracking-[0.042rem] md:tracking-[0.05rem] overflow-hidden'>{'*'.repeat(118)}</p>
                    <div className='flex justify-between items-center'>
                        <p className='font-mono text-code-green'>MSc in Aerospace Engineering</p>
                        <p className='font-mono text-code-green'>Sept. 2021 - July 2023</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='font-mono text-code-green'>Instituto Superior Técnico</p>
                        <p className='font-mono text-code-green'>Lisboa</p>
                    </div>
                    <p className='font-mono text-code-green'>
                        <br/>
                        - Major in Aircraft, Minor in both Strucutres & Materials and Entrepreneurship and Innovation<br/>
                        - Relevant Courses: Aeroelasticity, Product and Service Development, Engineering Economics<br/>
                        - Extracurricular activities: JUNITEC<br/>
                        - GPA: 17/20
                    </p>
                    <p className='font-mono text-code-green tracking-[0.042rem] md:tracking-[0.05rem] overflow-hidden'>{'*'.repeat(118)}</p>
                    <p className='font-mono text-code-green'>{`rodrigofernandes@Macbook-Pro-de-Rodrigo ~ % ${isMinimumAnimationSize ? educationCode[1] : completeEducationCode[1]}`}</p>
                    </>
                    }
                    { ((!isMinimumAnimationSize) || educationCode[1] === completeEducationCode[1]) &&
                    <>
                    <p className='font-mono text-code-green tracking-[0.042rem] md:tracking-[0.05rem] overflow-hidden'>{'*'.repeat(118)}</p>
                    <div className='flex justify-between items-center'>
                        <p className='font-mono text-code-green'>BSc in Aerospace Engineering</p>
                        <p className='font-mono text-code-green'>Sept. 2018 - July 2021</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='font-mono text-code-green'>Instituto Superior Técnico</p>
                        <p className='font-mono text-code-green'>Lisboa</p>
                    </div>
                    <p className='font-mono text-code-green'>
                        <br/>
                        - Relevant Courses: Programming, Digital Systems, Differential and Integral Calculus I and II, Linear Algebra<br/>
                        - Extracurricular activities: JUNITEC, Aerotec<br/>
                        - GPA: 17/20 <br/>
                    </p>
                    <p className='font-mono text-code-green tracking-[0.042rem] md:tracking-[0.05rem] overflow-hidden'>{'*'.repeat(118)}</p>
                    <p className='font-mono text-code-green'>{`rodrigofernandes@Macbook-Pro-de-Rodrigo ~ % ${isMinimumAnimationSize ? educationCode[2] : completeEducationCode[2]}`}</p>
                    </>
                    }
                    { ((!isMinimumAnimationSize) || educationCode[2] === completeEducationCode[2]) &&
                    <>
                    <p className='font-mono text-code-green tracking-[0.042rem] md:tracking-[0.05rem] overflow-hidden'>{'*'.repeat(118)}</p>
                    <div className='flex justify-between items-center'>
                        <a target="_blank" href='https://university.alchemy.com/overview/ethereum' rel="noopener noreferrer"
                        className='font-mono text-code-green underline'>
                        Ethereum Developer Bootcamp - Alchemy University
                        </a>
                        <p className='font-mono text-code-green'>Feb. 2023</p>
                    </div>
                    <p className='font-mono text-code-green tracking-[0.042rem] md:tracking-[0.05rem] overflow-hidden'>{'*'.repeat(118)}</p>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}