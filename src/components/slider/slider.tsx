import React from 'react';
import { Carousel, Button } from 'antd';

const slides = [
  {
    image: '/images/banner-1.png',
    title: 'iPhone 14 Series',
    subtitle: ['Up to 10%', 'off Voucher'],
    buttonText: 'Shop Now',
  },
  {
    image: '/images/banner-1.png',
    title: 'Samsung Galaxy S24',
    subtitle: ['Flat ₹5000', 'Cashback'],
    buttonText: 'Grab Offer',
  },
  {
    image: '/images/banner-1.png',
    title: 'OnePlus Nord Series',
    subtitle: ['Exciting', 'Exchange Offers'],
    buttonText: 'Buy Now',
  },
];

const BannerSlider: React.FC = () => (
  <Carousel className='bannerMain' autoplay>
    {slides.map((slide, index) => (
      <div key={index} className='banner-slide'>
        <img src={slide.image} alt={`Banner ${index + 1}`}/>
        <div className='bannerContent'>
        <div className='flex items-center gap-6 mb-5'>
            <span>
                <img src="/images/apple-logo.png"/>
            </span>
            <p className='text-white text-2xl font-normal font'>{slide.title}</p>
        </div>
        <h1 className='font-semibold text-5xl text-white leading-15 mb-5 font'>
        {slide.subtitle.map((line, i) => (<React.Fragment key={i}>{line}<br /></React.Fragment>))}
        </h1>
        <Button className='btn-outline'>
        {slide.buttonText}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Button>
        </div>
      </div>
    ))}
  </Carousel>
);

export default BannerSlider;
