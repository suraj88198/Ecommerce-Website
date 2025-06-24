import Image from 'next/image'
import React from 'react'

const HeaderLogo = () => {
  return (
    <div className='header-logo w-full max-w-[100px]'>
        <Image src="/header-logo.png" alt="logo" width={120} height={120} />
    </div>
  )
}

export default HeaderLogo