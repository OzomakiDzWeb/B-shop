import  { useState } from 'react'
import {addItmes,deletItme} from '../redux/CartSlice'
import {AiFillStar} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import ProductDetail from './ProductDetail'
import { motion } from 'framer-motion';
import {isProducexist} from '../customHookes/function'
import {cardVariants} from '../customHookes/function'


const CartItmes = ({product}) => {

  const [showDetails,setShowDetails]=useState(false)

  const dispatch=useDispatch()
  const cartProduct = useSelector((state) => state.cart.cartItmes)

return (
    <motion.div
          key={product.id}
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.2,damping:3 }} 
          whileHover={{scale:1.1,duration:0.2}}
          className='p-3    bg-gray-extrai/50 shadow-lg rounded-md min-w-[260px] cursor-pointer hover:scale-105 transition-all duration-150'>
           {/* show details product */}
      {showDetails && <ProductDetail
                           product={product} 
                           setShowDetails={setShowDetails} 
                           showDetails={showDetails}/>}
      <img src={product.imgUrl} alt=''/>
      <h1 className='font-bold'>
        {product.productName}
      </h1>
      <div className='flex flex-row justify-between items-center'>
           <span>Rating:</span>
           <span className='flex flex-row items-center font-bold'>
            {product.avgRating}<AiFillStar color='#FFFF00'/>
          </span>
      </div>
         <div className='flex flex-row justify-between items-center'>
            <span>Price:</span>
            <span className='font-bold'>
               {product.price}<span className="text-green1">$</span>
              </span>
         </div>
      <button  
          onClick={()=>{isProducexist(product.id,cartProduct)
          ?dispatch(deletItme(product.id))
          :dispatch(addItmes(product))}} 
          className={`${isProducexist(product.id,cartProduct)
           ?'bg-red2'
           :'bg-green3'} text-[#000] my-1 font-bold disabled:bg-green3/20 btn`}>
              {isProducexist(product.id,cartProduct)?"remove to Cart":'Add to Card'}
      </button>
      <button 
        onClick={()=>setShowDetails(!showDetails)} 
        className='btn bg-green2 text-[#000] my-1 font-bold'>
          Details
      </button>
     </motion.div>
  )
}

export default CartItmes