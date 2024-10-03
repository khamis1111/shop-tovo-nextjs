"use client"

import Image from 'next/image'
import { useState } from 'react'

const ProductImages = () => {
    const [indexImg, setIndexImg] = useState(0)

    const images = [
        {
            url: '/1.jpg'
        }, {
            url: 'https://images.pexels.com/photos/28486840/pexels-photo-28486840/free-photo-of-turkish-coffee-and-tea-on-traditional-tray.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        }, {
            url: 'https://images.pexels.com/photos/5847663/pexels-photo-5847663.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        }, {
            url: 'https://images.pexels.com/photos/26926252/pexels-photo-26926252/free-photo-of-face-of-gorilla.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
    ]

    return (
        <div className="flex flex-col gap-5">
            <div className="relative h-96 border">
                <Image src={images[indexImg].url} alt='' fill className='object-contain rounded-md' sizes='100%' />
            </div>
            <div className="grid grid-cols-4 gap-5">
                {
                    images.map((item, i) => (
                        <div key={i} className="relative h-28 cursor-pointer border" onClick={() => setIndexImg(i)}>
                            <Image src={item.url} alt='' fill className='object-contain rounded-md' sizes='100%' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductImages
