'user client'
import React from 'react'
import Footer from '../components/footer'
import Image from 'next/image'

const CustomWebDevelopment = () => {


  
  return (
    <>
                    <div className="flex  justify-between pt-60 pb-25 px-10 xl:px-10 md:px-0 ">
                      {/* Left Section */}
                      <div className='font-serif text-4xl xl:text-4xl md:text-3xl '>
                        <h2>Custom Web Development</h2>
                      </div>
                      
                
                      {/* Right Section */}
                      <div>
                        {/* Text */}
                        <div className='text-[18px] xl:text-[18px] md:text-[15px]  leading-8'>
                          <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <br /> laborum.
                            <br /><br />
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br /> laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi <br /> architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas <br /> sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione <br /> voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit <br /> amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut <br /> labore et dolore magnam aliquam.
                          </p>
                        </div>
                    </div>
                      </div>
        
                      {/* Image */}
                    <div className='grid grid-cols-2 px-13 xl:px-13 md:px-0  '>
                        <div className='relative h-150 xl:h-150 md:h-80 md:w-full  w-150 lg:w-150 mt-5'>
                          <Image 
                          src="/imgs/CustomWebDevelopment/Custom.jpg" 
                          alt="about" 
                          className='object-cover'
                          fill
                          />
                        </div>
        
                        <div className='relative h-150 xl:h-150 md:h-80 md:w-full xl w-180 lg:w-150 mt-5 ml-'>
                          <Image 
                          src="/imgs/CustomWebDevelopment/Custom1.jpg" 
                          alt="about" 
                          className='object-cover'
                          fill
                          />
                        </div>
        
                        <div className='relative h-150 xl:h-150 md:h-80 md:w-full  w-150 lg:w-150 mt-3'>
                          <Image 
                          src="/imgs/CustomWebDevelopment/Custom2.jpg" 
                          alt="about" 
                          className='object-cover'
                          fill
                          />
                        </div>
        
                        <div className='relative h-150 xl:h-150 md:h-80 md:w-full  w-180 lg:w-150 mt-3 ml-'>
                          <Image 
                          src="/imgs/CustomWebDevelopment/Custom3.jpg" 
                          alt="about" 
                          className='object-cover'
                          fill
                          />
                        </div>
                        </div>
        
                      {/* Credits Section */}
                      <div className='px-15 lg:px-13 pt-25 pb-15'>
                          <p className='text-3xl font-serif pb-10'>Credits</p>
                        <div className='space-y-5'>
                        <div className='space-y-2'>
                          <p>Firstname Lastname</p>
                          <span>Titre / Role</span>
                        </div>
        
                        <div className='space-y-1'>
                          <p>Firstname Lastname</p>
                          <span>Titre / Role</span>
                        </div>
        
                        <div className='space-y-1'>
                          <p>Firstname Lastname</p>
                          <span>Titre / Role</span>
                        </div>
                        </div>
                      </div>
        
        
                    {/* Footer Section */}
                    <div>
                      <Footer />
                    </div>
                    </>
  )
}

export default CustomWebDevelopment