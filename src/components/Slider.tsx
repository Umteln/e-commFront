'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const slideData = [
    {
        id: 1,
        title: 'Put that stuff on EVERYTHING!',
        image: '/slide1.jpg',
    },
    {
        id: 2,
        title: 'The best seasoning around',
        image: '/slide2.jpg',
    },
    {
        id: 3,
        title: "Let's get Spicy!",
        image: '/slide3.jpg',
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    //sets interval to change slide every four seconds
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentSlide((prev) =>
    //             prev === slideData.length - 1 ? 0 : prev + 1
    //         );
    //     }, 2000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className='bg-red-100 flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row'>
            {/* text container */}
            <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold '>
                <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
                    {slideData[currentSlide].title}
                </h1>
                <button className='bg-red-500 text-white py-4 px-8'>
                    Order Now
                </button>
            </div>
            {/* img container */}
            <div className='w-full flex-1 relative'>
                <Image
                    src={slideData[currentSlide].image}
                    alt=''
                    fill
                    className='object-cover'
                />
            </div>
        </div>
    );
};

export default Slider;
