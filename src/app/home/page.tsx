import FlashSaleSection from '@/components/flashSaleSection/FlashSaleSection'
import BannerSlider from '@/components/slider/slider'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='banner-container max-w-[972px] mx-auto p-10'>
          <BannerSlider/>
        </div>
        <div>
          <FlashSaleSection/>
        </div>
      </div>
    </>
  )
}

export default Home