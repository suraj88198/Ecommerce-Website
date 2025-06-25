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
    // children: [
    //   {
    //     type: 'group',
    //     children: [
    //       { label: 'Company', key: '/about/company' },
    //       { label: 'Team', key: '/about/team' },
    //     ],
    //   },
    // ],
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
    setOpen(false); // Close menu on navigation
  };

  // Mobile: Hamburger + menu
  // Desktop: Only menu
  return (
    <>
      {/* Mobile: Hamburger + menu */}
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
              onClick={onClick}
              selectedKeys={[pathname]}
              mode="vertical"
              items={items}
            />
          </div>
        )}
      </div>
      {/* Desktop: Only menu */}
      <div className="hidden lg:block">
        <Menu
          className="headerNavMenu w-full justify-center"
          onClick={onClick}
          selectedKeys={[pathname]}
          mode="horizontal"
          items={items}
        />
      </div>
    </>
  );
};

export default NavMenu;