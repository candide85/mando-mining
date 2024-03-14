'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import diamond from '../../public/images/diamond.png'
import {usePathname} from 'next/navigation'
import {
  InstapaperShareButton,
  InstapaperIcon,
} from 'next-share'
import {
  FacebookShareButton,
  FacebookIcon,
} from 'next-share'
import {
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share'
import next from 'next'



export default function Navbar() {
  const currentRoute = usePathname();
  return (
    <div className='flex  h-20 mx-1 items-center justify-center navBgColor'>
        <div className='flex-1'>
          <div className='flex items-center'>
            <a href="/">
              <Image 
              alt='image missing'
                src={diamond}
                width={70}
                height={70}
              />
            </a>
            <p className=' text-wrap w-24 text-center font-semibold text-sm'>MANDO MINING LTD</p>
          </div>

        </div>
        <div className='flex-1'>
            <Link href="/" className={`${currentRoute === '/' ? 'padNav' : ""} font-medium text-l text-center mr-5`}>HOME</Link>
            <Link href={"/about"} className={`${currentRoute === '/about' ? 'padNav' : ""} font-medium text-l mr-5 text-center`}>ABOUT</Link>
            <Link href="/our-products" className={`${currentRoute === '/our-products' ? 'padNav' : ""} font-medium mr-5 text-l text-center`}>OUR-PRODUCTS</Link>
            <Link href="/contact" className={`${currentRoute === '/contact' ? 'padNav' : ""} font-medium text-l mr-5 text-center`}>CONTACT</Link>
        </div>
        <div className='flex justify-end items-center mr-10'>
            <p className='padFollow font-semibold  text-l text-center bg-white rounded-full pt-1 pl-3 pb-1 pr-3'>FOLLOW US</p>           

            <FacebookShareButton
              url={'https://github.com/next-share'}
              title={'next-share is a social share buttons for your next React apps.'}
              style={{marginRight:10}}
            >
              <FacebookIcon size={30} round />
            </FacebookShareButton>

            <LinkedinShareButton url={'https://github.com/next-share'} style={{marginRight:10}}>
              <LinkedinIcon size={30} round />
            </LinkedinShareButton>

            <InstapaperShareButton
            url={'https://github.com/next-share'}
            title={'Next Share'}
          >
            <InstapaperIcon size={30} round />
          </InstapaperShareButton>
                                
        </div>
    </div>
  )
}
