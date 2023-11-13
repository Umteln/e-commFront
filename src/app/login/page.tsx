import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Login = () => {
    return (
        <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center '>
            <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2'>
                <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
                    <Image
                        src='/slide2.jpg'
                        alt=''
                        fill
                        className='object-cover'
                    />
                </div>
                <div className='flex flex-col gap-8 p-10 md:w-1/2'>
                    <h1 className='font-bolt text-xl xl:text-3xl'>Welcome</h1>
                    <p>
                        Login into your account or create a new account using
                        social buttons
                    </p>
                    <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
                        <Image
                            src='/close.png'
                            alt=''
                            width={20}
                            height={20}
                            className='object-contain'
                        />
                        <span>Sign In With Google</span>
                    </button>
                    <button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md'>
                        <Image
                            src='/close.png'
                            alt=''
                            width={20}
                            height={20}
                            className='object-contain'
                        />
                        <span>Sign In With Facebook</span>
                    </button>
                    <p className='text-sm'>
                        Have a problem? <Link href='/'> Contact us </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
