import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/public/logoImg.png'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
        <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold'>
          SIDDHARTHA <span className='text-accent-foreground'>BANIYA</span>
        </h1>
      </Link>
  )
}

export default Logo
