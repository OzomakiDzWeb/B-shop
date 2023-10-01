import { Link, useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import { toast } from 'react-toastify';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../fairbase/config'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
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
const Rigister = () => {
  const [email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  const [conpasword,setconfPassword]=useState('')
  const [Loding,setLoding]=useState(false)
  const navigat=useNavigate()
  const registerUser = e =>{
    e.preventDefault()
    if(password!==conpasword){
       toast.error('Passwords is defrent')
    }else{
      setLoding(true)
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
     const user = userCredential.user.email.split('@')[0];
     toast.success(`Welcome ${user}`)
     setLoding(false)
     navigat('/logIn')
  })
  .catch((error) => {
    toast.error(error.message)
    setLoding(false)
  });
    }
  }
  return (
    <>
    
 
    <div className='relative flex justify-center items-center h-[calc(100vh-80px)]  '>
     {Loding && <Lodding/>}
      <motion.form
        variants={contanerImg}
        initial='hidden'
        animate='visible'
        onSubmit={registerUser}
         className='border border-gray-lghit   rounded-md flex items-center flex-col justify-between p-4 shadow-lg  ' >
        <h1 className='text-red3 text-bold'>Register</h1>
        <input 
            className='inpt' 
            type='email' 
            placeholder='Email' 
            required 
            value={email}
            onChange={e=>setEmail(e.target.value)}/>
        <input 
            className='inpt mt-2' 
            type='password' 
            placeholder='Password' 
            required 
            value={password}
            onChange={e=>setpassword(e.target.value)}/>
        <input 
            className='inpt mt-2' 
            type='password' 
            placeholder='confrm password' 
            required 
            value={conpasword}
            onChange={e=>setconfPassword(e.target.value)}/>
        <button 
            type='submit' 
            className='btn bg-red3 mt-2'>
              Rigister
        </button>
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
    </>
  )
}

export default Rigister