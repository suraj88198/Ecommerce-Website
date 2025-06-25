import React from 'react'
import NavMenu from '../navMenu/navMenu'
import HeaderLogo from '../headerLogo/headerLogo'
import HeaderRight from '../headerRight/headerRight'

const Header = () => {
  return (
    <div className='header-main bg-white border-b border-[#cccccc] pt-10 pb-4'>
        <div className='container'>
            <div className='header-content flex items-center justify-between'>
              <HeaderLogo/>
              <NavMenu/>
              <HeaderRight/>
            </div>
        </div>
    </div>
  )
}

export default Header