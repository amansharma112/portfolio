import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <>
            <div className='container mx-auto  max-w-7xl my-4 '>
                <div className='text-6xl ml-6 mt-8'><h1>About-Me</h1></div>
                <div className='md:flex place-items-center'>
                    <div className='md:w-1/2 w-10/12  md:ml-20'><Image src="/image/feature.jpg" alt="Not found" height={400} width={400} /></div>
                    <div className='md:w-1/2 w-[100vw]'>
                        <div className='mx-4'><p>I am passionate and dedicated web developer with a strong foundation in wev technologies. My goal to ccreate exceptional digital experiences that leave a lasting impact on users.</p></div>
                        <div className='mt-5'>

                            <div className='text-2xl mx-4 font-extrabold'><h1>Education</h1></div>
                            <div className='mx-4 mt-4 space-y-4'>
                                <div className=' '>
                                    <h3 className='text-xl font-bold'>Master of Computer Application (MCA)</h3>
                                    <ul>
                                        <li>IGNOU, Varanasi, UP </li>
                                        <li>2024-.....</li>
                                    </ul>
                                </div>

                                <div className=' '>
                                    <h3 className='text-xl font-bold'>Bachelor of Technology (Electrical Engineering)</h3>
                                    <ul>
                                        <li>Ashoka Institute Of Technology & Management Varanasi, UP </li>
                                        <li>2017-2021</li>
                                    </ul>
                                </div>
                                <div className=' '>
                                    <h3 className='text-xl font-bold'>Higher Secondary Education (12th)</h3>
                                    <ul>
                                        <li>Toolika Public School, Ghazipur Uttar Pradesh</li>
                                        <li>2016</li>
                                    </ul>
                                </div>
                                <div className=' '>
                                    <h3 className='text-xl font-bold'>Secondary Education</h3>
                                    <ul>
                                        <li>Toolika Public School</li>
                                        <li>2014</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
