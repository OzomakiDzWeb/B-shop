import React from 'react'
import {motion} from 'framer-motion'
import {contanerImg} from '../customHookes/function'
const Page404 = () => {
  return (
    <motion.div
           variants={contanerImg}
           initial='hidden'
           animate='visible' className='min-h-screen flex flex-col justify-center items-center'>
     <h1 className='text-[100px] font-extrabold'>404</h1>
     <p className='font-bold'>sorry this page Not found!</p>
    </motion.div>
  )
}

export default Page404