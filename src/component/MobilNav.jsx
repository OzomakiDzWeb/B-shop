import { AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"
import {motion,AnimatePresence} from 'framer-motion'
const MobilNav = ({show,setshow}) => {
     const containerVariant={
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{delay:1.5,duration:2}
  },
  exit:{
    x:'-100vw',
    transition:{delay:0.5,duration:2}
  }
}
  return (


    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
     className={`${show?'flex':'hidden'} h-screen w-1/2  fixed top-0 right-0 z-20 flex-col justify-center bg-gray-lghit px-3 `}>
       <div className="flex flex-col justify-center items-center gap-4">
          <Link onClick={()=>setshow(!show)} className="animate-link" to='/'>Home</Link>
          <Link onClick={()=>setshow(!show)} className="animate-link" to='/contact'>Countact Us</Link>
          <Link onClick={()=>setshow(!show)} className="animate-link" to='/logIn'>Login</Link>
          <Link onClick={()=>setshow(!show)} className="animate-link" to='/rigister'>Register</Link>
          <Link onClick={()=>setshow(!show)} className="animate-link" to='/order'>My Orders</Link>
           </div>
       <AiOutlineClose
         onClick={()=>setshow(!show)} 
         className="absolute top-10 right-5 cursor-pointer"/>
    </motion.div>

  )
}

export default MobilNav