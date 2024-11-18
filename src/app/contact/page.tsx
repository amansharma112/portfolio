import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <>
    <Navbar/>
    <div className='mt-20'>
    <Contact/>
    </div>
    
    <div className='fixed bottom-0 left-0 right-0'>
    <Footer/>
    </div>
    
    </>
  )
}
