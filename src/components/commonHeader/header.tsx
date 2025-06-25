import React from 'react'
import NavMenu from '../navMenu/navMenu'
import HeaderLogo from '../headerLogo/headerLogo'
import HeaderRight from '../headerRight/headerRight'

const Header = () => {
  return (
    <div className='header-main bg-white border-b border-[#cccccc] pt-10 pb-4'>
        <div className='container'>
            <div className='header-content flex items-center justify-between relative'>
              {/* Left: Logo (desktop), Hamburger (mobile) */}
              <div className="flex-1 flex items-center">
                {/* Desktop: Logo, Mobile: Hamburger handled in NavMenu */}
                <div className="hidden lg:block">
                  <HeaderLogo/>
                </div>
                <div className="block lg:hidden">
                  <NavMenu/>
                </div>
              </div>
              {/* Center: Navbar (desktop), Logo (mobile) */}
              <div className="flex-1 flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0">
                <div className="block lg:hidden">
                  <HeaderLogo/>
                </div>
                <div className="hidden lg:block w-full max-w-2xl">
                  <NavMenu/>
                </div>
              </div>
              {/* Right: Search, Cart, Wishlist */}
              <div className="flex-1 flex justify-end items-center">
                <HeaderRight/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header