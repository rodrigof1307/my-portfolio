import SizingButtons from './../sizingButtons';

interface EducationProps {
    removeSticky: boolean;
    educationCode: string[];
    completeEducationCode: string[];
}

export default function Education({ removeSticky, educationCode, completeEducationCode }: EducationProps) {
    return (
        <div className={`relative w-[80rem] ${removeSticky ? '' : 'h-[135rem] h-[135rem] 2xl:h-[155.25rem]'}`}>
            <div className={`bg-dirty-white border-highlight-gray border-[0.1rem] w-[80rem] h-[47rem] rounded-xl ${removeSticky ? '' : 'sticky'}  flex flex-col justify-start items-center top-[4.5rem] left-0
            origin-top 2xl:h-[49rem] 2xl:top-[5.175rem] 2xl:scale-[1.15] 2xl:mb-24`}>
                <SizingButtons />
                <div className='w-full h-10 flex justify-center items-center rounded-t-xl bg-dirty-white'>
                    <p className='font-semibold'>rodrigofernandes — - zsh — 120x40 </p>
                </div>
                <div className='w-full flex-auto py-1.5 px-2 bg-black rounded-b-xl'>
                    <p className='font-mono text-code-green'>{`rodrigofernandes@Macbook-Pro-de-Rodrigo ~ % ${educationCode[0]}`}</p>
                    { educationCode[0] === completeEducationCode[0] &&
                    <>
                    <p className='font-mono text-code-green tracking-wider'>{'*'.repeat(118)}</p>
                    <div className='flex justify-between items-center'>
                        <p className='font-mono text-code-green'>Master of Science in Aerospace Engineering</p>
                        <p className='font-mono text-code-green'>09/2021 - 07/2023</p>
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
                    <p className='font-mono text-code-green tracking-wider'>{'*'.repeat(118)}</p>
                    <p className='font-mono text-code-green'>{`rodrigofernandes@Macbook-Pro-de-Rodrigo ~ % ${educationCode[1]}`}</p>
                    </>
                    }
                    { educationCode[1] === completeEducationCode[1] &&
                    <>
                    <p className='font-mono text-code-green tracking-wider'>{'*'.repeat(118)}</p>
                    <div className='flex justify-between items-center'>
                        <p className='font-mono text-code-green'>Bachelor of Science in Aerospace Engineering</p>
                        <p className='font-mono text-code-green'>09/2018 - 07/202</p>
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
                    <p className='font-mono text-code-green tracking-wider'>{'*'.repeat(118)}</p>
                    <p className='font-mono text-code-green'>{`rodrigofernandes@Macbook-Pro-de-Rodrigo ~ % ${educationCode[2]}`}</p>
                    </>
                    }
                    { educationCode[2] === completeEducationCode[2] &&
                    <>
                    <p className='font-mono text-code-green tracking-wider'>{'*'.repeat(118)}</p>
                    <div className='flex justify-between items-center'>
                        <a target="_blank" href='https://university.alchemy.com/overview/ethereum' rel="noopener noreferrer"
                        className='font-mono text-code-green underline'>
                        Ethereum Developer Bootcamp - Alchemy University
                        </a>
                        <p className='font-mono text-code-green'>02/2023</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <a target="_blank" href='https://www.educative.io/verify-certificate/RgxzXQFQrYv5vXDrRuX0VLxX3AO5F6' rel="noopener noreferrer"
                        className='font-mono text-code-green underline'>
                        TypeScript for Front-End Developers - Educative
                        </a>
                        <p className='font-mono text-code-green'>12/2022</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <a target="_blank" href='https://www.educative.io/verify-certificate/DR5gxyCD1BKDonDPNF8BqXG8D1ZYuG' rel="noopener noreferrer"
                        className='font-mono text-code-green underline'>
                        React for Front-End Developers - Educative
                        </a>
                        <p className='font-mono text-code-green'>11/2022</p>
                    </div>
                    <p className='font-mono text-code-green tracking-wider'>{'*'.repeat(118)}</p>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}