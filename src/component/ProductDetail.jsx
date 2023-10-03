import  ReactDOM  from "react-dom";
import { AiFillStar,AiOutlineClose } from "react-icons/ai";
const ProductDetail = ({product,setShowDetails,showDetails}) => {
  return ReactDOM.createPortal (
     <div className="fixed mt-5 top-0 z-[60]  left-0 w-full h-full bg-gray-lghit/80 flex items-center justify-center">
       <div className="grid grid-cols-1 sm:grid-cols-2 place-content-center  relative  bg-[#fff] mx-10 p-5">
         <div className="">
           <img  src={product.imgUrl}/>
         </div>
          <div className="text-center">
            <h1 className="font-bold text-[20px]">{product.productName}</h1>
            <div className='flex flex-row justify-between items-center'>
                <span className="font-bold">Rating:</span>
                <span className='flex flex-row items-center font-bold'>{product.avgRating}<AiFillStar color='#FFFF00'/></span>
            </div>
            <div className='flex flex-row justify-between items-center'>
                 <span className="font-bold">Price:</span>
                 <span className='font-bold'>{product.price}<span className="text-green1">$</span></span>
             </div>
             <p className="my-2">{product.description}</p>
              <button className='btn bg-green3 text-[#000] my-1 font-bold'>Add to Card</button>
          </div>
       <AiOutlineClose onClick={()=>setShowDetails(false)} className="absolute top-5 right-5 text-red1 cursor-pointer hover:rotate-180 transition-all duration-150" size={30} />
       </div>
       
     </div>,
     document.getElementById('loding')
    
  )
}

export default ProductDetail