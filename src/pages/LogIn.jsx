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
const LogIn = () => {
  return (
    <div className=' flex justify-center items-center h-[calc(100vh-80px)]  '>
      <motion.div
        variants={contanerImg}
        initial='hidden'
        animate='visible'
        className='hidden sm:block w-[400px] '>
        <img src='/src/assets/login.png' alt='loginImg'/>
      </motion.div>
      <motion.form
        variants={contanerLg}
        initial='hidden'
        animate='visible'
         className='border border-gray-lghit  rounded-md flex items-center flex-col justify-between p-4 shadow-lg  ' >
        <h1 className='text-red3 text-bold'>Login</h1>
        <input className='inpt' type='email' placeholder='Email' required/>
        <input className='inpt mt-2' type='password' placeholder='Password' required/>
        <button className='btn bg-red3 mt-2'><Link to='/logIn'>Login</Link></button>
        <Link className='hover:text-green2 transition-all duration-150' to='/reset'>Reset Password</Link>
        <div>--or--</div>
        <button className='btn bg-green1'>Login whith Google</button>
        <div className='mt-2'>Don t have account?<Link  className='hover:text-green2 transition-all duration-150 font-semibold'  to='/rigister'>Register</Link></div>
      </motion.form>
    </div>
  )
}

export default LogIn