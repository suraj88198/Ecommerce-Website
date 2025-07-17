'use client';
import { EyeIcon, WishlistIcon } from '@/utils/icons/icons';
import StarIcon from '../starIcon/starIcon';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from 'antd';
import { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  tag?: string;
  colors?: string[];
}

const sampleProducts: Product[] = [
  {
    id: 1,
    image: '/products/pro-5.png',
    title: 'HAVIT HV-G92 Gamepad',
    price: 120,
    originalPrice: 160,
    rating: 4.5,
    reviews: 88,
    tag: 'New',
    colors: ['#000000', '#DB4444', '#FFD700'],
  },
  {
    id: 2,
    image: '/products/pro-6.png',
    title: 'AK-900 Wired Keyboard',
    price: 960,
    originalPrice: 1160,
    rating: 4.2,
    reviews: 75,
    colors: ['#FFFF00', '#DB4444'],
  },
  {
    id: 3,
    image: '/products/pro-7.png',
    title: 'IPS LCD Gaming Monitor',
    price: 370,
    originalPrice: 400,
    rating: 4.6,
    reviews: 99,
  },
  {
    id: 4,
    image: '/products/pro-8.png',
    title: 'S-Series Comfort Chair',
    price: 375,
    originalPrice: 400,
    rating: 4.4,
    reviews: 99,
    tag: 'New',
    colors: ['#008000', '#0000FF'],
  },
  {
    id: 1,
    image: '/products/pro-9.png',
    title: 'HAVIT HV-G92 Gamepad',
    price: 120,
    originalPrice: 160,
    rating: 4.5,
    reviews: 88,
  },
  {
    id: 2,
    image: '/products/pro-10.png',
    title: 'AK-900 Wired Keyboard',
    price: 960,
    originalPrice: 1160,
    rating: 4.2,
    reviews: 75,
  },
  {
    id: 3,
    image: '/products/pro-11.png',
    title: 'IPS LCD Gaming Monitor',
    price: 370,
    originalPrice: 400,
    rating: 4.6,
    reviews: 99,
  },
  {
    id: 4,
    image: '/products/pro-12.png',
    title: 'S-Series Comfort Chair',
    price: 375,
    originalPrice: 400,
    rating: 4.4,
    reviews: 99,
  },
  {
    id: 2,
    image: '/products/pro-13.png',
    title: 'AK-900 Wired Keyboard',
    price: 960,
    originalPrice: 1160,
    rating: 4.2,
    reviews: 75,
  },
  {
    id: 3,
    image: '/products/pro-14.png',
    title: 'IPS LCD Gaming Monitor',
    price: 370,
    originalPrice: 400,
    rating: 4.6,
    reviews: 99,
  },
  {
    id: 4,
    image: '/products/pro-15.png',
    title: 'S-Series Comfort Chair',
    price: 375,
    originalPrice: 400,
    rating: 4.4,
    reviews: 99,
  },
  {
    id: 4,
    image: '/products/pro-5.png',
    title: 'S-Series Comfort Chair',
    price: 375,
    originalPrice: 400,
    rating: 4.4,
    reviews: 99,
  },
];

const OurProductsSection = () => {

  const sliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="mt-12 md:mt-25">
      <div className="flex md:flex-row flex-col items-start md:items-end gap-2 md:gap-0 justify-start mb-10">
        <div className='mr-22'>
          <div className="text-[#DB4444] font-semibold text-[16px] slideTopText pl-9">Our Products</div>
          <h2 className="text-2xl md:text-3xl font-semibold mt-4 md:mt-8 tracking-wide">Explore Our Products</h2>
        </div>
      </div>

      <Slider {...sliderSettings} className="product-slider">
        {sampleProducts.map((product, idx) => {
          const [activeColorIdx, setActiveColorIdx] = useState(0);
          return (
            <div key={product.id + '-' + idx} className="">
              <div className="relative">
                <div className='bg-[#f8f8f8] rounded-md relative p-10'>
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-[#00FF66] text-white text-[13px] rounded px-3 py-1">
                      {product.tag}
                    </span>
                  )}
                  <div className="flex justify-center min-h-[180px] h-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={500}
                      height={500}
                      className="w-auto h-auto object-contain"
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
                  
                  <div className="flex items-center text-yellow-500 text-sm gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <StarIcon key={i} filled={i < Math.round(product.rating)} />
                    ))}
                    <span className="text-gray-500 text-[14px] font-semibold ml-1">({product.reviews})</span>
                  </div>
                  </div>
                  {product.colors ? (
                    <div className="flex gap-2 mt-4">
                      {product.colors.map((color, colorIdx) => (
                        <span
                          key={colorIdx}
                          className={`w-5 h-5 rounded-full ${activeColorIdx === colorIdx ? 'outline-2 border-3 border-[#ffffff]' : 'border border-transparent'}`}
                          style={{ backgroundColor: color, display: 'inline-block', cursor: 'pointer' }}
                          onClick={() => setActiveColorIdx(colorIdx)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4" style={{ height: '26px' }} />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      <div className="text-center pb-5 md:pb-10">
        <Button className="btn-main">
          View All Products
        </Button>
      </div>
    </section>
  );
};

export default OurProductsSection;
