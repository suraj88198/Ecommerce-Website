import { FacebookIcon, InstagramIcon, LinkedinIcon, SubscribeIcon, TwitterIcon } from '@/utils/icons/icons'
import { Button, Input } from 'antd'
import Image from 'next/image'
import React from 'react'
import FooterMenu from '../footerMenu/footerMenu'

const Footer = () => {
  return (
    <>
    <div className='footer-main bg-black pt-20'>
        <div className='container'>
            <div className='footer-content-main flex gap-22 justify-between'>
                <div className='footer-logo max-w-[220px] w-full'>
                    <Image src="/footer-logo.png" alt="logo" width={118} height={100} />
                    <h2 className='text-white text-[20px] font-medium mt-6'>Subscribe</h2>
                    <p className='text-white text-[16px] font-normal mt-6 mb-4'>Get 10% off your first order</p>
                    <div className='footer-form relative'>
                        <Input type="email" placeholder='Enter your email' className='w-full form-input' />
                        <Button className='btn-outline news-btn'><SubscribeIcon /></Button>
                    </div>
                </div>

                <div className='footer-address'>
                    <h2 className='text-white text-[20px] font-medium mb-6'>Support</h2>
                    <p className='text-white text-[16px] font-normal mb-4'>111 Bijoy sarani, Dhaka,<br/>  DH 1515, Bangladesh.</p>
                    <p className='mb-4'><a href="mailto:exclusive@gmail.com" className='text-white text-[16px] font-normal'>exclusive@gmail.com</a></p>
                    <p className='mb-4'><a href="tel:+88015888889999" className='text-white text-[16px] font-normal'>+88015-88888-9999</a></p>
                </div>
                <div className='footer-menu'>
                    <FooterMenu />
                </div>
                <div className='footer-social'>
                    <h2 className='text-white text-[20px] font-medium mb-6'>Download App</h2>
                    <div className='barcode-content'>
                        <p className='text-[#ffffff] opacity-70 text-[12px] font-medium mb-2'>Save $3 with App New User Only</p>
                        <div className='qr-content flex gap-3 items-center'>
                            <Image src="/qrCode.png" alt="barcode" width={80} height={80} />
                            <div className='ft-app-btn flex flex-col gap-2'>
                                <a href="#" target='_blank' rel='noopener noreferrer'><Image src="/google-app.png" alt="googlePlay" width={106} height={32} /></a>
                                <a href="#" target='_blank' rel='noopener noreferrer'><Image src="/app-store.png" alt="appStore" width={106} height={36} /></a>
                            </div>
                        </div>
                    </div>
                    <div className='footer-social-barcode mt-6 flex gap-6'>
                        <a href="#" target='_blank' rel='noopener noreferrer'><FacebookIcon /></a>
                        <a href="#" target='_blank' rel='noopener noreferrer'><TwitterIcon /></a>
                        <a href="#" target='_blank' rel='noopener noreferrer'><InstagramIcon /></a>
                        <a href="#" target='_blank' rel='noopener noreferrer'><LinkedinIcon /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-copyright mt-11 py-5 border-t border-b border-[#7b7b7b4d]'>
            <div className='container'>
                <p className='text-[#7b7b7b4d] text-[16px] font-normal text-center'>© Copyright Rimel 2025. All right reserved</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer