import React from 'react'
import Footer from '../components/footer'
import Image from 'next/image'

const PageAbout = () => {
  return (
    <>
    <div className="flex  justify-between pt-60 pb-25 px-10">
      {/* Left Section */}
      <div className='font-serif text-5xl'>
        <h2>Who we are</h2>
      </div>

      {/* Right Section */}
      <div>
        {/* Text */}
        <div className='text-[18px] leading-8'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <br /> laborum.
            <br /><br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br /> laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi <br /> architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas <br /> sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione <br /> voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit <br /> amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut <br /> labore et dolore magnam aliquam.
          </p>
        </div>
        {/* Image */}
        <div className='relative h-180 w-180 mt-25'>
          <Image 
          src="/images/about-us/about-us.jpg" 
          alt="about" 
          className='object-cover'
          fill
          />
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

export default PageAbout