import { Link } from "react-router-dom"
import {AiOutlineMenu, AiOutlineShopping} from "react-icons/ai"
import { useEffect, useState } from "react"
import MobilNav from "./MobilNav"
import {motion} from 'framer-motion'
const Header = () => {
  const [show,setshow]=useState(false)
  const [active,setactive]=useState(null)
  useEffect(()=>{
    const scrollActive =()=>{
      setactive(window.scrollY>20)
    }
    window.addEventListener("scroll",scrollActive)
    return ()=>window.removeEventListener("scroll",scrollActive)
  },[active])
  return (
    <div className={`${active?'py-0 shadow-lg transition-all duration-300 rounded-lg':''} mx-auto py-2 bg-gray-extrai fixed bg-black top-0 left-0 text-white w-full  flex justify-between items-center  px-5`}>
      <Link to='/'><div className="text-red1 text-moyeen sm:text-bold">B-<span className="text-green1">SHOP</span></div></Link>
      <div className="sm:flex gap-4 hidden">
        {/* <Link to=''>ADMIN</Link> */}
        <Link className="animate-link" to='/'>Home</Link>
        <Link className="animate-link" to='/contact'>Countact Us</Link>
      </div>
      <div className="sm:flex gap-4 items-center hidden">
        <Link className="animate-link" to='/logIn'>Login</Link>
        <Link className="animate-link" to='/rigister'>Register</Link>
        <Link className="animate-link" to='/order'>My Orders</Link>
        </div>
        <div>
        <MobilNav show={show} setshow={setshow}/>
       </div>
       <div className="flex items-center gap-4">
         <Link to='/cart'>
          <div className="relative">
            <AiOutlineShopping className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer"/>
            <span className="absolute z-10 bg-red1 w-4 h-4 rounded-full flex items-center justify-center top-0 right-0">0</span>
          </div>
        </Link>
        <AiOutlineMenu
          onClick={()=>setshow(true)} 
          className="sm:hidden flex h-8 w-8 sm:h-10 sm:w-10 cursor-pointer"/>
       </div>
       
    </div>
  )
}

export default Header