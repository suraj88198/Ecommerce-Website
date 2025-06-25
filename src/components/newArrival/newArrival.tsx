import React from 'react';
import { Button } from 'antd';

interface Product {
    id: number;
    image: string;
    title: string;
    subtitle: string[];
    buttonText:string;
  }

const newArrival: Product[] = [
    {
        id: 1,
        image: '/products/new-1.png',
        title: 'PlayStation 5',
        subtitle: ['Black and White version of the PS5', 'coming out on sale.'],
        buttonText:'Shop Now',

    },
    {
        id: 2,
        image: '/products/new-2.png',
        title: 'Women’s Collections',
        subtitle:['Featured woman collections that', 'give you another vibe.'],
        buttonText:'Shop Now',
    },
    {
        id: 3,
        image: '/products/new-3.png',
        title: 'Speakers',
        subtitle:['Amazon wireless speakers'],
        buttonText:'Shop Now',
    },
    {
        id: 4,
        image: '/products/new-4.png',
        title: 'Perfume',
        subtitle:['GUCCI INTENSE OUD EDP'],
        buttonText:'Shop Now',
    },
];


const services = [
{
    id: 1,
    image: '/products/service-1.png',
    title: 'FREE AND FAST DELIVERY',
    subtitle: ['Free delivery for all orders over $140'],
},
{
    id: 2,
    image: '/products/service-2.png',
    title: '24/7 CUSTOMER SERVICE',
    subtitle: ['Friendly 24/7 customer support'],
},
{
    id: 3,
    image: '/products/service-3.png',
    title: 'MONEY BACK GUARANTEE',
    subtitle: ['We reurn money within 30 days'],
},
];


const NewArrivalSection = () => {

  return (
    <section className='mt-10 md:mt-20'>
      <div className="text-[#DB4444] font-semibold text-[16px] slideTopText pl-9">Featured</div>
      <h2 className="text-2xl md:text-3xl font-semibold mt-4 md:mt-8 tracking-wide">New Arrival</h2>
      <div className="mt-10 grid gap-[30px] grid-cols-4 grid-rows-4 newarrival-grid">
        {newArrival.map((product) => (
          <div key={product.id} className='arrival-items rounded-md relative w-full h-full flex'>
            <div className="arrival-img rounded-md w-full h-full">
                <img className='rounded-md w-full h-full' src={product.image} alt={product.title}/>
            </div>

            <div className='absolute bottom-8 left-7 right-0 max-w-max'>
                <h4 className="font-medium text-[24px] text-[#FAFAFA] font mb-2 leading-6">{product.title}</h4>
                <p className="text-[14px] text-[#FAFAFA] font-regular my-2">
                    {product.subtitle.map((line, i) => (<React.Fragment key={i}>{line}<br /></React.Fragment>))}
                </p>
                <Button className="text-[16px] text-white btn-outline">{product.buttonText}</Button>
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 max-w-[960px] mx-auto my-10 md:my-25 service-box-main'>
        {services.map((icons) => (
            <div key={icons.id} className='service-items rounded-md relative text-center'>
                <div className="service-img rounded-md">
                    <img className='rounded-md max-w-max mx-auto' src={icons.image} alt={icons.title}/>
                </div>

                <div className='mt-6'>
                    <h4 className="font-semibold text-[20px] text-black font">{icons.title}</h4>
                    <p className="text-[14px] text-black font-regular my-1">
                        {icons.subtitle.map((line, i) => (<React.Fragment key={i}>{line}<br /></React.Fragment>))}
                    </p>
                </div>
            </div>
            ))}
      </div>
    </section>
  );
};

export default NewArrivalSection;