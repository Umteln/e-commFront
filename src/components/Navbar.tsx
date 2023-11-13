import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Menu from './Menu';

const Navbar = () => {
    const user = false;

    return (
        <div
            className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2
     border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40 '
        >
            {/* Left Links */}
            <div className='hidden md:flex gap-4 flex-1'>
                <Link href='/'>Home</Link>
                <Link href='/menu'>Menu</Link>
                <Link href='/'>Contact</Link>
            </div>
            {/* Logo */}
            <div className='hidden relative flex-1 md:flex w-full  items-center md:justify-center'>
                <Link href='/'>
                    <Image
                        src='/logo.png'
                        alt='logo'
                        width={50}
                        height={50}
                        className='mb-1 md:w-[80px] xl:w-[100px]'
                    />
                </Link>
                
            </div>
            <div className='relative flex-1 flex w-full  items-center md:hidden'>
                <Link href='/' > 
                  <Image src='/spiceLogo.png' alt='spice chicks logo' width={125} height={125} className='my-1' />
               </Link>
            </div>

            {/* Mobile Menu */}
            <div className='md:hidden'>
                <Menu />
            </div>

            {/* Right Links*/}
            <div className='hidden md:flex gap-4 items-center flex-1 justify-end'>
                <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
                    <Image
                        src='/phone.png'
                        alt=''
                        width={20}
                        height={20}
                    />
                    <span>123 456 7890</span>
                </div>
                {!user ? (
                    <Link href='/login'>Login</Link>
                ) : (
                    <Link href='/orders'>Orders</Link>
                )}
                <AiOutlineShoppingCart size={24} />
            </div>
        </div>
    );
};

export default Navbar;
