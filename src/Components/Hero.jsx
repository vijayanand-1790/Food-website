import React from 'react'
import HeroIMG from '../assets/HeroIMG.jpg'

const Hero = () => {
    return (
        <div className='md:px-10 px-4 mx-auto md:pt-15 pt-18'>
            <div className='relative max-h-[500px]'>
                <div className='absolute w-full h-full flex flex-col justify-center text-white md:pl-8 pl-4'>
                    <h2 className='lg:text-7xl md:text-6xl text-3xl font-bold'>The Best</h2>
                    <h2 className='lg:text-7xl md:text-6xl text-3xl font-bold'>Foods Delivered</h2>
                </div>
                <img className='w-full max-h-[500px] object-cover rounded-xl' src={HeroIMG} alt="" />
            </div>
        </div>


    )
}

export default Hero