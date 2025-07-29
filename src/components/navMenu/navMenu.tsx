'use client';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu, Input, Button } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { HeaderWishlistIcon } from '@/utils/icons/icons';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { label: 'Home', key: '/' },
  { label: 'Contact', key: '/contact' },
  { label: 'About', key: '/about' },
  { label: 'Sign Up', key: '/signup' },
];

const NavMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const onClick: MenuProps['onClick'] = (e) => {
    router.push(e.key);
    setOpen(false);
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className="block lg:hidden relative">
        <button
          className="p-2"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <span className="block w-6 h-0.5 bg-black mb-[6px]"></span>
          <span className="block w-6 h-0.5 bg-black mb-[6px]"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        {open && (
          <div className="absolute left-0 w-[calc(100vw-30px)] bg-white z-50 shadow-md mt-2 p-4 space-y-4">
            {/* 🔍 Search Input */}
            <div className="max-w-[768px] w-full header-search header-searchMobile">
              <Input
                placeholder="What are you looking for?"
                variant="filled"
                className="w-full"
              />
            </div>

            {/* ❤️ Wishlist Button */}
            <div className="header-wishlist mb-2">
              {/* <Button className='mobileWishlist flex items-center' icon={<HeaderWishlistIcon/>}>Wishlist</Button> */}
            <Button
              className="mobileWishlist flex items-center"
              icon={<HeaderWishlistIcon />}
              onClick={() => {
                router.push('/wishlist');
                setOpen(false);
              }}
              >
              Wishlist
            </Button>
              </div>


            {/* 📄 Menu */}
            <Menu
              mode="vertical"
              items={items}
              selectedKeys={[String(pathname)]}
              onClick={onClick}
              className="headerNavMenuMobile w-full"
              overflowedIndicator={false}
            />
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:block">
        <Menu
          mode="horizontal"
          items={items}
          selectedKeys={[String(pathname)]}
          onClick={onClick}
          className="headerNavMenu w-full justify-center"
          overflowedIndicator={false}
        />
      </div>
    </>
  );
};

export default NavMenu;
