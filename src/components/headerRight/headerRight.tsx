'use client';
import React from 'react';
import { Button, Input, MenuProps, Space } from 'antd';
import { CancellationsIcon, HeaderCartIcon, HeaderWishlistIcon, LogoutIcon, OrderIcon, ReviewStarIcon, UserIcon, UserIconRed } from '@/utils/icons/icons';
import Dropdown from 'antd/es/dropdown/dropdown';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Manage My Account',
    icon: <UserIcon />
    
  },
  {
    key: '2',
    label: 'My Order',
    icon:<OrderIcon/>
  },
  {
    key: '3',
    label: 'My Cancellations',
    icon:<CancellationsIcon/>
  },
  {
    key: '4',
    label: 'My Reviews',
    icon:<ReviewStarIcon/>
  },
 {
    type: 'divider',
  },
  {
    key: '5',
    label: 'Logout',
    icon:<LogoutIcon/>
  },
];

const HeaderRight: React.FC = () => {
    return (
        <div className='header-right-container flex items-center gap-1 lg:gap-4 max-w-max justify-end w-full'>
            
            <div className='hidden lg:block w-[250px] mr-2 header-search'>
                <Input placeholder="What are you looking for?" variant="filled" className='w-full' />
            </div>

            {/* Mobile: Show search input if toggled */}
            {/* {showSearch && (
                <div className='block lg:hidden max-w-[200px] w-full mr-2 bg-none header-searchMobile'>
                    <Input autoFocus placeholder="What are you looking for?" variant="filled" className='w-full bg-none' onBlur={() => setShowSearch(false)} />
                </div>
            )} */}

            <div className='header-wishlist hidden lg:block'>
                <Button><HeaderWishlistIcon/></Button>
            </div>

            <div className='header-cart'>
                <Button><HeaderCartIcon/></Button>
            </div>

            <div className='header-account flex items-center'>
                <Dropdown menu={{ items }} className='header-user cursor-pointer'
                    overlayClassName="custom-user-dropdown">
                    <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <UserIconRed/>
                    </Space>
                    </a>
                </Dropdown>
            </div>
        </div>
    );
};

export default HeaderRight;