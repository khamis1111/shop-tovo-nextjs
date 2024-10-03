'use client'

import { Minus, Plus } from "lucide-react"
import { useState } from "react"

const QuantityProduct = () => {
    const [quantity, setQuantity] = useState(1)
    const stock = 4

    const add = () => {
        if (quantity !== stock) {
            setQuantity(prev => prev + 1)
        }
    }
    const remove = () => {
        if (quantity !== 1) {
            setQuantity(prev => prev - 1)
        }
    }

    return (
        <div className="">
            <p className='mb-4'>Choose a quantity</p>
            <div className="flex justify-between flex-wrap items-center gap-5">
                <div className='flex gap-5'>
                    <div className="flex items-center gap-7 rounded-full py-3 px-4 bg-black w-max text-white">
                        <button className='text-xl disabled:cursor-not-allowed' disabled={quantity === 1} onClick={() => remove()}>
                            <Minus size={20} />
                        </button>
                        <p>{quantity}</p>
                        <button className='text-xl disabled:cursor-not-allowed' disabled={quantity === stock} onClick={() => add()}>
                            <Plus size={20} />
                        </button>
                    </div>
                    <p className='text-sm font-semibold'>Only <span className='text-gray-500'>{stock} items</span> left! <br /> Do not miss it</p>
                </div>
                <button className='font-semibold text-sm ring-1 ring-black py-3 px-8 rounded-full w-full md:w-max hover:text-white hover:bg-mainColor hover:ring-mainColor transition-colors duration-100'>Add To Cart</button>
            </div>
        </div>
    )
}

export default QuantityProduct
