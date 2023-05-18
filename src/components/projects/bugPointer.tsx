import Image from "next/image"

export default function BugPointer() {

    return (
        <div className="overflow-scroll overscroll-contain bug-pointer
        pb-4
        h-[38.6rem]
        md:h-[36rem]
        lg:h-[calc(100vh-13rem)] lg:min-h-[25rem] 
        xl:h-[calc(100vh-14.7rem)] xl:min-h-[30rem] 
        2xl:h-[calc(100vh-23.1rem)] 2xl:min-h-[37rem]">
            <p>
                <b>Bug Pointer</b> is a <b>bug bounty platform</b> that effectively <b>addresses the challenge of Sybil attacks</b> using Worldcoin's ZK proof of personhood system. 
                <br/><br/> 
                The platform allows for the <b>creation of contests with bounties</b> for developers and judges. The <b>judges are randomly selected</b> using Verifiable Random Function (VRF) Chainlink Technology to ensure fairness.
                <br/><br/> 
                During the contest, <b>developers can analyze smart contracts and submit vulnerabilities</b> within a specified time period. Once the contest ends, <b>judges evaluate the vulnerabilities</b>, and the results are published on a leaderboard. 
                <br/><br/> 
                The project's MVP was developed during the <b>ETHGlobal Lisbon Hackathon</b> in May 2023 and was awarded <b>Chainlink's Best Hack prize</b> and <b>Worldcoin's Honorable Mention prize</b>.
                <br/><br/> 
                I was responsible for developing the website's frontend using <b>Next.js</b>, <b>TypeScript</b>, and <b>Tailwind CSS</b> and I was also responsible for integrating our <b>Solidity</b> Smart Contracts with the Frontend using <b>wagmi</b> and <b>viem</b>. The project also used Foundry to develop and test the Smart Contracts as well as SQLite and Prisma to store the contests info.
                <br/><br/> 
                <b>Code repository</b> 📁:
                <a target="_blank" href='https://github.com/diogoparente/bug-pointer' rel="noopener noreferrer" className="underline">
                https://github.com/diogoparente/bug-pointer 
                </a><br/>
                <b>Showcase</b> 🎥:: 
                <a target="_blank" href='https://ethglobal.com/showcase/bug-pointer-w09cr' rel="noopener noreferrer" className="underline">
                https://ethglobal.com/showcase/bug-pointer-w09cr
                </a>
            </p>
            <Image src="/bug-pointer.png" alt='Bug Pointer' width={1280} height={720} />
        </div>
    )
} 