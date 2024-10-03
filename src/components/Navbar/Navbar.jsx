'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Heart, LogOut, Search, ShieldEllipsis, ShoppingBag, User, User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import CartDropdown from '../Cart/CartDropdown'
import MobileNav from './MobileNav'

const Navbar = () => {
    return (
        <div className="container">
            <div className='h-32 flex items-center justify-between font-semibold'>
                <div className="flex items-center gap-5">
                    <Link href={'/'}>
                        <Image src={'/LOGO.png'} alt='' width={'70'} height={'70'} className="-translate-x-5" />
                    </Link>
                    <div className="capitalize hidden lg:flex items-center gap-5">
                        <Link href={'/'}>homepage</Link>
                        <Link href={'/shop'}>shop</Link>
                        <Link href={'/'}>deals</Link>
                        <Link href={'/'}>about</Link>
                        <Link href={'/'}>contact</Link>
                    </div>
                </div>

                {/* Desktop Navbar */}
                <div className="hidden md:flex items-center gap-3">
                    <div className="flex items-center gap-3 bg-bgColor py-3 px-4 rounded-full ">
                        <Search size={20} />
                        <input type="search" name="search" id="search" placeholder='Search'
                            className='bg-transparent outline-none w-full'
                        />
                    </div>
                    {/* Shopping Cart */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="bg-bgColor w-12 h-12 rounded-full flex items-center justify-center relative cursor-pointer">
                                <div className="absolute -top-2 -right-2 bg-mainColor text-white text-sm font-semibold w-6 h-6 rounded-full flex items-center justify-center">
                                    4
                                </div>
                                <ShoppingBag size={20} />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-80 mt-2 p-3 flex flex-col gap-3" align="end">
                            <CartDropdown />
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link href={'/profile'} className="bg-bgColor w-12 h-12 rounded-full flex items-center justify-center"
                        onClick={() => localStorage.setItem('tabs', 'wishlist')}
                    >
                        <Heart size={20} />
                    </Link>

                    {/* Profile */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="bg-bgColor w-12 h-12 rounded-full flex items-center justify-center">
                                <User2 size={20} />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-max mt-2" align="end">
                            <Link href={'/profile'} onClick={() => localStorage.removeItem('tabs')}>
                                <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                            </Link>
                            <Link href={'/admin'}>
                                <DropdownMenuItem>
                                    <ShieldEllipsis className="mr-2 h-4 w-4" />
                                    <span>Admin</span>
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Mobile Navbar */}
                <MobileNav />
            </div>
        </div >
    )
}

export default Navbar
