'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Navigation = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false) 
  const [openDropdown, setOpenDropdown]= useState<string | null>(null)

  return (
    <div className='fixed md:inline-block top-0 left-0 z-50 w-screen'>
      <nav className='flex justify-between items-center w-screen h-20 bg-white px-10 md:px-5 md:py-8   py-10 '>
        {/*Link Logo */}
        <div>
          <Link
            href='/'
            className='relative group px-2 py-1 transition-colors'
          >
            <span
              className={`text-5xl md:text-2xl font-serif `}
            >
              Centro<span className='text-blue-500'>Dev</span>
            </span>
          </Link>
        </div>

                                    {/* Liens principaux (cachés sur petits écrans) */}
        <div
          className={`hidden md:flex items-center space-x-3 md:space-x-2 text-sm md:text-[12px] lg:text-[20px]`}
        >
          {/* Link Work */}
          <Link
            href='/work'
            className='relative group px-2 py-1 transition-colors'
          >
            <span className={`text-base hover:bg-blue-500 border-blue-400 hover:border-blue-400 py-2 px-4 hover:px-4 hover:py-2 rounded-lg hover:rounded-lg transition duration-100 hover:font-bold hover:text-white  ${
              pathname === '/work'
              ? 'group-hover:text-white border-blue-400   py-2 px-4 text-white bg-blue-400 rounded-lg  font-bold  underline underline-offset-3'
              : 'text-black'
            }
              `}>
                Work
            </span>
          </Link>


            {/* Link About */}
            <Link
            href='/about'
            className='relative group px-2 py-1 transition-colors'
          >
            <span className={`text-base hover:bg-blue-500 border-blue-400 hover:border-blue-400 py-2 px-4 hover:px-4 hover:py-2 rounded-lg hover:rounded-lg transition duration-100 hover:font-bold hover:text-white ${
              pathname === '/about'
              ? 'group-hover:text-white border-blue-400   py-2 px-4 text-white bg-blue-400 rounded-lg  font-bold  underline underline-offset-3'
              : 'text-black'
            }
              `}>
                About
            </span>
          </Link>

            {/* Link Our Services */}
            <Link
            href='/ourservices'
            className='relative group px-2 py-1 transition-colors'
          >
            <span className={`text-base hover:bg-blue-500 border-blue-400 hover:border-blue-400 py-2 px-4 hover:px-4 hover:py-2 rounded-lg hover:rounded-lg transition duration-100 hover:font-bold hover:text-white ${
              pathname === '/ourservices'
              ? 'group-hover:text-white border-blue-400   py-2 px-4 text-white bg-blue-400 rounded-lg  font-bold  underline underline-offset-3'
              : 'text-black'
            }
              `}>
                Our Services
            </span>
          </Link>

            {/* Link Projects */}
          <div 
          className='relative group'
          >
          <Link
            href='/project'
            className='relative group px-2 py-1 transition-colors'
          >
            <span className={`text-base hover:bg-blue-500 border-blue-400 hover:border-blue-400 py-2 px-4 hover:px-4 hover:py-2 rounded-lg hover:rounded-lg transition duration-100 hover:font-bold hover:text-white ${
              pathname === '/project'
              ? 'group-hover:text-white border-blue-400   py-2 px-4 text-white bg-blue-400 rounded-lg  font-bold  underline underline-offset-3'
              : 'text-black'
            }
              `}>
                Projects
            </span>
          </Link>

                                                  {/* Sous-menu deroulant */}
          <div 
          className='absolute  top-7 right-0 transform -translate-x-33  left-0  pt-1   w-48 opacity-0 invisible group-h  hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-400 group-hover:visible'
          >
            <div className='bg-white text-sm'>
            {/* Link Custom Web Development */}
              <Link 
              href='/CustomWebDevelopment'
              className='block px-1 py-1 hover:text-white text-gray-700 rounded-lg hover:bg-blue-400'
              >
                Custom Web 
              </Link>

              {/* Link Mobile App Development */}
              <Link 
              href='/MobileAppDevelopment'
              className='block px-1 py-1 hover:text-white text-gray-700 rounded-lg hover:bg-blue-400'
              >
                Mobile App 
              </Link>

              {/* Link UX/UI Design */}
              <Link 
              href='/uiuxDesign'
              className='block px-2 py-2 hover:text-white text-gray-700 rounded-lg hover:bg-blue-400'
              >
                UX/UI Design
              </Link>

              {/* Link API & BACKEND Development  */}
              <Link 
              href='/API-BackendDevelopment'
              className='block px-2 py-2 hover:text-white text-gray-700 rounded-lg hover:bg-blue-400'
              >
                API & Backend
              </Link>
            </div>

          </div>
          </div>

          {/* Link Contact Us */}
          <Link
            href='/contact'
            className='relative group px-[30px] py-[20px] transition-colors bg-blue-400 hover:bg-blue-600 rounded-lg font-bold cursor-pointer text-white'
          >
            Contact Us
          </Link>
        </div>

                                                     {/* Menu déroulant pour petits écrans */}
        {/* {isMenuOpen && (
          <div className='absolute top-20 left-0 w-full bg-white shadow-md md:hidden'>
            <div className='flex flex-col items-start space-y-2 p-4'>
              <Link
                href='/work'
                className={`block px-2 py-1 transition-colors ${
                  pathname === '/work'
                    ? 'text-gray-600 underline underline-offset-3'
                    : 'text-black'
                }`}
              >
                Work
              </Link>

              <Link
                href='/about'
                className={`block px-2 py-1 transition-colors ${
                  pathname === '/about'
                    ? 'text-gray-600 underline underline-offset-3'
                    : 'text-black'
                }`}
              >
                About
              </Link>

              <Link
                href='/ourservices'
                className={`block px-2 py-1 transition-colors ${
                  pathname === '/ourservices'
                    ? 'text-gray-600 underline underline-offset-3'
                    : 'text-black'
                }`}
              >
                Our Services
              </Link>

              <Link
                href='/project'
                className={`block px-2 py-1 transition-colors ${
                  pathname === '/project'
                    ? 'text-gray-600 underline underline-offset-3'
                    : 'text-black'
                }`}
              >
                Projects
              </Link>

              <Link
                href='/contact'
                className='block bg-black text-white text-[10px] font-bold rounded-md py-10 px-15 cursor-pointer'
              >
                Contact Us
              </Link>
            </div>
          </div>
        )} */}

                                                {/* Menu deroulant (mobile seulement) */}
          <div className='-mr-2 flex md:hidden'>
            <button 
            type='button'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'
            aria-controls='mobile-menu'
            aria-expanded={isMenuOpen}
            >
              <span className='sr-only'>Ouvrir le menu</span>
              {/* Icon hamburger */}
              <svg
              className={`h-6 w-6 transform transition duration-300 ease-in-out ${isMenuOpen ? 'hidden' : 'rotate-180'}`}
              fill='none'
              viewBox='0 0 24 24'
              stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>

                {/* Icon fermeture (X) */}
                <svg 
                className={`h-6 w-6 transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-180 transition duration-300' : 'hidden'}`}
                fill='none'
                viewBox='0 0 24 24'
                stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
            </button>
          </div>

          {/* Menu Mobile */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id='mobile-menu'>
            <div className='absolute right-0 z-10 mt-2 w-full origin-top-right transform px-2 transition md:hidden'>
              <div className='divide-y-2 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='px-2 pt-2 pb-3'>
                  {/* Link Work */}
                    <Link
                      href='/work'
                      onClick={() => setIsMenuOpen(false)}
                      className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100'
                    >
                      <span className={`text-base ${
                        pathname === '/work'
                        ? 'group-hover:text-gray-500 text-gray-600 underline underline-offset-3'
                        : 'text-black'
                      }
                        `}>
                          Work
                      </span>
                    </Link>

                    {/* Link About */}
                    <Link
                      href='/about'
                      onClick={() => setIsMenuOpen(false)}
                      className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100'
                    >
                      <span className={`text-base ${
                        pathname === '/about'
                        ? 'group-hover:text-gray-500 text-gray-600 underline underline-offset-3'
                        : 'text-black'
                      }
                        `}>
                          About
                      </span>
                    </Link>

                    {/* Link Our Services */}
                    <Link
                      href='/ourservices'
                      onClick={() => setIsMenuOpen(false)}
                      className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100'
                      >
                      <span className={`text-base ${
                        pathname === '/ourservices'
                        ? 'group-hover:text-gray-500 text-gray-600 underline underline-offset-3'
                        : 'text-black'
                      }
                        `}>
                          Our Services
                      </span>
                    </Link>
                    
                      {/* Link Projects avec sous-menu */}
                      <div className='relative '>
                      <button
                      onClick={() => setOpenDropdown(openDropdown === 'project' ? null : 'project')}
                      className='w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100'
                      aria-expanded={openDropdown === "project"}
                      aria-controls="mobile-project-dropdown"
                      >
                      Projects
                      <span 
                      className='float-right transform transition-transform duration-200'>
                      {openDropdown === 'project' ? '-' : '+'}
                      </span>
                      </button>

                      {/* Sous-liens */}
                      <div 
                      id='mobile-projects-dropdown'
                      className={`overflow-hidden transition-all  duration=300 ease-in-out ${
                      openDropdown === 'project' ? 'max-h-40' : 'max-h-0' } `}
                      >
                      <div className='ml-4 mt-1 space-y-1'>

                      {/* Back button */}
                    

                      {/* Sous-liens Custom Web Development */}
                      <Link
                      href='/CustomWebDevelopment'
                      onClick={() => {
                      setIsMenuOpen(false) 
                      setOpenDropdown(null)
                      }}
                      className='block px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50'
                      >
                      <span className={`text-base ${
                        pathname === '/CustomWebDevelopment'
                        ? 'group-hover:text-gray-500 text-gray-600 underline underline-offset-3'
                        : 'text-black'
                      }
                      `}>
                        Custom Web Development
                      </span>
                      </Link>

                      {/* Sous-liens Mobile App Development */}
                      <Link
                      href='MobileAppDevelopment'
                      onClick={() => {
                      setIsMenuOpen(false)
                      setOpenDropdown(null)
                      }}
                      className='block px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50'
                      >
                      <span className={`text-base ${
                        pathname === '/MobileAppDevelopment'
                        ? 'group-hover:text-gray-500 text-gray-600 underline underline-offset-3'
                        : 'text-black'
                      }
                      `}>
                        Mobile App Development
                      </span>
                      </Link>

                      {/* Sous-liens UI/UX Design */}
                      <Link
                      href='/uiuxDesign'
                      onClick={() => {
                      setIsMenuOpen(false)
                      setOpenDropdown(null)
                      }}
                      className='block px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50'
                      >
                      <span className={`text-base ${
                        pathname === '/uiuxDesign'
                        ? 'group-hover:text-gray-500 text-gray-600 underline underline-offset-3'
                        : 'text-blue-400'
                      }
                      `}>
                        UI/UX Design
                      </span>
                      </Link>

                      {/* Sous-liens API & Backend Development */}
                      <Link
                      href='/API-BackendDevelopment'
                      onClick={() => {
                      setIsMenuOpen(false)
                      setOpenDropdown(null)
                      }}
                      className='block px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50'
                      >
                      <span className={`text-base ${
                        pathname === '/API-BackendDevelopment'
                        ? 'group-hover:text-gray-500 text-gray-600 underline underline-offset-3'
                        : 'text-blue-400'
                      }
                      `}>
                        API & Backend Development
                      </span>
                      </Link>
                      </div>
                      </div>
                      </div>

                </div>
              </div>

            </div>
          </div>
      </nav>
    </div>
  )
}

export default Navigation