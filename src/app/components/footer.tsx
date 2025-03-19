import React from 'react'

const footer = () => {
  return (
    <div className='bg-gray-100 flex justify-between items-center py-16 px-19'>
        {/* Left Footer */}
        <div className='space-y-8'>
            <h3 className='text-2xl'>CentroDev</h3>
            <div >
                <p className='tracking-10 leading-7'>
                123 Demo Street <br />
                Brooklyn, NY 12345
                </p>
            </div>

            <div>
            <p>Made with  
                <span>
                <a href="#" className='underline underline-offset-3'> CentroDev</a>
                </span>
            </p>
            </div>
        </div>

        {/* Right Footer */}
        <div className='flex items-center space-x-30'>
            <div className='space-y-8'>
                <h3 className='text-2xl'>About</h3>
                <div className='text-1.5xl leading-8 tracking-wider'>
                    <a href="#" className='underline underline-offset-3'>work</a><br />
                    <a href="#" className='underline underline-offset-3'>Who we are</a><br />
                    <a href="#" className='underline underline-offset-3'>Contact Us</a>
                </div>
            </div>

            <div className='space-y-8'>
                <h3 className='text-2xl'>Pojects</h3>
                <div className='leading-8'>
                    <a href="#" className='underline underline-offset-3'>Residential Design</a><br />
                    <a href="#" className='underline underline-offset-3'>Commercial Design</a><br />
                    <a href="#" className='underline underline-offset-3'>Experiential Design</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer