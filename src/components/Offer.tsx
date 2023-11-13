import Image from 'next/image';
import React from 'react';
import Counter from './Counter';

const Offer = () => {
    return (
        <div  className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">   
            {/* text container */}
            <div className='flex-1 flex flex-col justify-center text-center gap-8 p-6'>
                <h1 className='text-white text-5xl font-bold xl:text-6xl'>
                    Give Our Firecracker Seasoning Try
                </h1>
                <p className='text-white xl:text-xl'>
                    A perfectly blended combination spices with a hint of
                    hickory smoke 
                </p>
                <Counter />
                <button className='bg-red-500 text-white py-3 px-6 rounded-md'>
                    Order now
                </button>
            </div>
            {/* Image container */}
            <div className='flex-1 w-full relative md:h-full'>
                <Image
                    src='/slide2.jpg'
                    alt=''
                    fill
                    className='object-contain'
                />
            </div>
        </div>
    );
};

export default Offer;
