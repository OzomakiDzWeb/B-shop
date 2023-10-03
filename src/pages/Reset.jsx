import { useState } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../fairbase/config'
import { toast } from 'react-toastify'
import Lodding from '../component/Lodding'

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
const Reset = () => {
  const [email,setemail]=useState('')
  const [Loding,setLoding]=useState(false)

  const resetPassword = e =>{
       e.preventDefault()
       setLoding(true)
       sendPasswordResetEmail(auth, email)
             .then(() => {
                    toast.success('check your email for reset link')
                    setLoding(false)
                     })
             .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                   toast.error(`${errorMessage} message code ${errorCode}`)
                   setLoding(false)
                  });
                  }

  return (
     <div className=' flex justify-center items-center h-[calc(100vh-80px)]  '>
      {Loding && <Lodding/>}
      <motion.form
        onSubmit={resetPassword}
        variants={contanerImg}
        initial='hidden'
        animate='visible'
         className='border border-gray-lghit  rounded-md flex items-center flex-col justify-between p-4 shadow-lg  ' >
        <h1 className='text-red3 text-bold'>Reset Password</h1>
        <input 
          className='inpt' 
          type='email' 
          placeholder='Email' 
          required 
          value={email} 
          onChange={e => setemail(e.target.value)}/>
        <button type='submit' className='btn bg-red3 mt-2'>Reset Password</button>
        <div className='flex justify-between w-full mt-2'>
          <Link to='/logIn' className='hover:text-red3 transition-all'>Login</Link>
          <Link to='/rigister' className='hover:text-red3 transition-all'>Register</Link>
        </div>
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

export default Reset