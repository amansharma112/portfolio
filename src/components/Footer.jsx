import React from 'react'
import Contact from './Contact'

export default function Footer() {
  return (
    <>
      <div className='md:flex justify-between mx-auto place-items-center pl-3 pr-3 bg-slate-200 text-black'>
        <div className='place-items-center md:w-1/2'>
          <div className='text-2xl pt-5'>
            <h1>Contect Me</h1>
          </div>
          <div className=''>
          <h2>83, Badhanpura</h2>
            <h2>Bhawarkol, Ghapzipur</h2>
            <h2>UP, Pin: 233231</h2>
          </div>


        </div>
        <Contact />
        <div className='place-items-center md:w-1/2'>
          <div className='text-2xl'>
            <h1>Social Media</h1>
          </div>
          <div className=' place-content-start'>
            <h2>Lorem ipsum dolor sit.</h2>
            <h2>Lorem ipsum dolor sit.</h2>
            <h2>Lorem ipsum dolor sit.</h2>
          </div>
        </div>
      </div>
    </>
  )
}
