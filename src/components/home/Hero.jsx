import React from 'react'
import Header from './../common/Header'
const Hero = () => {
    return (
        <div className='bg-hero-bg bg-cover bg-center xl:pb-[527px] lg:pb-[657px] pb-[378.95px]'>
           <div className=' bg-deepBlue'>
            <img className="w-full max-w-[1440px] mx-auto max-h-[42px] block max-lg:hidden" src="./assets/image/png/navbar-logo-img.png" alt="nav-img" />
            </div> 
            <Header />
            <div className='max-w-[1072px] mx-auto w-full px-3'>
                <h1 className='max-w-[1072px] text-white font-bold lg:text-[61px] md:text-4xl text-[30px] text-center !leading-[136.2%] xl:mt-[68px] lg:mt-[71px] md:mt-12 mt-[39px] lg:mb-[15px] mb-[14px]'>Driving Transformation for Performance and Passion Within </h1>
                <p className='max-w-[960px] w-full lg:text-[22px] max-sm:px-7 mx-auto md:text-xl sm:text-lg text-base !leading-[136.36%] text-center max-lg:pt-[7px] text-white'>The future of electric mobility is here. TDK and NEOM McLaren Formula E</p>
            </div>
        </div>
    )
}

export default Hero