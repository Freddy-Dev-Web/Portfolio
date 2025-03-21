'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navigation = () => {
  const pathname = usePathname()
  

  return (
    <div className='fixed top-0 left-0 z-50 w-screen'>
      <nav className='flex justify-between items-center w-screen h-20 bg-white px-15 py-15 space-x-6'>
          {/* Link Left */}
        <div>
        <Link
        href='/'
        className='relative group px-2 py-1 transition-colors'
        >
          <span className={`text-3xl font-serif ${
           pathname === '/' ? 'group-hover:text-gray-600' : 'text-black'
          }`}>
            CentroDev
          </span>
        </Link>
        </div>

          {/* Link Right */}
        <div className='flex items-center space-x-3 text-2xl'>
          {/* Link wor */}
        <Link
        href='/work'
        className='relative group px-2 py-1 transition-colors '
        >
          <span className={`text-base active:underline ${
           pathname === '/work' 
           ? 'group-hover:text-gray-600 text-gray-600 underline underline-offset-3' 
           : 'text-black '
          }`}>
            Work
          </span>
        </Link>

        {/* Link about */}
        <Link
        href='/about'
        className='relative group px-2 py-1 transition-colors'
        >
          <span className={`text-base ${
           pathname === '/about' 
           ? 'group-hover:text-gray-600 text-gray-600 underline underline-offset-3' 
           : 'text-black'
          }`}>
            About
          </span>
        </Link>

        {/* Link OurServices */}
        <Link
        href='/ourservices'
        className='relative group px-2 py-1 transition-colors'
        >
          <span className={`text-base ${
           pathname === '/ourservices' 
           ? 'group-hover:text-gray-600 text-gray-600 underline underline-offset-3' 
           : 'text-black'
          }`}>
            Our Services
          </span>
        </Link>

        {/* Link Project */}
        <div className='relative group'>
        <Link
        href='/project'
        className='relative px-2 py-1 transition-colors font-medium flex items-center'
        >
          <span className={`text-lg ${
           pathname === '/project' 
           ? 'group-hover:text-gray-500 text-gray-600 underline underline-offset-3' 
           : 'text-black'
          }`}>
            Projects
          </span>
        </Link>

        {/* Sous-menu deroulant */}
        <div className='absolute top-10 left-0 pt-2 bg-white   w-48 opacity-0 invisible group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-300 group-hover:visible'>
            <div className='py-1'>
              <Link
              href='/residentialDesign'
              className='block  px-2 py-1 text-gray-700 hover:bg-gray-100'
              >
                Residential Design
              </Link>

              <Link
              href='/commercialDesign'
              className='block px-2 py-1 text-gray-700 hover:bg-gray-100'
              >
                Commercial Design
              </Link>

              <Link
              href='/experientialDesign'
              className='block px-2 py-1 text-gray-700 hover:bg-gray-100'
              >
                Experiential Design
              </Link>
            </div>
        </div>
        </div>

        <div>
          {/* Link Contact */}
        <Link
        href='/contact'
        className='relative group px-[40px] py-[25px] transition-colors bg-black hover:bg-gray-900 rounded-lg font-bold cursor-pointer'
        >
          <span className={`text-base text-white  ${
           pathname === '/contact' 
           ? ' hover:bg-gray-950 text-gray-600' 
           : 'text-black'
          }`}>
            Contact Us
          </span>
        </Link>
        </div>
        </div>
      </nav>
      </div>
  )
}

export default Navigation