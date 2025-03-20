import React from 'react'
import Image from 'next/image'
import Footer from '../components/footer'

const PageServices = () => {
  return (
    <>
    <div className='pt-20 pb-10 px-15'>
    <div className='flex justify-between  pb-40 pt-40'>
      {/* Left Section */}
      <div className='leading-8'>
        <h1 className='text-5xl text-bold pb-10'>Our Services</h1>
        <p className='text-[18px]'>
        It all begins with an idea. Maybe you want to launch a  business.<br /> Maybe you want to turn a hobby into something more. Or maybe<br /> you have a creative project to share with  the world. Whatever it is,<br /> the way you tell your story online can  make all the difference.
        </p>
      </div>

      {/* Right Section */}
      <div className='leading-8'>
        <section className='pb-25'>
        <h2 className='font-serif text-bold text-3xl pb-8'>Dream it.</h2>
        <p className='text-[18px]'>
        It all begins with an idea. Maybe you want to launch a <br /> business. Maybe you want to turn a hobby into  something <br /> more. Or maybe you have a creative project to share with the <br /> world. Whatever it is, the way you tell your story online can <br /> make all the difference.
        </p>
        </section>

        <section className='pb-25'>
        <h2 className='font-serif text-bold text-3xl pb-8'>Build it.</h2>
        <p className='text-[18px]'>
        It all begins with an idea. Maybe you want to launch a<br /> business. Maybe you want to turn a hobby into  something<br /> more. Or maybe you have a creative project to share with <br /> the world. Whatever it is, the way you tell your story online can<br /> make all the difference.
        </p>
        </section>

        <section>
        <h2 className='font-serif text-bold text-3xl pb-8'>Grow it.</h2>
        <p className='text-[18px]'>
        It all begins with an idea. Maybe you want to launch a <br /> business. Maybe you want to turn a hobby into something <br /> more. Or maybe you have a creative project to share with <br /> the world. Whatever it is, the way you tell your story online can <br /> make all the difference.
        </p>
        </section>
      </div>
    </div>
    
    {/* Image Section */}
    <div className='relative h-130'>
       <Image 
       src='/images/commercial/Stocksy_txp9c995bd1cMI100_Large_1188910.jpg' 
       alt="Commercial Design"
       className='object-cover'
       fill
       />
      </div>
    </div>

    {/* Footer Section */}
    <Footer />
    </>
  )
}

export default PageServices