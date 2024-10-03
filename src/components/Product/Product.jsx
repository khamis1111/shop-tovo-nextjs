/* eslint-disable @next/next/no-img-element */
import { Heart, ShoppingBag, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = () => {
    return (
        <div className='flex flex-col items-center gap-2 border h-full p-4 rounded-md relative group'>
            <Link href={'/1'} className="relative w-full h-full">
                <img src="/1.jpg" alt="" width={'100%'} height={'100%'} className='object-contain hover:scale-105 transition-transform duration-300' />
            </Link>
            <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? "text-yellow-400" : "text-gray-300"
                            }`}
                        fill="currentColor"
                    />
                ))}
            </div>
            <p className='font-semibold text-lg hover:text-mainColor transition-colors duration-300'>Fresh Red Apples</p>
            <p className='font-semibold text-lg'>$66.00<span className='text-gray-500 text-sm'>/1kg</span></p>

            <div className="absolute top-3 left-3 px-2 bg-mainColor/20 text-mainColor rounded">
                -32%
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-bgColor border hover:bg-mainColor hover:text-white transition-colors duration-300 cursor-pointer">
                    <Heart size={22} />
                </div>
                <div className="absolute top-14 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-bgColor border hover:bg-mainColor hover:text-white transition-colors duration-300 cursor-pointer">
                    <ShoppingBag size={20} />
                </div>
            </div>
        </div>
    )
}

export default Product
