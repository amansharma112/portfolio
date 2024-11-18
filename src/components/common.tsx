import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface CustomLinkProps {
    href: string;
    title?: string;
    skill?: string;
    path?: string;
}

interface SkillLinkProps {
    skill?: string;
    path?: string;
}
export const CustomLink: React.FC<CustomLinkProps> = ({ href, title }) => {
    return (
        <Link className='w-[18rem]' href={href} >
            <div className='hover:bg-sky-100 pl-2 pr-2 rounded-full'>{title}</div>
        </Link>
    )
}

export const SkillLink: React.FC<SkillLinkProps> = ({ skill, path }) => {
    return (
        <div className='rounded-full border border-black hover:bg-sky-800 md:w-56  md:h-40 w-28 h-20 flex flex-col  text-center'>
            {/* <div className='rounded-full bg-sky-500 hover:bg-sky-800 md:w-56 gap-4 md:h-40 w-28 h-20 flex flex-col  text-center'> */}
            <h1>{skill}</h1>
            <div className=''>
                {path && <Image src={path} alt="" width={80} height={100} className='mx-auto rounded-full w-1/2' />}
            </div>
        </div>
    )
}

export const NavLink: React.FC<CustomLinkProps> = ({ href, title, skill }) => {
    return (
        <div className='  '><Link href={href} >{title}</Link></div>

    )
}