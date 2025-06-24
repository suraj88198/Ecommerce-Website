import React from 'react';
import { Button, Input } from 'antd';
import { HeaderCartIcon, HeaderWishlistIcon } from '@/utils/icons/icons';

const HeaderRight: React.FC = () => (
    <div className='header-right-container flex items-center gap-4 max-w-max justify-end w-full'>
        <div className='header-search w-[250px] mr-2'>
            <Input placeholder="What are you looking for?" variant="filled" className='w-full' />
        </div>
        <div className='header-wishlist'>
            <Button><HeaderWishlistIcon/></Button>
        </div>
        <div className='header-cart'>
            <Button><HeaderCartIcon/></Button>
        </div>
    </div>
);

export default HeaderRight;