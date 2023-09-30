import { Link } from "react-router-dom"
import {AiOutlineShopping} from "react-icons/ai"
const Header = () => {
  return (
    <div className="container-full   mx-auto fixed bg-black top-0 left-0 text-white w-full flex justify-between items-center px-6 py-3 ">
      <Link to='/'><div>B-<span>SHOP</span></div></Link>
      <div className="flex gap-4">
        {/* <Link to=''>ADMIN</Link> */}
        <Link to='/'>Home</Link>
        <Link to='/contact'>Countact Us</Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link to='/logIn'>Login</Link>
        <Link to='/rigister'>Register</Link>
        <Link to='/order'>My Orders</Link>
        <Link to='/cart'>
          <div className="relative">
            <AiOutlineShopping className="h-10 w-10"/>
            <span className="absolute top-0 right-0">0</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header