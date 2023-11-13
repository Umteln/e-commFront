import React from 'react';

const OrderPage = () => {
    return (
        <div className='p-4 lg:px-20 xl:px-40'>
            <table className='w-full border-separate border-spacing-2'>
                <thead>
                    <tr className='text-left'>
                        <th className='hidden md:block '>Order ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th className='hidden md:block'>Products</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-sm md:text-base odd:bg-red-100'>
                        <td className='hidden md:block py-6 px-1 '>
                            123456789
                        </td>
                        <td className='py-6 px-1 '>03.11.2023</td>
                        <td className='py-6 px-1 '>42.58</td>
                        <td className='hidden md:block py-6 px-1 '>
                            Blaze Chicken (2), Firecracker (3)
                        </td>
                        <td className='py-6 px-1'>Processing...</td>
                    </tr>
                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-1 '>
                            123456789
                        </td>
                        <td className='py-6 px-1'>03.11.2023</td>
                        <td className='py-6 px-1'>42.58</td>
                        <td className='hidden md:block py-6 px-1'>
                            Blaze Chicken (2), Firecracker (3)
                        </td>
                        <td className='py-6 px-1'>Processing...</td>
                    </tr>
                    <tr className='text-sm md:text-base odd:bg-gray-100'>
                        <td className='hidden md:block py-6 px-1 '>
                            123456789
                        </td>
                        <td className='py-6 px-1'>03.11.2023</td>
                        <td className='py-6 px-1'>42.58</td>
                        <td className='hidden md:block py-6 px-1'>
                            Blaze Chicken (2), Firecracker (3)
                        </td>
                        <td className='py-6 px-1'>Processing...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderPage;
