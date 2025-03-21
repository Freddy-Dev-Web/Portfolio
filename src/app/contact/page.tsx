import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import Footer from '../components/footer'




const PageContact = () => {
  return (
    <>
    <div className='flex justify-between items-center pt-50 pb-30 px-15'>
      {/* Left Part */}
      <div className='space-y-12 pb-45'>
        <div>
        <h2 className='text-5xl font-serif pb-13'>Contact Us</h2>
        <p className='leading-8 text-[18px]'>
        If you have any questions or comments, please contact us via email <br /> or phone, or send us a message using the contact form.
        </p>
        </div>
          
          {/* Email Part */}
        <div>
          <h2 className='font-bold pb-1'>
            Email
          </h2>
          <span className='text-[17px]'>
          email@example.com
          </span>
        </div>

        {/* Phone Part */}
        <div>
          <h2 className='font-bold pb-1'>
            Phone
          </h2>
          <span className='text-[17px]'>
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
      <div className='space-y-5'>
        {/* Name Section */}
        <div className=''>
          <h3 className='pb-5'>Name <span className='text-gray-300'>(required)</span></h3>
          <div className='flex items-center space-x-2'>

            {/* First Name */}
          <div>
          <p className='pb-2'>First Name</p>
          <input 
          type="text" 
          className='bg-gray-100 rounded-lg py-2 px-8'
          required
          />
          </div>

          {/* Last Name */}
          <div>
          <p className='pb-2'>Last Name</p>
          <input 
          type="text" 
          className='bg-gray-100 rounded-lg py-2 px-8 '
          required/>
          </div>
          </div>
        </div>

        {/* Email Section */}
        <div>
          <div>
          <p className='pb-2'>Email <span>(required)</span></p>
          <input 
          type="email" 
          className='bg-gray-100 rounded-lg py-2 pr-83'
          required
          />
          </div>
        </div>

        {/* Phone Section */}
        <div>
          <div>
          <p className='pb-2'>Phone <span>(required)</span></p>
          <input 
          type="text" 
          className='bg-gray-100 rounded-lg py-2 pr-83'
          required
          />
          </div>
        </div>

        {/* Subject Section */}
        <div>
          <div>
          <p className='pb-2 '>Subject <span>(required)</span></p>
          <input 
          type="text" 
          className='bg-gray-100 rounded-lg py-2 pr-83'
          required
          />
          </div>
        </div>

        {/* Phone Section */}
        <div>
          <div>
          <p className='pb-2'>Message <span>(required)</span></p>
          <textarea
          className='bg-gray-100 rounded-lg py-7 pr-87' 
          name="Message"
          required
          />

          </div>
          {/* Button Section */}
          <div className='pt-5'>
            <button className='bg-black text-white text-sm font-bold rounded-md py-6 px-11'>
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

export default PageContact