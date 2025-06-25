import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'Contact',
    key: 'contact',
  },
  {
    label: 'About',
    key: 'aboutSubMenu',
    children: [
      {
        type: 'group',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
    ],
  },
  {
    label: 'Sign Up',
    key: 'signUp',
  },
];

const NavMenu: React.FC = () => {
  const [current, setCurrent] = useState('mail');
  
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu className='w-full headerNavMenu justify-center' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default NavMenu;