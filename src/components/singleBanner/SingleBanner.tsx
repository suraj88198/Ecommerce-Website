'use client';
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import Image from 'next/image';

// Slide ka interface
interface Slide {
  image: string;
  title: string;
  subtitle: string[];
  buttonText: string;
}

const slides: Slide[] = [
  {
    image: '/images/signleBanner.png',
    title: 'Categories',
    subtitle: ['Enhance Your', 'Music Experience'],
    buttonText: 'Buy Now!',
  },
];

const SingleBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date();
    target.setHours(target.getHours() + 72);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeLabels = ['Days', 'Hours', 'Minutes', 'Seconds'];

  return (
    <>
      {slides.map((slide, index) => (
        <div key={index} className='banner-slide mb-8 md:mb-14'>
          <Image src={slide.image} alt={`Banner ${index + 1}`} width={500} height={300} className='w-full h-auto'/>
          <div className='bannerContent'>
            <div className='flex items-center mb-7'>
              <p className='text-[#00FF66] text-[16px] font-semibold font'>{slide.title}</p>
            </div>
            <h1 className='font-semibold text-3xl md:text-5xl text-white md:leading-15 mb-7 font'>
              {slide.subtitle.map((line, i) => (
                <React.Fragment key={i}>{line}<br /></React.Fragment>
              ))}
            </h1>
            <div className="flex gap-3 text-center text-sm mb-10">
              {timeLabels.map((label, idx) => {
                const val = Object.values(timeLeft)[idx] ?? 0;
                return (
                  <div key={label} className="flex items-center gap-1">
                    <div className='bg-[#ffffff] rounded-full p-2 flex flex-col items-center justify-center h-[62px] w-[62px]'>
                      <div className="text-[16px] font-semibold leading-none">
                        {String(val).padStart(2, '0')}
                      </div>
                      <div className="text-black text-[12px] font-medium">{label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <Button className='btn-green text-white text-[16px]'>
                {slide.buttonText}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleBanner;