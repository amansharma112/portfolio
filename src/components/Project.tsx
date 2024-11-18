import Image from 'next/image'
import React from 'react'

export default function Project() {

    const ourProjects = [
        {
            id: 1,
            title: "Ecom Project",
            description: 'this that why what how where there here',
            technology: ["react", "node",],
            responsibility: ["1 lorem is this 45 ", "2 lorem is that 87", "3 lorem is what 234"],
            path: "/image/feature.jpg"
        },
        {
            id: 2,
            title: "MyStore",
            description: 'Now are you , are you okay , so that, this',
            technology: ["React", "Node","Mongodb", "Express" , ],
            responsibility: ["4 lorem is tghfj ", "5 lorem isgjhk87", "6 oai tohso lahf4"],
            path: "/image/feature.jpg"
        },
        {
            id: 3,
            title: "E-KYC App",
            description: 'This is the best app',
            technology: ["Next", "Nest", "AWS", "SQL"],
            responsibility: ["4 lorem is tghfj ", "5 lorem isgjhk87", "6 oai tohso lahf4"],
            path: "/image/feature.jpg"
        },
        {
            id: 4,
            title: "News App",
            description: 'This is a News paper app',
            technology: ["React", "Node", "Express", "MongoDB"],
            responsibility: ["Every thing is ok", "lak;sdjf kjfh ;akjhd"],
            path: "/image/feature.jpg"
        }
    ]


    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-6xl my-28'><h1>Projects</h1></div>
            <div className=' space-y-8'>
                {ourProjects.map((project) => (
                    <div key={project.id} className='ml-6  border-solid shadow-md w-4/5  mt-4 sticky top-24 left-0 bg-white'>
                        <div className='flex gap-4'>
                            {/* <div className='w-24 h-24 bg-sky-100'> */}
                            <Image src={project.path} alt="Not found" width={100} height={100} />
                            {/* </div> */}
                            <div>
                                <div className='text-2xl font-extrabold'><h1>{project.title}</h1></div>
                                <div><p>{project.description}</p></div>
                            </div>
                        </div>
                        <div>
                            <div className='text-xl font-extrabold mt-3'>
                                <h1>Technology</h1>
                            </div>
                            <div className='md:flex md:gap-8 gap-2 ml-4'>
                                {/* <div className='rounded-b-lg w-20 text-center pt-1 h-8 md:bg-amber-200'>React</div>
                                <div className='rounded-b-lg w-20 text-center pt-1 h-8 md:bg-amber-200'>Node js</div>
                                <div className='rounded-b-lg w-20 text-center pt-1 h-8 md:bg-amber-200'>Express</div>
                                <div className='rounded-b-lg w-20 text-center pt-1 h-8 md:bg-amber-200'>MongoDB</div>
                                <div className='rounded-b-lg w-20 text-center pt-1 h-8 md:bg-amber-200'>JavaScript</div> */}
                                {project.technology.map((value, index) => (
                                    <div className='rounded-b-lg w-20 md:text-center pt-1 h-8 md:bg-amber-200' key={index}>{value}</div> 
                                ))}

                            </div>
                        </div>
                        <div>
                            <div className='text-xl font-extrabold mt-3'><h1>Responsibilities:</h1></div>
                            <div className='ml-3'>
                                <ul>
                                    {project.responsibility.map((value, index) => (
                                        <li key={index}>{value}</li> // Render each responsibility
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
