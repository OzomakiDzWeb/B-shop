import { Link, NavLink, useNavigate } from "react-router-dom"
import {AiOutlineMenu, AiOutlineShopping, AiOutlineUser} from "react-icons/ai"
import { useEffect, useState } from "react"
import MobilNav from "./MobilNav"
import { auth } from "../fairbase/config"
import { signOut,onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify"
import { useDispatch ,useSelector} from "react-redux"
import { SE_ACTIV_USER ,REMOVE_ACTIV_USER} from "../redux/authSlicse"

const Header = () => {

  const [show,setshow] = useState(false)
  const [active,setactive] = useState(null)
  const [conct,setconect] = useState('')

  const navigat=useNavigate()

  const dispatch=useDispatch()
  const nemberProduct=useSelector((state) => state.cart.cartItmes.length)
  console.log(nemberProduct)

  const LogOut = () =>{
         signOut(auth).then(() => {
                            toast.success('logOut successfully')
                             navigat('/')
                    }).catch((error) => {
                              toast.error(error.message)
                            });
                              }

   useEffect(() => {
    const scrollActive = () =>{
      setactive(window.scrollY>20)
    }
     window.addEventListener("scroll",scrollActive)
     return ()=>window.removeEventListener("scroll",scrollActive)
    },[active])

const activLik=({isActive})=>(isActive?" animate-link font-bold":'font-bold')

 useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
                      if (user) {
                        const uid = user.email;
                           setconect(user.displayName)||setconect(uid.split('@')[0])
                           dispatch(SE_ACTIV_USER({
                             email:user.email,
                             useName:user.displayName||user.email.split('@')[0],
                             useID:user.uid
                           }))
                    } else {
                        setconect('')
                        dispatch(REMOVE_ACTIV_USER())
                       }});
                      },[dispatch])

  return (
    <div className={`${active?'py-0 shadow-lg transition-all duration-300 rounded-lg':'py-2'} mx-auto  bg-gray-extrai fixed bg-black top-0 left-0 text-white w-full  flex justify-between items-center z-50  px-5`}>
      <Link to='/'>
        <div className="text-red1 flex text-moyeen md:text-bold">B-<span className="text-green1">SHOP</span></div>
      </Link>
      <div className="sm:flex gap-4 hidden">
        {/* <Link to=''>ADMIN</Link> */}
        <NavLink className={activLik} to='/'>Home</NavLink>
        <NavLink className={activLik} to='/contact'>Countact Us</NavLink>
      </div>
      
        <div>
        <MobilNav show={show} setshow={setshow} LogOut={LogOut} conct={conct}/>
       </div>
       <div className="flex items-center gap-4">
        <div className="sm:flex gap-4 items-center hidden">
        {conct === ''
           ?(<NavLink className={activLik} to='/logIn'>Login</NavLink>)
           :(<NavLink className='flex font-semibold gap-2 items-center flex-shrink-1 text-red2' >
                <AiOutlineUser/>{conct}
              </NavLink>)}
        <NavLink className={activLik} to='/rigister' style={{display:`${conct===''?'flex':'none'}`}} >Register</NavLink>
        <NavLink className={activLik} to='/order'>My Orders</NavLink>
        <NavLink 
            onClick={LogOut} 
            style={{display:`${conct===''?'none':'flex'}`}} 
            className={activLik} 
            to='/fff'>
              LogOut
        </NavLink>
        
        </div>
         <Link to='/cart'>
          <div className="relative">
            <AiOutlineShopping className="h-8 hover:text-red1 transition-all duration-300 w-8 sm:h-10 sm:w-10 cursor-pointer"/>
            <span className="absolute z-10 bg-red3 p-1 w-4 h-4 rounded-full flex items-center justify-center top-0 right-0">{nemberProduct}</span>
          </div>
        </Link>
        <AiOutlineMenu
          onClick={() => setshow(true)} 
          className="sm:hidden flex h-8 w-8 sm:h-10 sm:w-10 cursor-pointer"/>
       </div>
       
    </div>
  )
}

export default Header