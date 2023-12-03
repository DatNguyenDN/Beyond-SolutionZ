import React from 'react'
import banner from '../../assets/image/banner.png'
const Hero = () => {
  return (
    <section id='hero' className="justify-center p-12  flex-col sm:p-16 "  >
       
            <h1 className="justify-center text-center  text-4xl pb-3 pt-9 sm:text-[40px] font-bold animate-fade-down animate-twice animate-duration-1000 animate-delay-100 animate-ease-in animate-normal">
                Empowering Your App is Journey to Success
            </h1>

            <img className='w-full h-auto  p-[5%] animate-fade-left animate-once animate-duration-500 animate-ease-in animate-normal '
            src={banner}
            alt='banner'
            />
   
    </section>
  )
}

export default Hero
