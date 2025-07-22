'use client';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { usePathname, useRouter } from 'next/navigation';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Home',
    key: '/',
  },
  {
    label: 'Contact',
    key: '/contact',
  },
  {
    label: 'About',
    key: '/about',
  },
  {
    label: 'Sign Up',
    key: '/signup',
  },
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
      {/* Mobile */}
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
          <div className="absolute left-0 w-[calc(100vw-30px)] bg-white z-50 shadow-md mt-2">
            <Menu
              className="headerNavMenuMobile w-full justify-center"
              selectedKeys={[String(pathname)]}
              onClick={onClick}
              mode="horizontal"
              items={items}
            />
          </div>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <Menu
          className="headerNavMenu w-full justify-center"
          selectedKeys={[String(pathname)]}
          onClick={onClick}
          mode="horizontal"
          items={items}
        />
      </div>
    </>
  );
};

export default NavMenu;
