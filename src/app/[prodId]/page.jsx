import Product from '@/components/Product/Product'
import ProductImages from '@/components/product/productImages'
import ProductImageSilder from '@/components/Product/ProductImageSilder'
import QuantityProduct from '@/components/product/QuantityProduct'

const ProductDetails = () => {

    return (
        <div className='container flex flex-col gap-16'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="lg:sticky top-12 self-start">
                    {/* <ProductImages /> */}
                    <ProductImageSilder />
                </div>

                <div className="flex flex-col gap-5">
                    <p className='text-3xl font-semibold'>Product Name</p>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi amet provident placeat dolor! Nesciunt quia eius quasi possimus ut quod fugiat officiis adipisci dolorem eaque, harum aliquam minus tempore?</p>
                    <hr />
                    <div className="font-semibold flex items-center gap-3">
                        <p className='text-gray-500 line-through'>$59</p>
                        <p className='text-xl font-bold text-mainColor'>$49</p>
                    </div>
                    <hr />
                    {/* Pick Color */}
                    <div className="">
                        <p className='mb-4'>Choose a color</p>
                        <div className="flex items-center gap-5">
                            <div className="relative w-8 h-8 rounded-full bg-red-700">
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ring-2 ring-black w-10 h-10 rounded-full"></div>
                            </div>
                            <div className="relative w-8 h-8 rounded-full bg-blue-700"></div>
                            <div className="relative w-8 h-8 rounded-full bg-white ring-1 ring-gray-500">
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -rotate-45 -translate-y-1/2  h-[3rem] w-[3px] bg-mainColor"></div>
                            </div>
                        </div>
                    </div>
                    {/* Pick Size */}
                    <div className="">
                        <p className='mb-4'>Choose a size</p>
                        <div className="flex items-center gap-3">
                            <button className='px-4 py-1 rounded-md bg-black/50 text-white hover:cursor-not-allowed'>Small</button>
                            <button className='px-4 py-1 rounded-md ring-1 ring-black text-black'>Medium</button>
                            <button className='px-4 py-1 rounded-md bg-black text-white'>Large</button>
                        </div>
                    </div>
                    {/* Pick Quantity */}
                    <QuantityProduct />
                    <hr />
                    {/* Desc */}
                    <div className="">
                        <p className='mb-4 text-xl font-semibold'>Product Info</p>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque mollitia, quibusdam, voluptates ex provident molestias consequuntur quae minus aperiam beatae impedit hic, modi obcaecati corporis laboriosam. Neque, nobis earum?</p>
                    </div>
                    <div className="">
                        <p className='mb-4 text-xl font-semibold'>Return & Refund Policy</p>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque mollitia, quibusdam, voluptates ex provident molestias consequuntur quae minus aperiam beatae impedit hic, modi obcaecati corporis laboriosam. Neque, nobis earum?</p>
                    </div>
                    <div className="">
                        <p className='mb-4 text-xl font-semibold'>Shipping Info</p>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque mollitia, quibusdam, voluptates ex provident molestias consequuntur quae minus aperiam beatae impedit hic, modi obcaecati corporis laboriosam. Neque, nobis earum?</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 mb-10">
                <p className="text-2xl font-semibold uppercase">Related Products</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
