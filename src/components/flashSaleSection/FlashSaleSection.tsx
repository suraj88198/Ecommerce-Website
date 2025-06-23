'use client';
import { EyeIcon, WishlistIcon } from '@/utils/icons/icons';
import React, { useEffect, useState } from 'react';
import StarIcon from '../starIcon/starIcon';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from 'antd';

interface Product {
  id: number;
  image: string;
  title: string;
  discount: number;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    image: '/products/pro-1.png',
    title: 'HAVIT HV-G92 Gamepad',
    discount: 40,
    price: 120,
    originalPrice: 160,
    rating: 4.5,
    reviews: 88,
  },
  {
    id: 2,
    image: '/products/pro-2.png',
    title: 'AK-900 Wired Keyboard',
    discount: 35,
    price: 960,
    originalPrice: 1160,
    rating: 4.2,
    reviews: 75,
  },
  {
    id: 3,
    image: '/products/pro-3.png',
    title: 'IPS LCD Gaming Monitor',
    discount: 30,
    price: 370,
    originalPrice: 400,
    rating: 4.6,
    reviews: 99,
  },
  {
    id: 4,
    image: '/products/pro-4.png',
    title: 'S-Series Comfort Chair',
    discount: 25,
    price: 375,
    originalPrice: 400,
    rating: 4.4,
    reviews: 99,
  },
];

const FlashSaleSection = () => {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({});

  // Countdown logic
  useEffect(() => {
    const target = new Date();
    target.setHours(target.getHours() + 72);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target.getTime() - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const sliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="mt-25">
      <div className="flex md:flex-row flex-col items-start md:items-end gap-2 md:gap-0 justify-start mb-10 px-[15px]">
        <div className='mr-22'>
          <div className="text-[#DB4444] font-semibold text-[16px] slideTopText pl-9">Today’s</div>
          <h2 className="text-2xl md:text-3xl font-bold mt-8 tracking-wide">Flash Sales</h2>
        </div>
        <div className="flex gap-3 text-center text-sm">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, idx, arr) => {
            const val = Object.values(timeLeft)[idx] ?? 0;
            return (
              <div key={label} className="flex items-center gap-1">
                <div className='mr-[7px]'>
                  <div className="text-black text-[13px] font-medium mb-1">{label}</div>
                  <div className="text-[32px] font-bold leading-none">
                    {String(val).padStart(2, '0')}
                  </div>
                </div>
                {idx !== arr.length - 1 && (
                  <span className="text-[#DB4444] text-3xl font-bold mb-[-10px]">:</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Slider {...sliderSettings} className="product-slider">
        {sampleProducts.map((product) => (
          <div key={product.id} className="px-[15px]">
            <div className="relative">
                <div className='bg-[#f8f8f8] rounded-md relative p-10'>
                <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-[13px] rounded px-3 py-1">
                  -{product.discount}%
                </span>
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
      </Slider>

      <div className="my-10 text-center border-b-1 border-[#cccccc] pb-10">
        <Button className="btn-main">
          View All Products
        </Button>
      </div>
    </section>
  );
};

export default FlashSaleSection;
