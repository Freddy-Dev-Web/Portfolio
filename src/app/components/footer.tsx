import React from 'react'
import Link from 'next/link'

const footer = () => {
  return (
    <div className='bg-gray-200 flex justify-between items-center py-16 lg:py-14 lg:px-11 px-19'>
        {/* Left Footer */}
        <div className='space-y-8'>
            <h3 className='font-serif text-2xl'>Centro<span className='text-blue-400'>Dev</span></h3>
            <div >
                <p className='tracking-10 leading-7'>
                123 Demo Street <br />
                Brooklyn, NY 12345
                </p>
            </div>

            <div>
            <p>Made with  <span> 
                <Link href='/' className='underline underline-offset-2'>
                 Centro<span className='text-blue-400'>Dev</span>
                </Link>
                </span>
            </p>
            </div>
        </div>

        {/* Right Footer */}
        <div className='flex items-center space-x-30 lg:space-x-25 '>
            <div className='leading-8 lg:space-y-4'>
                <h3 className='font-serif text-2xl'>About</h3>
                <div className='text-1.5xl  leading-8 tracking-wider'>
                    <Link href="/work" className='underline hover:text-blue-400 underline-offset-3'>work</Link><br />
                    <Link href="/about" className='underline hover:text-blue-400 underline-offset-3'>Who we are</Link><br />
                    <Link href="/contact" className='underline hover:text-blue-400 underline-offset-3'>Contact Us</Link>
                </div>
            </div>

            <div className='space-y-8 lg:space-y-4'>
                <h3 className='font-serif text-2xl'>Pojects</h3>
                <div className='leading-8'>
                    <Link href="/CustomWebDevelopment" className='underline hover:text-blue-400 underline-offset-3'>Custom Web Development</Link><br />
                    <Link href="/MobileAppDevelopment" className='underline hover:text-blue-400 underline-offset-3'>Mobile App Development</Link><br />
                    <Link href="/uiuxDesign" className='underline hover:text-blue-400 underline-offset-3'>UI/UX Design</Link><br />
                    <Link href="/API-BackendDevelopment" className='underline hover:text-blue-400 underline-offset-3'>API & Backend Development</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer