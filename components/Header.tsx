'use client'

import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import { TiSocialLinkedin, TiSocialInstagramCircular, TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { IoSunnySharp } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const NavLinks = () => (
    <>
      <Link href='/' onClick={() => setIsOpen(false)}>Home</Link>
      <Link href='/about' onClick={() => setIsOpen(false)}>About</Link>
      <Link href='/blog' onClick={() => setIsOpen(false)}>Blog</Link>
      <Link href='/contact' onClick={() => setIsOpen(false)}>Contact</Link>
    </>
  )

  const SocialLinks = () => (
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
  )

  const ThemeToggle = () => (
    mounted && (
      <Button
        className='rounded-full'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <IoSunnySharp className='text-2xl' />
        ) : (
          <FiMoon className='text-2xl' />
        )}
      </Button>
    )
  )

  return (
    <header className={`sticky top-0 min-h-[64px)] will-change-[padding] w-full px-6 lg:px-30 flex justify-between items-center bg-background z-50 transition-all duration-100 ease-in-out overflow-x-hidden ${
      isScrolled 
        ? 'py-4 xl:py-4 shadow-md' 
        : 'py-4 xl:py-6'
    }`}>
      <Logo />

      {/* Desktop Navigation */}
      <nav className={`hidden lg:flex items-center gap-6 font-semibold border-primary border-2 rounded-4xl transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'p-2 px-4 text-base gap-4' 
          : 'p-3 px-5 text-lg gap-6'
      }`}>
        <NavLinks />
        <ThemeToggle />
      </nav>

      {/* Desktop Social Links */}
      <div className={`hidden lg:flex items-center transition-all duration-300 ease-in-out ${
        isScrolled ? 'p-3' : 'p-6'
      }`}>
        <SocialLinks />
      </div>

      {/* Mobile Navigation */}
      <div className='flex lg:hidden items-center gap-4'>
        <ThemeToggle />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col items-center pt-20 h-full gap-12">
              {/* Mobile Navigation Links */}
              <nav className='flex flex-col items-center gap-6 text-lg font-semibold'>
                <NavLinks />
              </nav>
              
              {/* Mobile Social Links */}
              <div className='flex flex-col items-center gap-4'>
                <h3 className='text-lg font-semibold'>Follow Me</h3>
                <SocialLinks />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header