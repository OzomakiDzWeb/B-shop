import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { BsFacebook,BsGit } from "react-icons/bs"
import { Link } from "react-router-dom"


const Footer = () => {
  const dat=new Date()

  return (
    <div className="py-5 px-3  bg-gray-extrai  rounded-lg shadow-lg mt-5 divide-y-2">
      <div className="flex flex-col justify-around sm:flex-row mb-3">
        <div className="flex flex-col ">

          <h1 className="font-bold mb-4 ">Linkes</h1>
          <Link>Home</Link>
          <Link>Countact</Link>
          <Link>Login</Link>
          <Link>My Order</Link>
          </div>
          <div className="flex flex-col ">
            <h1 className="font-bold mb-4 mt-4 sm:mt-0">Contact me</h1>
            <Link>ayoubbouslama1994@gmail.com</Link>
            <Link className="mt-4" to='https://github.com/OzomakiDzWeb'><BsGit size={30}/></Link>
            <Link className="mt-4" to='https://github.com/OzomakiDzWeb'><BsFacebook size={30}/></Link>

          </div>
      </div>
      <h1 className= "flex justify-center font-bold p-5">Copyright <AiOutlineCopyrightCircle/> {dat.getFullYear()} </h1>
    </div>
  )
}

export default Footer