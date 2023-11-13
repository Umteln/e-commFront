import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between text-center'>
            <Link href='/' > 
               <Image src='/spiceLogo.png' alt='spice chicks logo' width={125} height={125} className='my-1' />
             </Link>
            <p className='font-bold text-lg'> ALL RIGHTS RESERVED </p>
        </div>
    );
};

export default Footer;
