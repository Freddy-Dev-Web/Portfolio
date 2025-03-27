import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import Footer from '../components/footer'

const Contact = () => {
  return (
    <>
    <div className='pt-50 pb-30 px-4 lg:px-15'>
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center'>
        {/* Left Part */}
        <div className='space-y-12 lg:space-y-10 pb-45'>
          <div>
            <h2 className='text-5xl xl:text-5xl md:text-3xl font-serif pb-13'>Contact Us</h2>
            <p className='leading-8 xl:leading-8 md:leading-5 text-[18px] xl:text-[18px] md:text-[15px]'>
              If you have any questions or comments, please contact us via email <br /> or phone, or send us a message using the contact form.
            </p>
          </div>
          
          {/* Email Part */}
          <div>
            <h2 className='font-bold pb-1'>
              Email
            </h2>
            <span className='text-[17px] xl:text-[17px] md:text-[14px]'>
              email@example.com
            </span>
          </div>

          {/* Phone Part */}
          <div>
            <h2 className='font-bold pb-1'>
              Phone
            </h2>
            <span className='text-[17px] xl:text-[17px] md:text-[14px]'>
              (555) 555-5555
            </span>
          </div>

          {/* Icone */}
          <div className='flex items-center space-x-3 text-[20px]'>
            <FaFacebookF />
            <IoLogoInstagram />
            <FaTwitter />
          </div>
        </div>

        {/* Right Part */}
        <div className='space-y-5 xl:space-y-5 md:space-y-3 w-full lg:w-1/2'>
          {/* Name Section */}
          <div>
            <h3 className='pb-5'>Name <span className='text-gray-300'>(required)</span></h3>
            <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2'>
              {/* First Name */}
              <div className='flex-1'>
                <p className='pb-2'>First Name</p>
                <input 
                  type="text" 
                  className='bg-gray-100 rounded-lg py-2 pl-3 pr-15 xl:pr-15 md:pr-0 w-full'
                  required
                />
              </div>

              {/* Last Name */}
              <div className='flex-1'>
                <p className='pb-2 lg:pb-0'>Last Name</p>
                <input 
                  type="text" 
                  className='bg-gray-100 rounded-lg py-2 pl-3 pr-15 xl:pr-15 md:pr-0 w-full'
                  required
                />
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div>
            <p className='pb-2 lg:pb-0'>Email <span className='text-gray-300'>(required)</span></p>
            <input 
              type="email" 
              className='bg-gray-100 rounded-lg py-2 pl-3 pr-80 xl:pr-80 md:pr-53 w-full'
              required
            />
          </div>

          {/* Phone Section */}
          <div>
            <p className='pb-2'>Phone <span className='text-gray-300'>(required)</span></p>
            <input 
              type="text" 
              className='bg-gray-100 rounded-lg py-2 pl-3 pr-80 xl:pr-80 md:pr-53 w-full'
              required
            />
          </div>

          {/* Subject Section */}
          <div>
            <p className='pb-2'>Subject <span className='text-gray-300'>(required)</span></p>
            <input 
              type="text" 
              className='bg-gray-100 rounded-lg py-2 pl-3 pr-80 xl:pr-80 md:pr-50 w-full'
              required
            />
          </div>

          {/* Message Section */}
          <div>
            <p className='pb-2'>Message <span className='text-gray-300'>(required)</span></p>
            <textarea
              className='bg-gray-100 rounded-lg pb-10 pt-3 pl-3 pr-80 xl:pr-80 md:pr-50 w-full' 
              name="Message"
              required
            />
          </div>

          {/* Button Section */}
          <div className='pt-5'>
            <button className='bg-black text-white text-sm font-bold rounded-md py-6 xl:py-6 md:py-3 px-11 xl:px-11 md:px-7 w-full'>
              Submit
            </button>
          </div>
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

export default Contact
