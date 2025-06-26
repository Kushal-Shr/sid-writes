import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/public/logoImg.png'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 ">
        <h1 className='text-3xl font-bold'>
          SID <span className='text-accent-foreground'>WRITES</span>
        </h1>
        <Image src={logoImg} alt='Sid' className='h-13 w-13 rounded-full border-2' />
    </Link>
  )
}

export default Logo
