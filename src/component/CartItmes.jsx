import React, { useState } from 'react'
import {addItmes,deletItme} from '../redux/CartSlice'
import {AiFillStar} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import ProductDetail from './ProductDetail'



const CartItmes = ({product}) => {
   const [showDetails,setShowDetails]=useState(false)

     const dispatch=useDispatch()
     const cartProduct = useSelector((state) => state.cart.cartItmes)
  const isProducexist=(id)=> {
       
  return cartProduct.some(obj => obj.id === id);
}
const choosAction=(cas)=>{

}
console.log(isProducexist(2))
       return (
    <div className='p-3 m-2 bg-gray-extrai/50 shadow-lg rounded-md min-w-[260px] cursor-pointer hover:scale-105 transition-all duration-150'>
      {showDetails && <ProductDetail product={product} setShowDetails={setShowDetails} showDetails={showDetails}/>}
      <img src={product.imgUrl} alt=''/>
      <h1 className='font-bold'>{product.productName}</h1>
     
         <div className='flex flex-row justify-between items-center'>
           <span>Rating:</span>
           <span className='flex flex-row items-center font-bold'>{product.avgRating}<AiFillStar color='#FFFF00'/></span>

         </div>
         <div className='flex flex-row justify-between items-center'>
            <span>Price:</span>
            <span className='font-bold'>{product.price}<span className="text-green1">$</span></span>
         </div>
     
      <button  onClick={()=>{isProducexist(product.id)?dispatch(deletItme(product.id)):dispatch(addItmes(product))}} className={`${isProducexist(product.id)?'bg-red2':'bg-green3'} text-[#000] my-1 font-bold disabled:bg-green3/20 btn`}>{isProducexist(product.id)?"remove to Cart":'Add to Card'}</button>
      <button onClick={()=>setShowDetails(!showDetails)} className='btn bg-green2 text-[#000] my-1 font-bold'>Details</button>
     </div>
  )
}

export default CartItmes