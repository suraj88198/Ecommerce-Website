import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

const slides = [
  {
    image: '/images/signleBanner.png',
    subimage: '',
    title: 'Categories',
    subtitle: ['Enhance Your', 'Music Experience'],
    buttonText: 'Buy Now!',
  },
];

const SingleBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({
    hours: 0,
    days: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown logic
  useEffect(() => {
    const target = new Date();
    target.setHours(target.getHours() + 72);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ hours: 0, days: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ hours, days, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    {slides.map((slide, index) => (
      <div key={index} className='banner-slide mb-8 md:mb-14'>
        <img src={slide.image} alt={`Banner ${index + 1}`} className='w-full h-full'/>
        <div className='bannerContent'>
        <div className='flex items-center mb-7'>
            {slide.subimage && <span><img src={slide.subimage} alt=""/></span>}
            <p className='text-[#00FF66] text-[16px] font-semibold font'>{slide.title}</p>
        </div>
        <h1 className='font-semibold text-3xl md:text-5xl text-white md:leading-15 mb-7 font'>
            {slide.subtitle.map((line, i) => (<React.Fragment key={i}>{line}<br /></React.Fragment>))}
        </h1>

        <div className="flex gap-3 text-center text-sm mb-10">
          {['Hours', 'Days', 'Minutes', 'Seconds'].map((label, idx, arr) => {
            const val = Object.values(timeLeft)[idx] ?? 0;
            return (
              <div key={label} className="flex items-center gap-1">
                <div className='bg-[#ffffff] rounded-full p-2 flex flex-col items-center justify-center h-[62px] w-[62px]'>
                  <div className="text-[16px] font-semibold leading-none">
                    {String(val).padStart(2, '0')}
                  </div>
                  <div className="text-black text-[13px] font-medium">{label}</div>
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
