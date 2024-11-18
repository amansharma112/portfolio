import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'
import React from 'react'


export default function page() {
  return (
    <>
    <Navbar/>
    <Project/>
    <div className='mt-[80px]'>
    <Footer/>
    </div>
    
    </>
  )
}
