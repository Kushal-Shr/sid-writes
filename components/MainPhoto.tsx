'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'
import mainPhoto from '@/public/mainPhoto.png'

const MainPhoto = () => {
    return (
        <div className='w-full h-full relative mb-10'>
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.3, duration: 0.4, ease: 'easeIn' }} 
                className='flex items-center justify-center w-full h-full relative'
            >
                {/* Animated Circle Spots */}
                <motion.div
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className='absolute inset-0 w-[350px] h-[350px] xl:w-[520px] xl:h-[520px]'
                >
                    {/* Top */}
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent-foreground/60 rounded-full'></div>
                    {/* Top Right */}
                    <div className='absolute top-8 right-8 w-2 h-2 bg-accent-foreground/40 rounded-full'></div>
                    {/* Right */}
                    <div className='absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-4 bg-accent-foreground/70 rounded-full'></div>
                    {/* Bottom Right */}
                    <div className='absolute bottom-12 right-16 w-2.5 h-2.5 bg-accent-foreground/50 rounded-full'></div>
                    {/* Bottom */}
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 bg-accent-foreground/60 rounded-full'></div>
                    {/* Bottom Left */}
                    <div className='absolute bottom-8 left-8 w-2 h-2 bg-accent-foreground/45 rounded-full'></div>
                    {/* Left */}
                    <div className='absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 bg-accent-foreground/65 rounded-full'></div>
                    {/* Top Left */}
                    <div className='absolute top-16 left-12 w-2.5 h-2.5 bg-accent-foreground/55 rounded-full'></div>
                </motion.div>

                {/* Additional floating spots */}
                <motion.div
                    animate={{ 
                        y: [-10, 10, -10],
                        x: [-5, 5, -5]
                    }}
                    transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className='absolute top-4 right-20 w-1.5 h-1.5 bg-accent-foreground/30 rounded-full'
                ></motion.div>

                <motion.div
                    animate={{ 
                        y: [10, -10, 10],
                        x: [5, -5, 5]
                    }}
                    transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className='absolute bottom-6 left-24 w-1.5 h-1.5 bg-accent-foreground/35 rounded-full'
                ></motion.div>

                {/* Main photo container */}
                <div className='w-[298px] h-[298px] xl:w-[450px] xl:h-[450px] rounded-full relative'>
                    <Image 
                        src={mainPhoto} 
                        alt='Sid' 
                        fill 
                        priority 
                        quality={100} 
                        className='object-contain rounded-full' 
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default MainPhoto;