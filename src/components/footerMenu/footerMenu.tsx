import React from 'react'

const accountLinks = [
  'My Account',
  'Login / Register',
  'Cart',
  'Wishlist',
  'Shop',
];

const quickLinks = [
  'Privacy Policy',
  'Terms Of Use',
  'FAQ',
  'Contact',
];

const FooterMenu = () => {
  return (
    <div className='flex gap-22'>
      {/* Account Section */}
      <div>
        <h2 className='text-white text-[20px] font-medium mb-6'>Account</h2>
        <ul className='p-0 m-0 list-none'>
          {accountLinks.map(link => (
            <li key={link} className='text-white text-[16px] font-normal mb-4'><a href="#">{link}</a></li>
          ))}
        </ul>
      </div>
      {/* Quick Link Section */}
      <div>
        <h2 className='text-white text-[20px] font-medium mb-6'>Quick Links</h2>
        <ul className='p-0 m-0 list-none'>
          {quickLinks.map(link => (
            <li key={link} className='text-white text-[16px] font-normal mb-4'><a href="#">{link}</a></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FooterMenu