import CategorySection from '@/components/categorySection/CategorySection'
import FlashSaleSection from '@/components/flashSaleSection/FlashSaleSection'
import BannerSlider from '@/components/bannerslider/slider'
import React from 'react'
import BestSellerSection from '@/components/bestSeller/bestseller'

const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='banner-container max-w-[972px] mx-auto p-10'>
          <BannerSlider/>
        </div>
        <div className='flashSec'>
          <FlashSaleSection/>
        </div>
        <div className='categorySec'>
          <CategorySection/>
        </div>
        <div className='bestSellerSec'>
          <BestSellerSection/>
        </div>
      </div>
    </>
  )
}

export default Home