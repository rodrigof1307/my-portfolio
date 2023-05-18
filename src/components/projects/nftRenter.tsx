import Image from "next/image"

export default function NFTRenter() {

    return (
        <div className="overflow-scroll overscroll-contain nft-renter
        pb-4
        h-[38.6rem]
        md:h-[36rem]
        lg:h-[calc(100vh-13rem)] lg:min-h-[25rem] 
        xl:h-[calc(100vh-14.7rem)] xl:min-h-[30rem] 
        2xl:h-[calc(100vh-23.1rem)] 2xl:min-h-[37rem]">
            <p>
                The <b>NFT Renter dApp</b> was done as the final project of the <b>"Ethereum Developer Bootcamp"</b> from <b>Alchemy University</b> (
                <a target="_blank" href='https://university.alchemy.com/overview/ethereum' rel="noopener noreferrer" className="underline">https://university.alchemy.com/overview/ethereum</a>
                ). It's goal was to develop a decentralized application that allowed users to <b>rent NFTs from other users</b> with both collateralized and non-collateralized options being available.
                <br/><br/> 
                On <b>collateralized loans</b>, the <b>owner</b> defines the <b>daily rate and collateral value, deploys a Rent Escrow Smart Contract</b> and <b>transfers his NFT</b> to the <b>Smart Contract</b>. The <b>renter</b> must then <b>pay the rental value</b> and <b>transfer the collateral</b> to the escrow smart contract in order to receive the original NFT on his wallet. Once the rental is over, the <b>renter</b> must <b>return the NFT</b> in order to <b>receive the collateral</b> otherwise the <b>owner</b> can <b>claim the collateral</b>.
                <br/><br/>
                On <b>non-collateralized loans</b>, the <b>owner</b> follows the same steps as in the collateralized option but doesn't define a collateral value. The <b>renter</b> will then <b>pay</b> the <b>rental value</b> and receive a <b>wrapped NFT with the same metadata as the original one</b>. Once the <b>rental period is over</b>, the <b>wrapped token becomes invalid</b> and the <b>lenter can withdraw the NFT</b>.
                <br/><br/>
                A <b>Marketplace Tracker Smart Contract</b> has also been deployed with the purpose of storing all the deployed Rent Smart Contracts addresses thus <b>making</b> the process of <b>fetching rental information decentralized</b>.
                <br/><br/>
                The dApp's frontend was built using <b>Next.js</b>, <b>TypeScript</b>, <b>Tailwind CSS</b> and <b>Radix UI</b> while the Smart Contracts where developed and integrated using <b>Solidity</b>, <b>Hardhat</b>, <b>ethers.js</b>, <b>wagmi</b> and <b>viem</b>. It's currently deployed on the <b>Sepolia Testnet</b>.
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