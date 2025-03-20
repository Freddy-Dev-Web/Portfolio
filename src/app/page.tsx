import Image from 'next/image'
import Button from './components/Button'
import Footer from './components/footer'


const Work = () => {
  return (
    <>
      <div className='pt-50 pb-25 px-15 '>
        <div className='flex flex-col justify-center  items-center pb-30'>
          <p className='text-1xl pb-10'>
            Our Mission
          </p>
          <p className='font-serif leading-13 text-center text-5xl'>
          Creating spaces that are <br /> comfortable, memorable and <br /> inspiring.
          </p>
        </div>

          {/* Residential Section */} 
          <div>
            <div className='relative h-150'>
              <Image 
              src='/images/residential/Stocksy_txp9c995bd1cMI100_Large_1192028 (1).jpg' 
              alt="Residential Design"
              className='object-cover'
              fill
              />
            </div>

            <div className='flex justify-between py-25'>
              {/* Left text */}
              <div className=''>
                <h3 className='font-serif text-4xl pb-10'>
                Residential Design
                </h3>
                <p className='text-[18px]'>
                Apartments, homes and vacation properties.
                </p>
              </div>
              {/* Right Button */}
              <div>
                <Button />
              </div>
            </div>
          </div>

          {/* Commercial Section */}
          <div>
            <div className='relative h-130'>
              <Image 
              src='/images/commercial/Stocksy_txp9c995bd1cMI100_Large_1188910.jpg' 
              alt="Commercial Design"
              className='object-cover'
              fill
              />
            </div>

            <div className='flex justify-between py-25'>
              {/* Left text */}
              <div className=''>
                <h3 className='font-serif text-4xl pb-10'>
                Commercial Design
                </h3>
                <p className='text-[18px]'>
                Creative and inviting retail and hospitality environments
                </p>
              </div>
              {/* Right Button */}
              <div>
                <Button />
              </div>
            </div>
          </div>

          {/* Experiential Section */}
          <div>
            <div className='relative h-150 translate-y-10 '>
              <Image 
              src='/images/experiential/download+copy+2 (1).jpeg' 
              alt="Commercial Design"
              className='object-cover '
              fill
              />
            </div>

            <div className='flex justify-between pt-30'>
              {/* Left text */}
              <div className=''>
                <h3 className='font-serif text-4xl pb-10'>
                Experiential Design
                </h3>
                <p className='text-[18px]'>
                Temporary and permanent branded spaces.
                </p>
              </div>
              {/* Right Button */}
              <div>
                <Button />
              </div>
            </div>
          </div>
      </div>

      {/* Footer Section */}
      <div>
        <Footer/>
      </div>
    </>
  )
}
export default Work