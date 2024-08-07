import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row py-5 items-center bg-black'>
        <Image src={assets.logo_light} alt=' ' width={120}/>
        <p className='text-sm text-white'>All rights reserved. Copyright @blogger - {year} </p>
        <div className='flex'>
            <Image src={assets.facebook_icon} alt='fb-icon' width={40}/>
            <Image src={assets.twitter_icon} alt='twt-icon' width={40}/>
            <Image src={assets.googleplus_icon} alt='g-icon' width={40}/>

        </div>
    </div>
  )
}

export default Footer