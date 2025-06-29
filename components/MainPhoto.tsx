'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'
import mainPhoto from '@/public/mainPhoto.png'

const MainPhoto = () => {
    return (
        <div className='w-full h-full relative'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.4, ease: 'easeIn' }} className='flex items-center justify-center w-full h-full'>
                <div className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full mix-blend-lighten'>
                    <Image src={mainPhoto} alt='Sid' fill priority quality={100} className = 'object-contain' />
                </div>
            </motion.div>
        </div>
    )
}

export default MainPhoto;