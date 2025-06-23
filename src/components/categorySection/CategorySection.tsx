import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PhoneIcon, ComputerIcon, SmartWatchIcon, CameraIcon, HeadPhonesIcon, GamingIcon } from '@/utils/icons/icons';

const categories = [
  { name: 'Phones', icon: <PhoneIcon /> },
  { name: 'Computers', icon: <ComputerIcon /> },
  { name: 'SmartWatch', icon: <SmartWatchIcon /> },
  { name: 'Camera', icon: <CameraIcon /> },
  { name: 'HeadPhones', icon: <HeadPhonesIcon /> },
  { name: 'Gaming', icon: <GamingIcon /> },
];

const sliderSettings = {
  infinite: true,
  autoplay: false,
  autoplaySpeed: 3000,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 600, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

const CategorySection = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className='mt-20 mb-17 pb-17 border-[#cccccc] border-b'>
      <div className="text-[#DB4444] font-semibold text-[16px] slideTopText pl-9">Categories</div>
      <h2 className="text-2xl md:text-3xl font-bold mt-8 tracking-wide">Browse By Category</h2>
      <Slider {...sliderSettings} className="mt-10" >
        {categories.map((cat, idx) => (
          <div key={cat.name}>
            <button onClick={() => setSelected(idx)} className={`w-full cursor-pointer flex flex-col items-center p-6 rounded-lg border border-[#cccccc] ${selected === idx ? 'bg-[#DB4444] text-white border-transparent' : 'bg-white text-black'} transition`}>
              <span className="mb-[15px]">{cat.icon}</span>
              <span className="font-medium text-[16px]">{cat.name}</span>
            </button>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CategorySection;