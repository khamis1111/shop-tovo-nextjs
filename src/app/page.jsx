/* eslint-disable @next/next/no-img-element */
import CategorySlider from "@/components/CategorySlider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Product from "@/components/Product/Product";
import Slider from "@/components/Slider";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-16">

          <div className="flex flex-col gap-5">
            <Slider />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-auto">
              <img src="/banner61.jpg" alt="banner61" width={'100%'} height={'100%'} className='hover:opacity-70 transition-opacity duration-300' />
              <img src="/banner62.jpg" alt="banner62" width={'100%'} height={'100%'} className='hover:opacity-70 transition-opacity duration-300' />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-2xl font-semibold">Categories</p>
            <CategorySlider />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold">Featured Products</p>
              <Link href={'/shop'} className="font-semibold text-sm flex items-center cursor-pointer hover:text-mainColor transition-colors duration-300">
                View All <ChevronRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <img src="/banner72.jpg" alt="banner61" width={'100%'} height={'100%'} className='hover:opacity-70 transition-opacity duration-300' />
            <img src="/banner73.jpg" alt="banner62" width={'100%'} height={'100%'} className='hover:opacity-70 transition-opacity duration-300' />
            <img src="/banner74.jpg" alt="banner62" width={'100%'} height={'100%'} className='hover:opacity-70 transition-opacity duration-300' />
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-2xl font-semibold uppercase text-center">top selling products 2024</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
              <Product />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </div>

          <div className="flex flex-col ">
            <img src="/banner76.jpg" alt="banner76" width={'100%'} height={'100%'} className='hover:opacity-70 transition-opacity duration-300' />

            <div className="border relative -top-8 md:-top-14 bg-white rounded-md mx-4 flex items-center justify-around flex-wrap p-2">
              <img src="/br3.jpg" alt="" className='object-contain w-20 md:w-32' />
              <img src="/br3.jpg" alt="" className='object-contain w-20 md:w-32' />
              <img src="/br3.jpg" alt="" className='object-contain w-20 md:w-32' />
              <img src="/br3.jpg" alt="" className='object-contain w-20 md:w-32' />
              <img src="/br3.jpg" alt="" className='object-contain w-20 md:w-32' />
            </div>
          </div>

          <div className="flex flex-col gap-5 relative -top-10">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold">New Arrivals</p>
              <Link href={'/shop'} className="font-semibold text-sm flex items-center cursor-pointer hover:text-mainColor transition-colors duration-300">
                View All <ChevronRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              <Product />
              <Product />
              <Product />
              <Product />
            </div>

            <img src="/banner-coup.jpg" alt="banner61" width={'100%'} height={'100%'} className='hover:opacity-70 transition-opacity duration-300' />
          </div>

        </div>
      </div>
    </>
  );
}
