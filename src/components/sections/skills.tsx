import Image from 'next/image'

import React from '../../../public/react.svg'
import Next from '../../../public/next.svg'
import Expo from '../../../public/expo.svg'
import JavaScript from '../../../public/javascript.svg'
import TypeScript from '../../../public/typescript.svg'
import HTML from '../../../public/html.svg'
import CSS from '../../../public/css.svg'
import Tailwind from '../../../public/tailwind.svg'
import Bootstrap from '../../../public/bootstrap.svg'
import Node from '../../../public/node.svg'
import GraphQL from '../../../public/graphql.svg'
import C from '../../../public/c.svg'
import Solidity from '../../../public/solidity.svg'
import Hardhat from '../../../public/hardhat.svg'
import Ethers from '../../../public/ethers.svg'

import Search from '../../../public/search.svg'
import Star from '../../../public/star.svg'
import Checkered from '../../../public/checkered.svg'
import Paperplane from '../../../public/paperplane.svg'
import Game from '../../../public/game.svg'
import Hammer from '../../../public/hammer.svg'
import Grid from '../../../public/grid.svg'
import Update from '../../../public/update.svg'

import SizingButtons from '../sizingButtons'
import { ReactNode } from 'react'

export default function Skills() {
  return (
    <div className='w-[80rem] flex flex-row bg-dirty-white border-highlight-gray border-[0.1rem] rounded-xl 2xl:scale-[1.15] 2xl:my-5'>
        <div className='w-1/4 p-3 flex flex-col justify-between items-center relative'>
            <SizingButtons />
            <div className='w-full mt-9'>
                <div className='h-[2.3rem] mx-1.5 mb-4 rounded-lg bg-light-gray flex flex-row items-center justify-start pl-2.5'>
                    <Search width={17} height={17} viewBox='0 0 22.8984 23.1211'/>
                    <p className='ml-3'>Search</p>
                </div>
                <CategoryInfo name='Discover'>
                    <Star width={19} height={19} viewBox='0 0 26.0251 26.543'/>
                </CategoryInfo>
                <CategoryInfo name='Create'>
                    <Checkered width={19} height={16} viewBox='0 0 20.8125 23.0039'/>
                </CategoryInfo>
                <CategoryInfo name='Work'>
                    <Paperplane width={19} height={18} viewBox='0 0 24.5508 25.9102'/>
                </CategoryInfo>
                <CategoryInfo name='Play'>
                    <Game width={19} height={20} viewBox='0 0 33.832 21.2461'/>
                </CategoryInfo>
                <CategoryInfo name='Develop'>
                    <Hammer width={19} height={19} viewBox='0 0 28.719 27.448'/>
                </CategoryInfo>
                <CategoryInfo name='Categories'>
                    <Grid width={19} height={17} viewBox='0 0 21.5742 21.5977'/>
                </CategoryInfo>
                <CategoryInfo name='Updates'>
                    <Update width={19} height={19} viewBox='0 0 20.8008 25.8867'/>
                </CategoryInfo>
            </div>
            <div className='w-full flex flex-row justify-start items-center'>
                <Image src={'/profile.png'} alt="Rodrigo Fernandes" width={40} height={40}/>
                <h4 className='font-semibold ml-2.5'>Rodrigo Fernandes</h4> 
            </div>
        </div>
        <div className='p-10 flex flex-1 flex-col bg-white border-highlight-gray border-l-[0.1rem] rounded-r-xl'>
            <h2 className='font-semibold text-4xl mb-2.5'>Skills</h2>
            <div className='w-full h-[0.0625rem] bg-highlight-gray'>
                <br/>
            </div>
            <div>
                <p className='text-lg font-medium text-black mt-2.5 mb-1'>Frontend</p>
                <div className='w-full grid grid-cols-4 gap-y-2 gap-x-0'>
                    <TechInfo name='React' Image={React}/>
                    <TechInfo name='Next.js' Image={Next}/>
                    <TechInfo name='React Native' Image={React}/>
                    <TechInfo name='Expo' Image={Expo}/>
                    <TechInfo name='JavaScript' Image={JavaScript}/>
                    <TechInfo name='TypeScript' Image={TypeScript}/>
                    <TechInfo name='HTML' Image={HTML}/>
                    <TechInfo name='CSS' Image={CSS}/>
                    <TechInfo name='Tailwind CSS' Image={Tailwind}/>
                    <TechInfo name='Bootstrap' Image={Bootstrap}/>
                </div>
            </div>
            <div>
                <p className='text-lg font-medium text-black mt-2.5 mb-1'>Backend & Blockchain</p>
                <div className='w-full grid grid-cols-4 gap-y-2 gap-x-0'>
                    <TechInfo name='Node.js' Image={Node}/>
                    <TechInfo name='GraphQL' Image={GraphQL}/>
                    <TechInfo name='C' Image={C}/>
                    <TechInfo name='Solidity' Image={Solidity}/>
                    <TechInfo name='Hardhat' Image={Hardhat}/>
                    <TechInfo name='ethers.js' Image={Ethers}/>
                </div>
            </div>
        </div>
    </div>
  );
}

interface TechInfoProps {
    name: string;
    Image: any;
}

interface CategoryInfoProps {
    name: string;
    children?: ReactNode;
}

const TechInfo = ({ name, Image }: TechInfoProps) => (
    <div className='w-52 flex flex-row items-top justify-start'>
        <Image width={60} height={60} viewBox="0 0 60 60"/>
        <p className='ml-4 mt-1.5 text-lg font-medium text-black'>{name}</p>
    </div>
)

const CategoryInfo = ({ name, children }: CategoryInfoProps) => (
    <div className='w-full flex flex-row items-center justify-start pl-3 my-3'>
        {children}
        <p className='ml-3 text-black'>{name}</p>
    </div>
)