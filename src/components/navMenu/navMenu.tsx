'use client';
import React from 'react';
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
  const pathname = usePathname();
  const router = useRouter();

  const onClick: MenuProps['onClick'] = (e) => {
    router.push(e.key);
  };

  return <Menu className='w-full headerNavMenu justify-center' onClick={onClick} selectedKeys={[pathname]} mode="horizontal" items={items} />;
};

export default NavMenu;