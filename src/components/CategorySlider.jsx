/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import Link from 'next/link'

const CategorySlider = () => {
    const categories = [
        { icon: '/cat61.png', name: "Vegetables", items: 9 },
        { icon: '/cat63.png', name: "Butter & Eggs", items: 9 },
        { icon: '/cat61.png', name: "Fastfood", items: 9 },
        { icon: '/cat67.png', name: "Fresh Berries", items: 6 },
        { icon: '/cat63.png', name: "Fresh Meat", items: 5 },
        { icon: '/cat61.png', name: "Fruits & Nut Gifts", items: 6 },
        { icon: '/cat67.png', name: "Bakery", items: 8 },
        { icon: '/cat63.png', name: "Seafood", items: 7 },
        { icon: '/cat63.png', name: "Butter & Eggs", items: 9 },
        { icon: '/cat61.png', name: "Fastfood", items: 9 },
        { icon: '/cat67.png', name: "Fresh Berries", items: 6 },
        { icon: '/cat63.png', name: "Fresh Meat", items: 5 },
        { icon: '/cat61.png', name: "Fruits & Nut Gifts", items: 6 },
        { icon: '/cat67.png', name: "Bakery", items: 8 },
        { icon: '/cat63.png', name: "Seafood", items: 7 },
    ]

    return (
        <div className='flex items-center gap-5 md:gap-16 overflow-x-scroll scroll-hidden'>
            {categories.map((category, index) => (
                <Link key={index} href={'/shop'}>
                    <div className="flex flex-col items-center space-y-2 flex-shrink-0 hover:text-mainColor transition-colors duration-300">
                        <div className="relative w-24 h-24 text-2xl rounded-full drop-shadow-md">
                            <Image src={category.icon} alt='' fill className='object-cover hover:scale-105 transition-transform duration-300' />
                        </div>
                        <div className="text-sm font-medium text-center">{category.name}</div>
                        <div className="text-xs text-gray-500">{category.items} items</div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CategorySlider
