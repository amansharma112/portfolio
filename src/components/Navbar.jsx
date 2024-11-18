'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { CustomLink, NavLink } from './common'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (


    <>
      <div className=''>
        <nav className='z-20  h-16  flex justify-between items-center rounded-lg  max-w-8xl mx-auto fixed top-0 left-0 w-full right-0  '>
          <div className='text-2xl ml-2'><h1>Aman Kumar Sharma</h1></div>
          {isOpen === true ? <div className='md:hidden fixed left-0 top-0 w-[20rem] h-screen bg-red-300'>
            <div className='md:hidden flex flex-col gap-y-12  place-items-center pl-2 pr-2'>
              <CustomLink href='/' title='Home' />
              {/* <Link className=' w-[18rem]   '  href="/about" ><div className='hover:bg-sky-100 pl-2 pr-2 rounded-full' >About</div></Link>
            <Link className=' w-[18rem]   '  href="/project" ><div className='hover:bg-sky-100 pl-2 pr-2 rounded-full'>Project</div></Link>
            <Link className=' w-[18rem]   '  href="/contact" ><div className='hover:bg-sky-100 pl-2 pr-2 rounded-full'>Contact</div></Link> */}
              <CustomLink href='/about' title='About' />
              <CustomLink href='/project' title='Project' />
              <CustomLink href='/contact' title='Contact' />
              <CustomLink href='/blog' title='Blog' />
              <CustomLink href='/skill' title='Skill' />


            </div>
          </div> :
            ''}
          <div className='md:hidden' ><button onClick={toggleMenu}><Image src="/menu.png" alt="Not found" height={30} width={70} /></button>

          </div>




          <div className='md:block hidden'>
            <div className='flex justify-between gap-4  place-items-center pl-2 pr-2 pr-12  '>
              {/* <div className='  '><Link  href="/" >Home</Link></div> */}

              <NavLink href='/' title='Home' />
              <NavLink href='/about' title='About' />
              <NavLink href='/project' title='Project' />
              <NavLink href='/contact' title='Contact' />
              <NavLink href='/blog' title='Blog' />
              <NavLink href='/skill' title='Skill' />

              {/* <div className='  '><Link  href="/about" >About</Link></div>
              <div className='  '><Link  href="/project" >Project</Link></div>
              <div className='  '><Link  href="/contact" >Contact</Link></div>
              <div className='  '><Link  href="/blog" >Blog</Link></div>
              <div className='  '><Link  href="/skill" >Skill</Link></div> */}

            </div>
          </div>


        </nav>
      </div>
    </>

  )
}
