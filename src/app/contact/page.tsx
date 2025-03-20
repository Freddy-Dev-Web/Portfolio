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
      <div>
        <div>
        <h2>Contact Us</h2>
        <p>
        If you have any questions or comments, please contact us via email <br /> or phone, or send us a message using the contact form.
        </p>
        </div>
          
          {/* Email Part */}
        <div>
          <h2>
            Email
          </h2>
          <span>
          email@example.com
          </span>
        </div>

        {/* Phone Part */}
        <div>
          <h2>
            Phone
          </h2>
          <span>
          (555) 555-5555
          </span>
        </div>

        {/* Icone */}
        <div>
        <FaFacebookF />
        <IoLogoInstagram />
        <FaTwitter />
        </div>
      </div>
      {/* Right Part */}
      <div>
        {/* Name Section */}
        <div>
          <h3>Name <span className='text-gray-300'>(required)</span></h3>
          <div className='flex items-center space-x-3 '>
          <div>
          <p>First Name</p>
          <input 
          type="text" 
          className='bg-gray-100 rounded-lg py-2 px-13'
          required
          />
          </div>
          <div>
          <p>Last Name</p>
          <input 
          type="text" 
          className='bg-gray-100 rounded-lg py-2 px-13 '
          required/>
          </div>
          </div>
        </div>

        {/* Email Section */}
        <div>
          <div>
          <p>Email <span>(required)</span></p>
          <input 
          type="text" 
          className='bg-gray-100 rounded-lg py-2 px-13'
          required
          />
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