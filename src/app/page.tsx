import Image from 'next/image';
import Button from './components/Button'
import Footer from './components/footer'


export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen pt-50 pb-15 px-5">
        <span className="text-1.5xl">
          Our Mission
        </span>
        <div className=" text-5xl text-center pt-10 leading-15">
          <h1>
               Creating spaces that are <br /> comfortable, memorable and <br /> inspiring.
          </h1>
        </div>

        {/* Residential Section */}
        <div>
          <section className='pt-30'>
            <div className=''>
              <Image 
              src="/img/residential/los-angeles.jpg" 
              alt="los-angeles" 
              width={1200}
              height={100}
              />
            </div>

            <div className='flex justify-between items-center pt-15'>
              <div className=''>
              <div className='text-4xl'>
              <h2>
                Residential Design
              </h2>
              </div>
              <div className='pt-10 text-1xl'>
              <span>
              Apartments, homes and vacation properties.
              </span>
              </div>
              </div>

              {/* Button Section */}
              <div>
              <Button />
              </div>
            </div>
          </section>

            {/* Commercial Section */}
          <section className='pt-30'>
            <div>
              <Image 
              src="/img/commercial/blog-1.jpg" 
              alt="blog-1" 
              width={1200}
              height={100}
              />
            </div>

            <div className='flex justify-between items-center pt-15'>
              <div>
              <div className='text-4xl'>
              <h2>
                Commercial Design
              </h2>
              </div>
              <div className='pt-10 text-1xl'>
              <span>
              Apartments, homes and vacation properties.
              </span>
              </div>
              </div>

              {/* Buttton Section */}
              <Button />
            </div>
          </section>
          
          {/* Experiential Section */}
          <section className='pt-30'>
            <div>
              <Image 
              src="/img/experiential/deco3.jpg" 
              alt="los-angeles" 
              width={1200}
              height={100}
              />
            </div>

            <div className='flex justify-between items-center pt-15'>
              <div>
              <div className='text-4xl'>
              <h2>
                Experiential Design
              </h2>
              </div>
              <div className='pt-10 text-1xl'>
              <span>
              Apartments, homes and vacation properties.
              </span>
              </div>
              </div>

              {/* Button Section */}
              <Button />
            </div>
          </section>
        </div>

    </div>
        <div>
          {/* Footer Section */}
        <Footer />
        </div>
    </>
  );
}




