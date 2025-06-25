import Image from 'next/image'
import React from 'react'

const HeaderLogo = () => {
  return (
    <div className='header-logo w-full max-w-[118px]'>
        <Image src="/header-logo2.png" alt="logo" width={118} height={120} />
    </div>
  )
}

export default HeaderLogo