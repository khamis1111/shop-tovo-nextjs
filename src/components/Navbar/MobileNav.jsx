'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Heart, Menu, Search, ShoppingBag, User2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const MobileNav = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <div className="cursor-pointer"><Menu size={40} /></div>
                </SheetTrigger>
                <SheetContent className='overflow-auto scroll-hidden'>
                    <SheetHeader>
                        <SheetTitle>
                            <Link href={'/'}>
                                <Image src={'/LOGO.png'} alt='' width={'70'} height={'70'} className="-translate-x-5" />
                            </Link>
                        </SheetTitle>
                        <SheetDescription>
                            <div className="capitalize flex flex-col gap-5 font-semibold text-lg text-start">
                                <Link href={'/'} className="hover:translate-x-2 transition-all">homepage</Link>
                                <Link href={'/shop'} className="hover:translate-x-2 transition-all">shop</Link>
                                <Link href={'/'} className="hover:translate-x-2 transition-all">deals</Link>
                                <Link href={'/'} className="hover:translate-x-2 transition-all">about</Link>
                                <Link href={'/'} className="hover:translate-x-2 transition-all">contact</Link>
                                <div className="flex items-center gap-3 bg-bgColor py-3 px-4 rounded-full text-lg">
                                    <Search size={20} />
                                    <input type="search" name="search" id="search" placeholder='Search'
                                        className='bg-transparent outline-none w-full'
                                    />
                                </div>
                                <Link href={'/cart'} className="bg-bgColor p-3 rounded-full flex items-center justify-start gap-3 relative text-lg cursor-pointer">
                                    <div className="absolute -top-2 -right-2 bg-mainColor text-white text-sm font-semibold w-6 h-6 rounded-full flex items-center justify-center">
                                        4
                                    </div>
                                    <ShoppingBag size={25} />
                                    Cart
                                </Link>
                                <Link href={'/profile'} className="bg-bgColor p-3 rounded-full flex items-center justify-start gap-3 text-lg cursor-pointer">
                                    <Heart size={25} />
                                    Favorite
                                </Link>
                                <Link href={'/profile'} className="bg-bgColor p-3 rounded-full flex items-center justify-start gap-3 text-lg cursor-pointer">
                                    <User2 size={25} />
                                    Sign in / Sign up
                                </Link>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav
