import { useState } from 'react'
import { data } from '../Data/data'

const Food = () => {

    const [foods, setFoods] = useState(data)

    // function for filtering by type
    const filterByType = (category) =>{
        setFoods(
            data.filter((item)=>
            item.category === category)
        )
    }

    // function for filtering by price
    const filterByPrice = (price) =>{
        setFoods(
            data.filter((item)=>
            item.price === price)
        )
    }


    return (

        <div className='max-w-7xl px-5 mx-auto md:mt-25 mt-15 md:mb-25 mb-15'>
            <h1 className='md:text-5xl text-3xl font-bold text-center mb-1'>Top Rated Menu Items</h1>

            <div className='flex md:flex-row flex-col justify-between sm:space-y-6 md:px-7 md:mt-15 mt-5'>
                <div className='space-y-2'>
                    <h3 className='font-bold md:text-xl text-lg'>Filter By Type</h3>
                    <div className='flex flex-row gap-2 flex-wrap mb-5 md:text-lg text-base font-bold'>
                        <button onClick={()=>setFoods(data)} className='text-orange-600 border-2 rounded px-2 hover:bg-orange-600 duration-300 hover:text-white duration- cursor-pointer'>All</button>
                        <button onClick={()=>filterByType('burger')} className='text-orange-600 border-2 rounded px-2 hover:bg-orange-600 duration-300 hover:text-white duration- cursor-pointer'>Burgers</button>
                        <button onClick={()=>filterByType('pizza')} className='text-orange-600 border-2 rounded px-2 hover:bg-orange-600 duration-300  hover:text-white duration- cursor-pointer'>Pizzas</button>
                        <button onClick={()=>filterByType('salad')} className='text-orange-600 border-2 rounded px-2 hover:bg-orange-600 duration-300 hover:text-white duration- cursor-pointer'>Salads</button>
                        <button onClick={()=>filterByType('chicken')} className='text-orange-600 border-2 rounded px-2 hover:bg-orange-600 duration-300 hover:text-white duration- cursor-pointer'>Chickens</button>
                    </div>
                </div>

                <div className='space-y-2'>
                    <h3 className='font-bold md:text-xl text-lg'>Filter By Price</h3>
                    <div className='flex flex-row gap-2 flex-wrap md:text-lg text-base font-bold'>
                        <button onClick={()=>filterByPrice('$')} className='text-orange-600 border-2 rounded px-2 hover:bg-orange-600 duration-300 hover:text-white duration- cursor-pointer'>$</button>
                        <button onClick={()=>filterByPrice('$$')} className='text-orange-600 border-2 rounded px-2 hover:bg-orange-600 duration-300 hover:text-white duration- cursor-pointer'>$$</button>
                        <button onClick={()=>filterByPrice('$$$')} className='text-orange-600 border-2 rounded px-2 hover:bg-orange-600 duration-300 hover:text-white duration- cursor-pointer'>$$$</button>
                        <button onClick={()=>filterByPrice('$$$$')} className='text-orange-600 border-2 rounded px-2 hover:bg-orange-600 duration-300 hover:text-white duration- cursor-pointer'>$$$$</button>
                    </div>
                </div>
            </div>

            {/* Food cards */}

            <div className='grid md:grid-cols-4 grid-cols-2 md:px-5 px-1 mt-5 md:gap-10 gap-5'>
                {
                    foods.map((item, index) =>
                        <div key={index} className='shadow-lg rounded-xl border-1 border-neutral-500'>

                            <img src={item.image} alt="Img" className='w-full md:h-[200px] h-[120px] object-cover rounded-t-xl' />
                            <div className='flex justify-between md:p-3 p-1'>
                                <h3 className='md:font-bold font-base'>{item.name}</h3>
                                <p><span className='bg-orange-500 rounded-xl px-1 text-white md:text-lg text-sm'>{item.price}</span></p>
                            </div>


                        </div>
                    )
                }
            </div>

        </div>

    )
}

export default Food