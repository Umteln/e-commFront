import Price from '@/components/Price';
import { singleProduct } from '@/data';
import Image from 'next/image';
import React from 'react';

const ProductPage = () => {
    return (
        <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around md:flex-row md:gap-8 items-center text-red-500'>
            {/* image container */}
            {singleProduct.img && (
                <div className='relative w-full h-1/2 md:h-[70%]'>
                    <Image
                        src={singleProduct.img}
                        alt=''
                        fill
                        className='object-contain'
                    />
                </div>
            )}
            {/* text container */}
            <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
                <h1 className='text-3xl font-bold uppercase p-2 xl:text-5xl'>
                    {singleProduct.title}
                </h1>
                <p className='group-hover:hidden text-xl'>
                    {singleProduct.desc}
                </p>
                <Price
                    price={singleProduct.price}
                    options={singleProduct.options}
                    id={singleProduct.id}
                />
                <button className='hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md'>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};
export default ProductPage;
