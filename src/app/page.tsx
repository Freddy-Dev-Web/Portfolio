import Image from 'next/image'
import Link from 'next/link'
import Button from './components/Button'
import Footer from './components/footer'

const Principale = () => {
  return (
    <>
      <div className='pt-40 pb-10 px-15 md:px-12'>
        {/* Section d'introduction */}
        <div className='flex flex-col items-center text-center pb-16'>
          <p className='text-4xl sm:text-5xl font-semibold text-blue-400 pb-5'>
            Hello
          </p>
          <p className='flex flex-col font-serif text-center text-lg sm:text-2xl leading-8 sm:leading-10'>
            I am a Full-stack Web & Mobile developer who<br />
            transforms your ideas into high-performance <br />
            and innovative digital solutions.<br />
            Ready to make your idea a reality? 
            <span>
            <Link href='/contact' className='font-semibold hover:text-blue-400 cursor-pointer'>
              Contact me
            </Link>
              </span>
          </p>
        </div>

        {/* Sections des services */}
        {[
          {
            title: 'Custom Web Development',
            description: 'Full-stack solutions optimized for performance and SEO',
            imgSrc: '/imgs/CustomWebDevelopment/Custom.jpg',
            link: '/CustomWebDevelopment',
          },
          {
            title: 'Mobile App Development',
            description: 'One codebase for IOS, Android, and PWA',
            imgSrc: '/imgs/MobileAppDevelopment/MobileApp.jpg',
            link: '/MobileAppDevelopment',
          },
          {
            title: 'UI/UX Design',
            description: 'User-centric design, tested and optimized',
            imgSrc: '/imgs/UI-UX Design/Design.webp',
            link: '/uiuxDesign',
          },
          {
            title: 'API & Backend Development',
            description: 'Robust backends to support thousands of users',
            imgSrc: '/imgs/API & BACKEND Development/Backend.jpg',
            link: '/API-BackendDevelopment',
          },
        ].map((service, index) => (
          <div key={index} className='mb-12'>
            {/* Image */}
            <div className='relative w-full h-[250px] md:h-[350px]'>
              <Image
                src={service.imgSrc}
                alt={service.title}
                className='object-cover object-center w-full h-full'
                layout='fill'
              />
            </div>

            {/* Contenu textuel et bouton */}
            <div className='flex flex-col md:flex-row items-start md:items-center gap-y-4 justify-between py-6'>
              {/* Texte à gauche */}
              <div className='text-left'>
                <h3 className='font-serif text-2xl md:text-3xl pb-2'>{service.title}</h3>
                <p className='text-lg'>{service.description}</p>
              </div>
              {/* Bouton à droite en desktop, sous le texte en mobile */}
              <div className='self-end md:self-auto'>
                <Link href={service.link} className='cursor-pointer'>
                  <Button />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pied de page */}
      <Footer />
    </>
  )
}

export default Principale
