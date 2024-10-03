import Image from 'next/image'

const Banners = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="rounded-2xl bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 shadow-md">
                <div className="backdrop-blur-lg bg-white/30 flex items-center justify-between rounded-2xl p-10 w-full h-full">
                    <div className="flex flex-col gap-4">
                        <p className="uppercase text-4xl font-bold tracking-tight">big sale!</p>
                        <p className="text-bgColor font-semibold">Wireless headphones with noise canceling</p>
                        <button className="text-white rounded-full px-4 py-2 font-semibold bg-mainColor w-max">Headphones</button>
                    </div>
                    <div className="relative -top-5 h-full w-60 hidden sm:block">
                        <Image src={'/Headphone.png'} alt='' fill className="object-contain scale-150 md:scale-150 lg:scale-125 xl:scale-150" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <div className="rounded-2xl  bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 shadow-md  h-32">
                    <div className="backdrop-blur-lg bg-white/30 p-10 rounded-2xl w-full h-full flex justify-center items-center text-center">
                        <p className="uppercase text-2xl md:text-3xl font-bold tracking-tight">
                            Get up to <span className="text-mainColor">20%</span> <br /> OFF Headphones
                        </p>
                    </div>

                </div>
                <div className="rounded-2xl p-4 shadow-md flex justify-between items-center h-32 bg-cyan-500/40">
                    <div className="flex flex-col gap-5">
                        <p className="text-sm md:text-xl font-bold tracking-tight">HeadPhones Plus</p>
                        <button className="text-white bg-black rounded-full py-2 px-6 w-max">Shop now</button>
                    </div>
                    <div className="relative -top-5">
                        <Image src={'/Headphone.png'} alt='' width={'150'} height={'150'} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banners
