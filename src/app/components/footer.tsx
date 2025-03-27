import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-gray-200 py-15 xl:py-16 md:py-13 px-15 md:px-5  flex flex-col md:flex-row justify-between items-start md:items-center">
      
      {/* Left Footer */}
      <div className="space-y-8 mb-8 md:mb-0">
        <h3 className="font-serif text-2xl xl:text-2xl md:text-xl">Centro<span className="text-blue-400">Dev</span></h3>
        <div>
          <p className="tracking-10 leading-7 xl:leading-7 md:leading-5">
            123 Demo Street <br />
            Brooklyn, NY 12345
          </p>
        </div>

        <div>
          <p>
            Made with{' '}
            <span>
              <Link href="/" className="underline underline-offset-2">
                Centro<span className="text-blue-400">Dev</span>
              </Link>
            </span>
          </p>
        </div>
      </div>

      {/* Right Footer */}
      <div className="flex flex-col  md:flex-row space-y-8 md:space-y-0 md:space-x-20">
        <div className="leading-8 mb-8 md:mb-0 space-y-5">
          <h3 className="font-serif text-2xl">About</h3>
          <div className="text-lg leading-8 tracking-wider">
            <Link href="/work" className="underline hover:text-blue-400 underline-offset-3">Work</Link><br />
            <Link href="/about" className="underline hover:text-blue-400 underline-offset-3">Who we are</Link><br />
            <Link href="/contact" className="underline hover:text-blue-400 underline-offset-3">Contact Us</Link>
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="font-serif text-2xl">Projects</h3>
          <div className="leading-8">
            <Link href="/CustomWebDevelopment" className="underline hover:text-blue-400 underline-offset-3">Custom Web Development</Link><br />
            <Link href="/MobileAppDevelopment" className="underline hover:text-blue-400 underline-offset-3">Mobile App Development</Link><br />
            <Link href="/uiuxDesign" className="underline hover:text-blue-400 underline-offset-3">UI/UX Design</Link><br />
            <Link href="/API-BackendDevelopment" className="underline hover:text-blue-400 underline-offset-3">API & Backend Development</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
