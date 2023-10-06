import { AiOutlineMail } from "react-icons/ai"
import { BsFacebook, BsGit } from "react-icons/bs"
import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
import {contanerImg} from '../customHookes/function'
const Contact = () => {
  return (
    <motion.div
           variants={contanerImg}
           initial='hidden'
           animate='visible' className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="mb-5 font-bold text-[20px]">Contact Us</h1>
      <form className="border border-gray-darck rounded-lg shadow-lg p-4">
        <div>
          <label>Email</label>
          <input className="inpt my-3" type="text" placeholder="your Email"/>
        </div>
        <div>
        <label className="">Messege</label>
        <textarea className="inpt mt-3" type='text' placeholder="your messeg"/>
        </div>
        <button className="btn bg-green2 my-3">Send Message</button>
        <div className="flex justify-evenly items-center">
            <Link ><AiOutlineMail size={30}/></Link>
            <Link className="mt-4" to='https://github.com/OzomakiDzWeb'><BsGit size={30}/></Link>
            <Link className="mt-4" to='https://github.com/OzomakiDzWeb'><BsFacebook size={30}/></Link>
        </div>
      </form>
    </motion.div>
  )
}

export default Contact