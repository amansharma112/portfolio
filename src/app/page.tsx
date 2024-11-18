import Image from "next/image";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Link from "next/link";
import About from "@/components/About";





export default function Home() {
  return (
    <div className="">
      {/* <div className="relative"> */}
      <div className="">
        <Navbar />
      </div>

      <div className="container mx-auto z-40 md:flex md:justify-between md:items-center pl-4 pr-4 mt-16">
        <div>
          <h1 className="text-[70px]  md:text-[110px] leading-[4rem] md:leading-[6rem] pl-3">MERN <br /> Stack <br /> Developer</h1>
        </div>
        <div className="w-1/2 mt-8  relative items-center">
          {/* <Image
            src="/image/feature.jpg"
            alt="Not found"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            className="ml-8 w-20 h-20"
          /> */}
          <Image src="/image/feature.jpg" alt="Not found" height={400} width={600} className="ml-8" />
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap gap-6 justify-between  pl-8 pr-8 mb-8 mt-8">
        <div>
          <h3>Lorem, ipsum dolor.</h3>
          <h3>Lorem, ipsum dolor.</h3>
          <h3>Lorem, ipsum dolor.</h3>
        </div>
        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, <br /> soluta obcaecati? Accusamus autem id iure <br /> modi nostrum iusto qui consequuntur.</p></div>
        <div className="w-24 h-8 bg-sky-900 border rounded-xl text-center place-content-center"><a href="/A2.pdf" target="_blank" className="md:pl-4 text-white text-center">Resume</a></div>
      </div>
      <Skill />
      <div className="container mx-auto mt-4">
        <div className="text-6xl ml-6 mb-8"><h1>Projects</h1></div>
        <div className='mx-auto p-4 border-solid shadow-md w-4/5 mt-4  '>
          <div className='flex gap-4 '>
            {/* <div className='md:w-24  bg-sky-100'> */}
            <Image src="/image/feature.jpg" alt="Not found" height={200} width={100} className="" />
            {/* </div> */}
            <div className="">
              <div className='text-2xl font-extrabold'><h1>Ecom App</h1></div>
              <div><p>Lorem ipsum dolor sit amet consectetur.</p></div>
            </div>
          </div>
          <div className="">
            <div className='text-xl font-extrabold mt-3'>
              <h1>Technologies:</h1>
            </div>
            <div className='flex flex-wrap md:gap-8  '>
              <div className='rounded-b-lg w-20  md:text-center pt-1 h-8 md:bg-amber-200'>React</div>
              <div className='rounded-b-lg w-20  md:text-center pt-1 h-8 md:bg-amber-200'>Node js</div>
              <div className='rounded-b-lg w-20  md:text-center pt-1 h-8 md:bg-amber-200'>Express</div>
              <div className='rounded-b-lg w-20  md:text-center pt-1 h-8 md:bg-amber-200'>MongoDB</div>
              <div className='rounded-b-lg w-20  md:text-center pt-1 h-8 md:bg-amber-200'>JavaScript</div>
            </div>
          </div>
          <div>
            <div className='text-xl font-extrabold mt-3'><h1>Responsibilities:</h1></div>
            <div className='ml-3'>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
          <div className="text-sky-600 text-right"><Link rel="stylesheet" href="/project" >See More...</Link></div>
        </div>
      </div>
      <About />

      <Footer />
    </div>
  );
}


