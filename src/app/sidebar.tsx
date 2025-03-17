import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='w-screen h-20 bg-white flex justify-between items-center px-15 py-20'>
        <div className='text-3xl'>
        <Link href="/">CentroDev</Link>
        </div>
        <div className='flex items-center space-x-5'>
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/ourservice">Our Services</Link>
        <Link href="/projet">Projects</Link>
        <div className='bg-black text-white  px-10 py-5 rounded font-bold'>
            <button>
                <Link href="/contact">Contact Us</Link>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Menu