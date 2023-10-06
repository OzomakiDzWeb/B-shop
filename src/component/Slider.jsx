import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import products from '../Data/data/products'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addItmes, deletItme } from '../redux/CartSlice';


const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const dispatch=useDispatch()
     const cartProduct = useSelector((state) => state.cart.cartItmes)
  const isProducexist=(id)=> {
       
  return cartProduct.some(obj => obj.id === id);
}
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex  items-center justify-between h-screen  ">
      <button onClick={prevImage}><AiFillLeftCircle className='text-green1' size={40}/></button>
      
     <AnimatePresence initial={false}>
       <div className='flex flex-col md:flex-row justify-center  px-5 gap-5 items-center'>
           <motion.img
           className='md:w-1/2  rounded-lg'
          key={currentImageIndex}
          initial={{ opacity: 0,scale:0}}
          animate={{ opacity: 1,scale:1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5,damping:3 }}
          src={products[currentImageIndex].imgUrl}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <motion.div
        initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}>
          <h1 className='font-bold text-bold text-center md:text-left mb-3'>{products[currentImageIndex].productName}</h1>
          <p className='mb-5'>{products[currentImageIndex].shortDesc}</p>
          <div className='flex justify-center gap-5'>
          <p className='font-bold'>Price</p>
          <p className='font-bold text-green1'>{products[currentImageIndex].price}$</p>
          </div>
         <button  onClick={()=>{isProducexist(products[currentImageIndex].id)?dispatch(deletItme(products[currentImageIndex].id)):dispatch(addItmes(products[currentImageIndex]))}} className={`${isProducexist(products[currentImageIndex].id)?'bg-red2':'bg-green3'} text-[#000] my-1 font-bold disabled:bg-green3/20 btn`}>{isProducexist(products[currentImageIndex].id)?"remove to Cart":'Add to Card'}</button>
        </motion.div>
       </div>
      </AnimatePresence>
      
      <button onClick={nextImage}><AiFillRightCircle className='text-green1' size={40}/></button>

    </div>
  );
};

export default Slider;