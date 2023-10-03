import { AiOutlineClose, AiOutlineShopping, AiOutlineUser } from "react-icons/ai"
import { Link, NavLink } from "react-router-dom"
import {motion} from 'framer-motion'

// eslint-disable-next-line react/prop-types
const MobilNav = ({show,setshow,LogOut,conct}) => {
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
    transition:{delay:0.5,duration:0.5}
  }
}
 const activLik=({isActive})=>(isActive?" animate-link font-bold":'font-bold')
  return (

<motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
     className={`${show?'flex':'hidden'} h-screen w-full fixed top-0 right-0 z-20 justify-end items-center  bg-gray-darck/50 `}>
      <div className="absolute w-full h-full top-0 left-0 "></div>
      <div className="bg-gray-extrai h-full flex p-5 z-10 left-0">
         <div className="flex flex-col justify-center items-center gap-4">
        {conct === ''
           ?(<NavLink className={activLik} to='/logIn'>Login</NavLink>)
           :(<NavLink className='flex font-semibold gap-2 items-center text-red2' >
                <AiOutlineUser/>{conct}
              </NavLink>)}
        <NavLink className={activLik}  to='/'>Home</NavLink>
        <NavLink className={activLik}  to='/contact'>Countact Us</NavLink>
        <NavLink className={activLik} style={{display:`${conct===''?'flex':'none'}`}}  to='/rigister'>Register</NavLink>
        <NavLink className={activLik} to='/order'>My Orders</NavLink>
        <NavLink 
            onClick={LogOut} 
            style={{display:`${conct===''?'none':'flex'}`}} 
            className={activLik} 
            to='/fff'>
              LogOut
        </NavLink>
           <Link onClick={() => setshow(!show)} to='/cart'>
          <div className="relative">
            <AiOutlineShopping className="h-8 hover:text-red1 transition-all duration-300 w-8 sm:h-10 sm:w-10 cursor-pointer"/>
            <span className="absolute z-10 bg-red3 p-1 w-4 h-4 rounded-full flex items-center justify-center top-0 right-0">0</span>
          </div>
        </Link>
           </div>
       <AiOutlineClose
         onClick={() => setshow(!show)} 
         className="absolute top-10 right-5 cursor-pointer"/>
      </div>
    </motion.div>

  )
}

export default MobilNav