/* eslint-disable @next/next/no-img-element */
'use client'

import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Slider = () => {
    const content = [
        {
            img: '/slider61.jpg',
            content: 'Coconut Oil'
        }, {
            img: '/slider62.jpg',
            content: 'Fruit Juices'
        }, {
            img: '/slider66.jpg',
        },
    ]

    const [current, setCurrent] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => prev === content.length - 1 ? 0 : prev + 1)
        }, 10000);

        return () => clearInterval(interval)
    }, [])

    const handleLeftArrow = () => {
        setCurrent(prev => prev === 0 ? content.length - 1 : prev - 1)
    }

    const handleRightArrow = () => {
        setCurrent(prev => prev === content.length - 1 ? 0 : prev + 1)
    }

    return (
        <div className='lg:h-96 overflow-hidden relative'>
            <div className="flex w-max h-full ">
                {
                    content.map((item, index) => (
                        <div key={index} className="w-screen h-full transition-all duration-1000 ease-in-out"
                            style={{ translate: `-${current * 100 + 5}vw` }}
                        >
                            <div className="w-full h-full">
                                <img src={item.img} alt='' width={'100%'} height={'100%'} className='object-contain md:object-cover' />
                                <div className="absolute left-16 md:left-32 inset-0 flex flex-col justify-center gap-3 md:gap-8">
                                    <p className='text-sm md:text-5xl font-bold'>{item.content}</p>
                                    {item.content &&
                                        <Link href={'/'} className='py-2 px-2 md:py-3 md:px-8 bg-black text-white w-max text-xs md:text-sm font-semibold hover:bg-mainColor transition-colors duration-500'>SHOP NOW!</Link>}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-white drop-shadow cursor-pointer scale-100 md:scale-125" onClick={handleLeftArrow}>
                <ChevronLeft />
            </div>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white drop-shadow cursor-pointer scale-100 md:scale-125" onClick={handleRightArrow}>
                <ChevronRight />
            </div>
        </div>
    )
}

export default Slider
