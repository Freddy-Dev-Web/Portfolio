import Image from 'next/image'
import Link from 'next/link'
import Button from './components/Button'
import Footer from './components/footer'


const Principale = () => {
  return (
    <>
      <div className='pt-45 pb-20  px-15 '>
        <div className='flex flex-col justify-center  items-center pb-20 '>
          <p className='text-5xl  pb-5 font-semibold text-blue-400'>
            Hello
          </p>
          <p className='font-serif leading-11   text-center text-4xl'>
           I am a Full-stack Web & Mobile developer who<br /> transforms your ideas in high-performance <br /> and innovative digital solutions.<br /> Ready to make your idea a reality ?<br /> 
           <Link href='/contact'>
           <span className='font-semibold hover:text-blue-400 cursor-pointer'>
            Contact-me
            </span>
           </Link>.
          </p>
        </div>

          {/* Custom Web Development Section */} 
          <div className=''>
            <div className='relative h-280 '>
              <Image 
              src='/imgs/CustomWebDevelopment/Custom.jpg' 
              alt="CustomWebDevelopment"
              className='object-cover'
              fill
              />
            </div>

            <div className='flex   justify-between pt-20 pb-10'>
              {/* Left text */}
              <div className='text-center '>
                <h3 className='font-serif text-4xl   pb-8'>
                Custom Web Development
                </h3>
                <p className='text-[18px] '>
                Full-stack solutions optimized for performance and SEO
                </p>
              </div>
              {/* Right Button */}
              <div className=''>
                <Link 
                href='/CustomWebDevelopment' 
                 className='cursor-pointer'
                >
                <Button />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile App Development Section */}
          <div>
            <div className='relative h-250 '>
              <Image 
              src='/imgs/MobileAppDevelopment/MobileApp.jpg' 
              alt="Commercial Design"
              className='object-cover'
              fill
              />
            </div>

            <div className='flex  justify-between pt-25 pb-5'>
              {/* Left text */}
              <div className=' text-center '>
                <h3 className='font-serif text-4xl   pb-8'>
                Mobile App Development 
                </h3>
                <p className='text-[18px] '>
                One codebase for IOS, Android, and PWA
                </p>
              </div>
              {/* Right Button */}
              <div className=''>
              <Link 
                href='/MobileAppDevelopment' 
                 className='cursor-pointer'
                >
                <Button />
                </Link>
              </div>
            </div>
          </div>

          {/* UX/UI Design Section */}
          <div>
            <div className='relative h-280  translate-y-10 '>
              <Image 
              src='/imgs/UI-UX Design/Design.webp' 
              alt="Commercial Design"
              className='object-cover '
              fill
              />
            </div>

            <div className='flex  justify-between pt-30 pb-5'>
              {/* Left text */}
              <div className=''>
                <h3 className='font-serif text-4xl pb-8'>
                UI/UX Design
                </h3>
                <p className='text-[18px]'>
                User-centric design, tested and optimized
                </p>
              </div>
              {/* Right Button */}
              <div className=''>
              <Link 
                href='/uiuxDesign' 
                 className='cursor-pointer'
                >
                <Button />
                </Link>
              </div>
            </div>
          </div>

            {/* API & BACKEND Development Section */}
            <div>
            <div className='relative h-250  translate-y-10 '>
              <Image 
              src='/imgs/API & BACKEND Development/Backend.jpg' 
              alt="Commercial Design"
              className='object-cover '
              fill
              />
            </div>

            <div className='flex justify-between pt-25'>
              {/* Left text */}
              <div className='text-sm '>
                <h3 className='font-serif text-4xl pb-8'>
                API & Backend Development
                </h3>
                <p className='text-[18px] '>
                Robust backends to support thousands of users
                </p>
              </div>
              {/* Right Button */}
              <div className='mt-4 '>
              <Link 
                href='/API-BackendDevelopment' 
                 className='cursor-pointer'
                >
                <Button />
                </Link>
              </div>
            </div>
          </div>

      </div>

      {/* Footer Section */}
      <div className=''>
        <Footer/>
      </div>
    </>
  )
}
export default Principale