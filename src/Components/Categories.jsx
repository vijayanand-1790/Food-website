import React from 'react'
import {categories} from '../Data/data'

const Categories = () => {
  return (
    <div className='md:px-10 px-5 m-auto mb-20'>
        <h1 className='text-center md:text-5xl text-3xl font-bold'>Top Items</h1>
        <div className='max-w-7xl flex justify-center items-center mx-auto md:px-4 px-5 md:mt-12 mt-5'>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-5 mt-5'>
            {
                categories.map((item, index)=>
                    <div key={index} className='shadow-lg flex flex-row justify-between px-4 rounded-2xl gap-3'>
                        <h1 className='flex justify-center items-center font-bold lg:text-2xl md:text-lg'>{item.name}</h1>
                        <img src={item.image} className='md:w-25 w-13' alt="" />
                    </div>
                )
            }
        </div>
        </div>
    </div>
  )
}

export default Categories