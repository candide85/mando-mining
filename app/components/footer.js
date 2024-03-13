import React from 'react'
import Image from 'next/image'
import diamond from '../../public/images/diamond.png'

export default function Footer() {
  return (
    <div className=' h-32 mx-1 flex navBgColor justify-around'>
      <div className=' flex p-2 items-center justify-around'>
        <div>
          <Image 
              alt='image missing'
                src={diamond}
                width={100}
                height={100}
              />
        </div>
              <div>
                <li className='text-sm font-medium'>Infinite Sparkle, Timeless Beauty.</li>
                <li className='text-sm font-medium'>Diamonds for Every Occasion.</li>    
                <li className='text-sm font-medium'>The Exclusive Diamond Experience.</li>            
              </div>
      </div>
      <div className='flex items-center'>
        <div className=' divide-y-1 border border-black h-28 text-center'></div>
      </div>
      <div className='flex flex-col p-4'>
        <h4 className=' underline font-semibold'>SERVICES</h4>
        <li>Jewelery</li>
        <li>Raw Gold</li>
        <li>Raw Diamond</li>
      </div>
      <div className=' flex items-center'>
        <div className='divide-y-1 border border-black h-28 text-center'></div>
      </div>
      <div className='flex flex-col p-4 '>
        <h4 className=' underline font-semibold'>CONTACT</h4>
        <li>Phone: +234 444 570 88</li>
        <li>Email: safe-mining@mando.com</li>
        <li>3357 Freetown Agura Street</li>
      </div>
    </div>
  )
}
