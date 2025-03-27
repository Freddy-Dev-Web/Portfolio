import React from 'react'
import Image from 'next/image'
import Footer from '../components/footer'

const PageServices = () => {
  return (
    <>
      <div className='pt-20 pb-10 px-5 md:px-10 xl:px-20'>
        {/* Introduction Section */}
        <div className='flex flex-col md:flex-row justify-between pb-40 pt-30'>
          {/* Left Section */}
          <div className='leading-8 xl:leading-8 md:leading-5'>
            <h1 className='text-5xl xl:text-5xl md:text-3xl text-bold text-blue-400 pb-10 '>Our Services</h1>
            <p className='text-[18px] xl:text-[18px] md:text-[13px]'>
              It all begins with an idea. Maybe you want to launch a business.<br /> 
              Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. 
              Whatever it is, the way you tell your story online can make all the difference.
            </p>
          </div>

          {/* Right Section (Image) */}
          <div className='relative h-80 md:h-96 xl:h-130 mt-10 md:mt-0'>
            <Image 
              src='/service1.jpeg' 
              alt="Ours Services"
              className='object-cover'
              fill
            />
          </div>
        </div>

        {/* Service Sections */}
        <div>
          {/* Custom Web Development */}
          <section className='pb-25 flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-1/2 md:pr-10'>
              <h2 className='font-serif text-bold text-3xl xl:text-3xl md:text-xl text-blue-400 pb-8'>Custom Web Development</h2>
              <p className='text-[18px] xl:text-[18px] md:text-[13px]'>
                It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. 
                Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
              </p>
            </div>
            <div className='relative w-full md:w-1/2 h-64 md:h-80 mt-8 md:mt-0'>
              <Image 
                src='/imgs/CustomWebDevelopment/Custom.jpg' 
                alt="Custom Web Development"
                className='object-cover'
                fill
              />
            </div>
          </section>

          {/* Mobile App Development */}
          <section className='pb-25 flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-1/2 md:pr-10'>
              <h2 className='font-serif text-bold text-3xl xl:text-3xl md:text-xl text-blue-400 pb-8'>Mobile App Development</h2>
              <p className='text-[18px] xl:text-[18px] md:text-[13px]'>
                It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.
                Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
              </p>
            </div>
            <div className='relative w-full md:w-1/2 h-64 md:h-80 mt-8 md:mt-0'>
              <Image 
                src='/imgs/MobileAppDevelopment/MobileApp.jpg' 
                alt="Mobile App Development"
                className='object-cover'
                fill
              />
            </div>
          </section>

          {/* UI/UX Design */}
          <section className='pb-25 flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-1/2 md:pr-10'>
              <h2 className='font-serif text-bold text-3xl xl:text-3xl md:text-xl text-blue-400 pb-8'>UI/UX Design</h2>
              <p className='text-[18px] xl:text-[18px] md:text-[13px]'>
                It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.
                Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
              </p>
            </div>
            <div className='relative w-full md:w-1/2 h-64 md:h-80 mt-8 md:mt-0'>
              <Image 
                src='/imgs/UI-UX Design/Design.webp' 
                alt="UI/UX Design"
                className='object-cover'
                fill
              />
            </div>
          </section>

          {/* API & Backend Development */}
          <section className='flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-1/2 md:pr-10'>
              <h2 className='font-serif text-bold text-3xl xl:text-3xl md:text-xl text-blue-400 pb-8'>API & Backend Development</h2>
              <p className='text-[18px] xl:text-[18px] md:text-[13px]'>
                It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.
                Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
              </p>
            </div>
            <div className='relative w-full md:w-1/2 h-64 md:h-80 mt-8 md:mt-0'>
              <Image 
                src='/imgs/API & BACKEND Development/Api.jpeg' 
                alt="API & Backend Development"
                className='object-cover'
                fill
              />
            </div>
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  )
}

export default PageServices
