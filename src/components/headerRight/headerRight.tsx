'use client';
import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { HeaderCartIcon, HeaderSearchIcon, HeaderWishlistIcon } from '@/utils/icons/icons';

const HeaderRight: React.FC = () => {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className='header-right-container flex items-center gap-2 lg:gap-4 max-w-max justify-end w-full'>
            {/* Desktop: Search input, Mobile: Search icon (toggle input) */}
            <div className='hidden lg:block w-[250px] mr-2 header-search'>
                <Input placeholder="What are you looking for?" variant="filled" className='w-full' />
            </div>
            <div className='lg:hidden searchMobile flex items-center justify-center'>
                <Button className='btn-outline flex items-center justify-center' icon={<HeaderSearchIcon />} onClick={() => setShowSearch((s) => !s)} />
            </div>
            {/* Mobile: Show search input if toggled */}
            {showSearch && (
                <div className='block lg:hidden max-w-[200px] w-full mr-2 bg-none header-searchMobile'>
                    <Input autoFocus placeholder="What are you looking for?" variant="filled" className='w-full bg-none' onBlur={() => setShowSearch(false)} />
                </div>
            )}
            <div className='header-wishlist'>
                <Button><HeaderWishlistIcon/></Button>
            </div>
            <div className='header-cart'>
                <Button><HeaderCartIcon/></Button>
            </div>
        </div>
    );
};

export default HeaderRight;