import { Facebook, Gift, Headphones, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-bgColor py-10'>
                <div className="container flex flex-col gap-10">
                    {/* Sign up */}
                    <div className="flex items-center justify-between gap-5 flex-wrap">
                        <div className="flex items-center gap-5 flex-wrap">
                            <div className="">
                                <p className='text-xs lg:text-xl font-bold uppercase'>Sign up to our newletter</p>
                                <p className='text-gray-500'>Be the First to Know. Sign up for newsletter today</p>
                            </div>
                            <div className="border border-dashed border-black p-1 rounded flex items-center gap-3 shadow-lg hover:shadow-black/50 transition-shadow duration-300">
                                <Gift />
                                <p className='uppercase text-xs'>special voucher <br /> discount 30%</p>
                            </div>
                            <div className="flex w-full lg:w-auto">
                                <input type="email" placeholder='Enter your email...' className='text-black p-3 outline-none border text-xs w-full lg:w-max xl:w-72' />
                                <button className='text-white bg-black p-3 text-xs font-semibold uppercase hover:bg-mainColor transition-colors duration-300'>subscribe</button>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <Link href={'/'} className='border-2 border-black text-black bg-transparent w-10 h-10 text-sm font-semibold uppercase hover:bg-black hover:text-white transition-colors duration-300 rounded-md flex items-center justify-center'>
                                <Facebook />
                            </Link>
                            <Link href={'/'} className='border-2 border-black text-black bg-transparent w-10 h-10 text-sm font-semibold uppercase hover:bg-black hover:text-white transition-colors duration-300 rounded-md flex items-center justify-center'>
                                <Twitter />
                            </Link>
                            <Link href={'/'} className='border-2 border-black text-black bg-transparent w-10 h-10 text-sm font-semibold uppercase hover:bg-black hover:text-white transition-colors duration-300 rounded-md flex items-center justify-center'>
                                <Instagram />
                            </Link>
                        </div>
                    </div>

                    <hr />
                    {/* Info */}
                    <div className="flex justify-between gap-10 flex-col md:flex-row text-base md:text-xs lg:text-base">
                        <div className="flex flex-col gap-5">
                            <p
                                className='text-xl md:text-xs lg:text-xl font-semibold uppercase relative after:absolute after:-bottom-3 after:left-0 after:w-14 after:h-1 after:bg-mainColor mb-5'
                            >contact info</p>

                            <div className="flex items-center gap-5">
                                <div className='text-mainColor hidden lg:block scale-150'><Headphones /></div>
                                <div className="flex flex-col">
                                    <p>Hotline free 24/24</p>
                                    <p className='text-mainColor font-semibold'>+20 1098765432</p>
                                </div>
                            </div>
                            <p>200 Elm St, raleigh, NC 27601, Egypt, Kafr</p>
                            <p>Email: khamis@example.com</p>
                        </div>

                        <div className="flex gap-10 flex-col md:flex-row">
                            <div className="flex flex-col gap-5">
                                <p
                                    className='text-xl md:text-xs lg:text-xl font-semibold uppercase relative after:absolute after:-bottom-3 after:left-0 after:w-14 after:h-1 after:bg-mainColor mb-5'
                                >Information</p>

                                <div className="flex flex-col gap-5 text-gray-500 font-semibold">
                                    <Link href={''}>What is Avesa?</Link>
                                    <Link href={''}>Requisites</Link>
                                    <Link href={''}>Jobs & Jobs</Link>
                                    <Link href={''}>About us</Link>
                                    <Link href={''}>Contacts</Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <p
                                    className='text-xl md:text-xs lg:text-xl font-semibold uppercase relative after:absolute after:-bottom-3 after:left-0 after:w-14 after:h-1 after:bg-mainColor mb-5'
                                >Services</p>

                                <div className="flex flex-col gap-5 text-gray-500 font-semibold">
                                    <Link href={''}>Delivery</Link>
                                    <Link href={''}>Payment</Link>
                                    <Link href={''}>Purchase returns</Link>
                                    <Link href={''}>Public offer</Link>
                                    <Link href={''}>Customer care</Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <p
                                    className='text-xl md:text-xs lg:text-xl font-semibold uppercase relative after:absolute after:-bottom-3 after:left-0 after:w-14 after:h-1 after:bg-mainColor mb-5'
                                >HELP</p>

                                <div className="flex flex-col gap-5 text-gray-500 font-semibold">
                                    <Link href={''}>What is Avesa?</Link>
                                    <Link href={''}>Requisites</Link>
                                    <Link href={''}>Jobs & Jobs</Link>
                                    <Link href={''}>About us</Link>
                                    <Link href={''}>Contacts</Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <p
                                className='text-xl md:text-xs lg:text-xl font-semibold uppercase relative after:absolute after:-bottom-3 after:left-0 after:w-14 after:h-1 after:bg-mainColor mb-5'
                            >Download app</p>
                            <p>Our app is now available on Google Play & App Store. Get it now.</p>
                        </div>
                    </div>

                    <hr />

                    {/* Pay */}
                    <div className='flex flex-col items-center gap-5'>
                        <img src="/fot2.jpg" alt="" />
                        <p className='xl:mx-40 text-center text-sm md:text-base'>**$50 off orders $350+ with the code BOO50. $75 off orders $500+ with the code BOO75. $150 off orders $1000+ with the code BOO150. Valid from October 28, 2016 to October 31, 2016. Offer may not be combined with any other offers or promotions, is non-exchangeable and non-refundable. Offer valid within the US only.</p>
                        <img src="fot3.png" alt="" />
                    </div>
                </div>
            </div>
            {/* Design By */}
            <div className="w-full p-3 bg-slate-900 text-white font-semibold text-center">
                <p>©2024 Copyright, Designed by <span className='text-mainColor hover:text-mainColor/70 cursor-pointer transition-colors duration-500'>M.Khamis</span></p>
            </div>
        </>
    )
}

export default Footer
