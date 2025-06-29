import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/public/logoImg.png'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
        <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold'>
          SID <span className='text-accent-foreground'>WRITES</span>
        </h1>
        <Image src={logoImg} alt='Sid' className='h-8 w-8 sm:h-10 sm:w-10 lg:h-13 lg:w-13 rounded-full border-2' />
      </Link>
  )
}

export default Logo
