import React from 'react'
import Header from './../common/Header'
const Hero = () => {
    return (
        <div className='bg-hero-bg bg-cover bg-center min-h-screen pb-[512px]'>
            <img className="w-full" src="./assets/image/png/navbar-logo-img.png" alt="nav-img" />
            <Header />
            <div className='max-w-[1072px] mx-auto w-full'>
                <h1 className='max-w-[1072px] text-white font-bold xl:text-[61px] text-5xl text-center !leading-[136.2%] lg:mt-[68px] mt-12 lg:mb-[15px] mb-3'>Driving Transformation for Performance and Passion Within </h1>
                <p className='max-w-[960px] lg:text-[22px] mx-auto text-xl text-center text-white'>The future of electric mobility is here. TDK and NEOM McLaren Formula E</p>
            </div>
        </div>
    )
}

export default Hero