import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className=' max-w-7xl mx-auto md:px-14 px-6 bg-black text-white py-15 flex md:flex-row flex-col justify-between items-center leading-10'>
                <div className='flex flex-col md:max-w-1/4 max-w-120'>
                    <h1 className='text-2xl font-bold'>Foodie</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti maxime ad eaque accusantium repudiandae,
                        provident enim reiciendis aperiam doloribus nemo.</p>
                </div>


                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold'>Quick Links</h1>
                    <ul>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>Foods</li>
                        <li className='cursor-pointer'>Services</li>
                        <li className='cursor-pointer'>About us</li>
                    </ul>
                </div>

                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold'>Our branches</h1>
                    <ul>
                        <li className='cursor-pointer'>Chromepet branch</li>
                        <li className='cursor-pointer'>Nungambakkam branch</li>
                        <li className='cursor-pointer'>Guindy Branch</li>
                        <li className='cursor-pointer'>Vandalur branch</li>
                    </ul>
                </div>
            </div>

            <p className='md:text-center md:px-0 px-2 text-white bg-black pb-12 pt-5'>Copyright @Foodie - 2025. All Rights Reserved.</p>
        </div>
    )
}

export default Footer