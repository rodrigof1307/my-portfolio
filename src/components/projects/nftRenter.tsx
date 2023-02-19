import Image from "next/image"

export default function NFTRenter() {
    return (
        <div className="overflow-scroll max-h-[calc(100vh-15.5rem)] nft-renter">
            <p>
                The <b>NFT Renter dApp</b> was done as the final project of the <b>"Ethereum Developer Bootcamp"</b> from <b>Alchemy University</b> (
                <a target="_blank" href='https://university.alchemy.com/overview/ethereum' rel="noopener noreferrer" className="underline">https://university.alchemy.com/overview/ethereum</a>
                ). It's goal was to develop a decentralized application that allowed users to safely <b>rent NFTs from other users</b> without collateral.
                <br/><br/>
                The renting system works through an escrow smart contract that guarantees a secure experience for both sides. To <b>lend</b> an <b>NFT</b>, the <b>owner</b> defines the <b>rental guidelines, deploys a Rent Smart Contract</b> and <b>transfers his NFT</b> to the <b>Smart Contract</b>. The <b>renter</b> will then <b>transfer</b> to the Smart Contract the <b>rental value</b> that corresponds to the pretended renting days and he will get listed on the Rent Smart Contract as the <b>rightful user</b> of the <b>NFT</b> during the rental period. Once the rent period is over, the NFT owner is able to withdraw the funds and the renter can no longer use the NFT.
                <br/><br/>
                The <b>owner</b> is able to <b>withdraw his NFT at any time</b> however a <b>penalty</b> will be applied on the value he will receive from the elapsed rental period if someone his currently renting the NFT. In similar fashion, the <b>renter</b> is able to <b>stop the rent at any time</b> but a <b>penalty</b> will be applied and he will have to overpay for the days he used the NFT. 
                <br/><br/>
                A <b>Marketplace Tracker Smart Contract</b> has also been deployed with the purpose of storing an array with all the deployed Rent Smart Contracts addresses thus <b>making</b> the process of <b>fetching rental information decentralized</b>.
                <br/><br/>
                The dApp's frontend was built using <b>Next.js</b>, <b>TypeScript</b> and <b>Tailwind CSS</b> while the Smart Contracts where developed using <b>Solidity</b>, <b>Hardhat</b> and <b>ethers.js</b>. 
                <br/><br/>
                <b>Code repository</b> 📁:
                <a target="_blank" href='https://github.com/rodrigof1307/nft-renter' rel="noopener noreferrer" className="underline">
                    https://github.com/rodrigof1307/nft-renter 
                </a><br/>
                <b>Live Deployment</b> 💻: 
                <a target="_blank" href='https://nft-renter.vercel.app' rel="noopener noreferrer" className="underline">
                https://nft-renter.vercel.app
                </a>
            </p>
            <Image src="/nft-renter.png" alt='NFT Renter' width={1280} height={720} />
        </div>
    )
} 