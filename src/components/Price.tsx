'use client';

import React, { useEffect, useState } from 'react';

type Props = {
    price: number;
    options: { title: string; additionalPrice: number }[];
    id: number;
};
const Price = ({ price, options, id }: Props) => {
    const [totalPrice, setTotalPrice] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setTotalPrice(
            quantity *
                (options ? price + options[selected].additionalPrice : price)
        );
    }, [quantity, selected, price, totalPrice, options]);

    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>${totalPrice.toFixed()}</h2>
            <div className='flex gap-4'>
                {options.map((option, index) => (
                    <button
                        key={option.title}
                        className='p-2 ring-1 ring-red-400 rounded-md'
                        style={{
                            background:
                                selected === index
                                    ? 'rgb(248 113 113'
                                    : 'white',

                            color: selected === index ? 'white' : 'red',
                        }}
                        onClick={() => setSelected(index)}
                    >
                        {option.title}
                    </button>
                ))}
            </div>

            <div className='flex justify-between items-center '>
                <div className='flex justify-between items-center w-full p-3 ring-1 ring-red-500 '>
                    <span>Quantity</span>

                    <div className='flex gap-4 items-center'>
                        <button
                            className=''
                            onClick={() =>
                                setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                            }
                        >
                            {'<'}
                        </button>
                        <span>{quantity}</span>
                        <button
                            className=''
                            onClick={() =>
                                setQuantity((prev) => (prev < 9 ? prev + 1 : 9))
                            }
                        >
                            {'>'}
                        </button>
                    </div>
                </div>
                <button className='uppercase w-56 ring-1 bg-red-500 text-white p-3 ring-red-500'>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Price;