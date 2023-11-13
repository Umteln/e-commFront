type Product = {
    id: number;
    title: string;
    desc: string;
    img?: string;
    price: number;
    category: string;
    options?: { title: string; additionalPrice: number }[];
};
type Products = Product[];

export const products: Product[] = [
    {
        id: 1,
        title: 'Onion Powder',
        desc: 'fancy description',
        img: '/p1.jpg',
        price: 10,
        category: 'seafood',
        options: [{ title: 'small', additionalPrice: 3 }],
    },
    {
        id: 2,
        title: 'Ginger',
        desc: 'fancy description',
        img: '/p1.jpg',
        price: 9.25,
        category: 'poultry',
        options: [{ title: 'small', additionalPrice: 3 }],
    },
    {
        id: 3,
        title: 'Firecraker',
        desc: 'fancy description',
        img: '/p1.jpg',
        price: 7.5,
        category: 'vegetarian',
        options: [{ title: 'small', additionalPrice: 3 }],
    },
    {
        id: 4,
        title: 'Steak',
        desc: 'fancy description',
        img: '/p1.jpg',
        price: 12,
        category: 'pork',
        options: [{ title: 'small', additionalPrice: 3 }],
    },
];

export const chicken: Products = [
    {
        id: 1,
        title: 'Sicilian',
        desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.',
        img: '/products/cajun.png',
        category: 'poultry',
        price: 24.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 2,
        title: 'Mediterranean Delight',
        desc: 'Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.',
        img: '/products/cajun.png',
        category: 'poultry',
        price: 32.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 3,
        title: 'Bella Napoli',
        desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.',
        img: '/products/cajun.png',
        category: 'poultry',
        price: 26.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 4,
        title: 'Pesto Primavera',
        desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.',
        img: '/products/cajun.png',
        category: 'poultry',
        price: 28.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 6,
            },
        ],
    },
];

export const singleProduct: Product = {
    id: 1,
    title: 'Sicilian',
    desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.',
    img: '/p1.png',
    price: 24.9,
    category: 'chicken',
    options: [
        {
            title: 'Small',
            additionalPrice: 0,
        },
        {
            title: 'Medium',
            additionalPrice: 4,
        },
        {
            title: 'Large',
            additionalPrice: 6,
        },
    ],
};

export const featuredProducts: Product[] = [
    {
        id: 12,
        title: 'Blaze Chicken',
        desc: 'Savory blend great for chargrilled BBQ chicken',
        img: '/products/blazeChicken.png',
        price: 10,
        category: 'poultry',
        options: [{ title: 'small', additionalPrice: 3 }],
    },
    {
        id: 28,
        title: 'Smokey Firecracker',
        desc: 'A perfectly blended combination spices with a hint of hickory smoke ',
        img: '/products/smokeyFirecracker.png',
        price: 9.25,
        category: 'beef',
        options: [{ title: 'small', additionalPrice: 3 }],
    },
    {
        id: 27,
        title: 'Pink Lady',
        desc: 'A seafood boils BFF, they just go together',
        img: '/products/pinkLady.png',
        price: 9.25,
        category: 'seafood',
        options: [{ title: 'small', additionalPrice: 3 }],
    },
];

type Menu = {
    id: number;
    slug: string;
    title: string;
    desc: string;
    img: string;
    bg: string;
    color: string;
}[];

export const menu: Menu = [
    {
        id: 1,
        slug: 'seafood',
        title: 'Seafood',
        desc: 'Savor the taste of perfection with out aromatic blends',
        img: '/p2.jpg',
        bg: 'red-100',
        color: 'white',
    },
    {
        id: 2,
        slug: 'beef',
        title: 'Beef',
        desc: 'Savor the taste of perfection with out aromatic blends',
        img: '/p2.jpg',
        bg: 'white',
        color: 'black',
    },
    {
        id: 3,
        slug: 'vegetable',
        title: 'Vegetable',
        desc: 'Savor the taste of perfection with out aromatic blends',
        img: '/p2.jpg',
        bg: 'red-200',
        color: 'white',
    },
    {
        id: 4,
        slug: 'chicken',
        title: 'Chicken',
        desc: 'Savor the taste of perfection with out aromatic blends',
        img: '/p2.jpg',
        bg: 'white',
        color: 'black',
    },
];
