import React from 'react'
import { SkillLink } from './common'
import Link from 'next/link'
import { backend, frontend } from '@/utils/data'

export default function Skill() {

    return (
        <>
            <div className='container mx-auto '>
                <div className='text-6xl ml-8 mb-7'><h1>Skills</h1></div>
                <div className='flex justify-center md:gap-16 gap-4'>
                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {frontend.map((project) => (
                            <div key={project.id} className=''>
                                <a href={project.url}>
                                    <SkillLink skill={project.skill} path={project.path} />
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {backend.map((project) => (
                            <div key={project.id} className=''>
                                <SkillLink skill={project.skill} path={project.path} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
