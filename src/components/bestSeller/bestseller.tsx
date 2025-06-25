'use client';
import { EyeIcon, WishlistIcon } from '@/utils/icons/icons';
import React, { useEffect, useState } from 'react';
import StarIcon from '../starIcon/starIcon';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from 'antd';

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    image: '/products/pro-5.png',
    title: 'The north coat',
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    image: '/products/pro-6.png',
    title: 'Gucci duffle bag',
    price: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 3,
    image: '/products/pro-7.png',
    title: 'RGB liquid CPU Cooler',
    price: 160,
    originalPrice: 170,
    rating: 4.6,
    reviews: 99,
  },
  {
    id: 4,
    image: '/products/pro-8.png',
    title: 'Small BookSelf',
    price: 360,
    originalPrice: 360,
    rating: 4.4,
    reviews: 99,
  },
];

const BestSellerSection = () => {

  return (
    <section className="mt-10 md:mt-18 mb-10 md:mb-30">
      <div className="flex sm:flex-row flex-col items-start md:items-end gap-2 md:gap-0 justify-start sm:justify-between mb-10">
        <div className='mr-22'>
          <div className="text-[#DB4444] font-semibold text-[16px] slideTopText pl-9">This Month</div>
          <h2 className="text-2xl md:text-3xl font-semibold mt-4 md:mt-8 tracking-wide">Best Selling Products</h2>
        </div>
        <div><Button className='btn-main'>View All</Button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 mx-[-15px]'>
        {sampleProducts.map((product) => (
          <div key={product.id} className="px-[15px]">
            <div className="relative">
                <div className='bg-[#f8f8f8] rounded-md relative p-10'>
                <div className="flex justify-center min-h-[180px] h-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-start absolute top-[12px] right-[12px] gap-2 items-center mb-2 text-gray-600 text-sm">
                  <WishlistIcon/>
                  <EyeIcon/>
                </div>
              </div>

            <div>
              <h4 className="font-medium text-[16px] text-black font mt-4 mb-2">{product.title}</h4>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#DB4444] font-medium text-[16px]">${product.price}</span>
                <span className="line-through text-gray-400 font-medium text-[16px]">${product.originalPrice}</span>
              </div>
              <div className="flex items-center text-yellow-500 text-sm gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon key={i} filled={i < Math.round(product.rating)} />
                ))}
                <span className="text-gray-500 text-[14px] font-semibold ml-1">({product.reviews})</span>
              </div>
              </div>
            </div>
          </div>
    ))}
    </div>
    </section>
  );
};

export default BestSellerSection;
