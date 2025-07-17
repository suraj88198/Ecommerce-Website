import React from 'react'
import CategorySection from '@/components/categorySection/CategorySection'
import FlashSaleSection from '@/components/flashSaleSection/FlashSaleSection'
import BannerSlider from '@/components/bannerslider/slider'
import BestSellerSection from '@/components/bestSeller/bestseller'
import SingleBanner from '@/components/singleBanner/SingleBanner'
import OurProductsSection from '@/components/ourProducts/ourProducts'
import NewArrivalSection from '@/components/newArrival/newArrival'
import AwardsSection from '@/components/awardSection/awardsSection'

const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='banner-container max-w-[972px] mx-auto p-0 md:p-10 mt-8 md:mt-0'>
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
        <div className='awardSec'>
          <AwardsSection/>
        </div>
      </div>
    </>
  )
}

export default Home