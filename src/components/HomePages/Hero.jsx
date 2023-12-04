import React from 'react'
import banner from '../../assets/image/banner.png'
import 'animate.css';
const Hero = () => {
  return (
    <section id='hero' className="justify-center p-12  flex-col sm:p-16 "  >
       
            <h1 className="justify-center text-center  text-4xl pb-3 pt-9 max-sm:text-[15px] font-bold animate__animated animate__backInLeft">
                Empowering Your App is Journey to Success
            </h1>

            <img className='w-full h-auto  p-[5%] animate__animated animate__backInRight '
            src={banner}
            alt='banner'
            />
   
    </section>
  )
}

export default Hero
