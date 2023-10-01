import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const contanerImg={
  hidden:{
    x:'-100vw',
    opacity :0
  },
  visible:{
    x:0,
    opacity :1,
    transition:{duration:0.5}
  },
}
const contanerLg={
  hidden:{
    x:'100vw',
    opacity :0
  },
  visible:{
    x:0,
    opacity :1,
    transition:{duration:0.5}
  },
}
const Rigister = () => {
  return (
    <div className=' flex justify-center items-center h-[calc(100vh-80px)]  '>
     
      <motion.form
        variants={contanerImg}
        initial='hidden'
        animate='visible'
         className='border border-gray-lghit  rounded-md flex items-center flex-col justify-between p-4 shadow-lg  ' >
        <h1 className='text-red3 text-bold'>Register</h1>
        <input className='inpt' type='email' placeholder='Email' required/>
        <input className='inpt mt-2' type='password' placeholder='Password' required/>
        <input className='inpt mt-2' type='password' placeholder='confrm password' required/>
        <button className='btn bg-red3 mt-2'><Link >Rigister</Link></button>
        <div className='mt-2'>Arealy an Account?<Link  className='hover:text-green2 transition-all duration-150 font-semibold'  to='/logIn'>LogIn</Link></div>
      </motion.form>
       <motion.div
        variants={contanerLg}
        initial='hidden'
        animate='visible'
        className='hidden sm:block w-[400px] '>
        <img src='/src/assets/register.png' alt='loginImg'/>
      </motion.div>
    </div>
  )
}

export default Rigister