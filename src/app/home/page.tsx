import CategorySection from '@/components/categorySection/CategorySection'
import FlashSaleSection from '@/components/flashSaleSection/FlashSaleSection'
import React from 'react'
import BannerSlider from '@/components/bannerSlider/slider'
import BestSellerSection from '@/components/bestSeller/bestseller'
import SingleBanner from '@/components/singleBanner/SingleBanner'
import OurProductsSection from '@/components/ourProducts/ourProducts'
import NewArrivalSection from '@/components/newArrival/newArrival'

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
        <div className='singleBannerSec'>
          <SingleBanner/>
        </div>
        <div className='ourProductsSec'>
          <OurProductsSection/>
        </div>
        <div className='newArrivalSec'>
          <NewArrivalSection/>
        </div>
      </div>
    </>
  )
}

export default Home