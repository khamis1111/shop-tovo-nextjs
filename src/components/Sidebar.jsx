import { SidebarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
    const categories = [
        'Electornics',
        'Computers',
        'Clothes',
        'Sports',
        'Games & Toys'
    ]

    return (
        <div className='fixed left-0 top-0 w-[12rem] min-h-screen ps-10 hidden md:block'>
            <div className="h-32 flex items-center">
                <Image src={'/LOGO.png'} alt='' width={'70'} height={'70'} />
            </div>
            <div className="capitalize font-semibold">
                <p className='font-bold text-2xl pb-4'>categories</p>

                <div className="flex flex-col gap-3">
                    {
                        categories.map((cat, index) => (
                            <div key={index}>
                                <p>{cat}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar
