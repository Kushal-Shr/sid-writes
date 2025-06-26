import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { Button } from './ui/button'
import { TiSocialLinkedin, TiSocialInstagramCircular,TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { IoSunnySharp } from "react-icons/io5";


const Header = () => {
  return (
    <header className='w-full p-15 px-30 flex justify-between items-center border-1'>
      <Logo />

      <nav className='flex items-center gap-6 text-lg font-semibold border-primary border-2 p-3 px-5 rounded-4xl'>
        <Link href = '/'>Home</Link>
        <Link href = '/about'>About</Link>
        <Link href = '/blog'>Blog</Link>
        <Link href = '/contact'>Contact</Link>
        <Button className='rounded-full '>
            <IoSunnySharp className='text-2xl'/>
        </Button>
      </nav>

      <div className='flex items-center gap-4'>
        <Link href='#'>
            <TiSocialInstagramCircular className='text-3xl hover:scale-115 transition-all ease duration-200' />
        </Link>
        <Link href='#'>
            <TiSocialFacebook className='text-3xl hover:scale-115 transition-all ease duration-200' />
        </Link>
        <Link href='#'>
            <TiSocialLinkedin className='text-3xl hover:scale-115 transition-all ease duration-200' />
        </Link>
        <Link href='#'>
            <TiSocialTwitter className='text-3xl hover:scale-115 transition-all ease duration-200' />
        </Link>
      </div>
    </header>
  )
}

export default Header
