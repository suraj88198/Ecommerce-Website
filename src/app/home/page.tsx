import BannerSlider from '@/components/slider/slider'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='banner-container max-w-[970px] mr-auto ml-auto p-10'><BannerSlider/></div>
      </div>
    </>
  )
}

export default Home