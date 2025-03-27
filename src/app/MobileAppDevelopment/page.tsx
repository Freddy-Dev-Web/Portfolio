import React from 'react'
import Footer from '../components/footer'
import Image from 'next/image'

const MobileAppDevelopment = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between pt-60 pb-25 px-10 lg:px-13">
        {/* Left Section */}
        <div className='font-serif text-4xl mb-8 lg:mb-0'>
          <h2 className='text-blue-400'>Mobile App Development</h2>
        </div>

        {/* Right Section */}
        <div>
          {/* Text */}
          <div className='text-[18px] lg:text-[15px] leading-8'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <br /> laborum.
              <br /><br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br /> laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi <br /> architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas <br /> sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione <br /> voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit <br /> amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut <br /> labore et dolore magnam aliquam.
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-10 xl:px-13 md:px-0'>
        <div className='relative h-150 lg:h-150 w-full'>
          <Image 
            src="/imgs/MobileAppDevelopment/MobileApp1.jpg" 
            alt="Mobile App Development 1"
            className='object-cover'
            layout='fill'
          />
        </div>

        <div className='relative h-150 lg:h-150 w-full'>
          <Image 
            src="/imgs/MobileAppDevelopment/MobileApp2.jpg" 
            alt="Mobile App Development 2"
            className='object-cover'
            layout='fill'
          />
        </div>

        <div className='relative h-150 lg:h-150 w-full'>
          <Image 
            src="/imgs/MobileAppDevelopment/MobileApp3.jpg" 
            alt="Mobile App Development 3"
            className='object-cover'
            layout='fill'
          />
        </div>

        <div className='relative h-150 lg:h-150 w-full'>
          <Image 
            src="/imgs/MobileAppDevelopment/MobileApp4.jpg" 
            alt="Mobile App Development 4"
            className='object-cover'
            layout='fill'
          />
        </div>
      </div>

      {/* Credits Section */}
      <div className='px-10 xl:px-13 pt-25 pb-15'>
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

export default MobileAppDevelopment
