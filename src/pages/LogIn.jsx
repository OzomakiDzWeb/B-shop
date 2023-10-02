import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword ,} from 'firebase/auth'
import { auth } from '../fairbase/config'
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
const LogIn = () => {
 const [email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  const [Loding,setLoding]=useState(false)

  const navigat=useNavigate()
  const LogGoogle = ()=>{
    const provider=new GoogleAuthProvider()
    setLoding(true)
   signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setLoding(false)
        toast.success(`Login Successful..`)
           navigat('/')      
   }).catch((error) => {
        setLoding(false)
        const errorCode = error.code;
        const errorMessage = error.message;
         toast.error(`${errorMessage} code errore is ${errorCode}`)
    console.log(errorMessage)
  })}
  const LogInaut = e =>{
       e.preventDefault()
       setLoding(true)
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
     const user = userCredential.user.email.split('@')[0];
     toast.success(`Login Successful...`)
     setLoding(false)
     navigat('/')
  })
  .catch((error) => {
    toast.error(error.message)
     setLoding(false)
  });
    
  }
  return (
    <div className='relative flex justify-center items-center h-[calc(100vh-80px)]  '>
      {Loding && <Lodding/>}
      <motion.div
        variants={contanerImg}
        initial='hidden'
        animate='visible'
        className='hidden sm:block w-[400px] '>
        <img src='/src/assets/login.png' alt='loginImg'/>
      </motion.div>
      <motion.form
       onSubmit={LogInaut}
        variants={contanerLg}
        initial='hidden'
        animate='visible'
         className='border border-gray-lghit  rounded-md flex items-center flex-col justify-between p-4 shadow-lg  ' >
        <h1 className='text-red3 text-bold'>Login</h1>
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
        <button className='btn bg-red3 mt-2'><Link to='/logIn'>Login</Link></button>
        <Link className='hover:text-green2 transition-all duration-150' to='/reset'>Reset Password</Link>
        <div>--or--</div>
        <button onClick={LogGoogle} className='btn bg-green1 flex justify-center items-center gap-1'><AiFillGoogleCircle size={25}/>Login whith Google</button>
        <div className='mt-2'>Don t have account?<Link  className='hover:text-green2 transition-all duration-150 font-semibold'  to='/rigister'>Register</Link></div>
        </motion.form>
        
    </div>
  )
}

export default LogIn