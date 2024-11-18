import About from '@/components/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <>
    <Navbar/>
    <div className='mt-24'>
    <About/>
    </div>
    
    <div className='mt-[100px]'>
    <Footer/>
    </div>
    
    </>
  )
}
