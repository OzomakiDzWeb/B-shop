import { useDispatch, useSelector } from "react-redux";
import {addItmes,decremant, deletItme} from '../redux/CartSlice'
import {FaCcPaypal,FaCcVisa } from 'react-icons/fa'
import { useNavigate } from "react-router";
  const data = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];
  const Cart = () => {
    const navigat=useNavigate()
  const cartProduct = useSelector((state) => state.cart.cartItmes)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
   const dispatch=useDispatch()
   const isProducexist=(id)=> {
       
  return cartProduct.some(obj => obj.id === id);
}
  return (
    <div>
      <h1 className="font-extrabold text-[30px] text-center my-10">Cart Shooping </h1>
      <div className="sm:grid grid-cols-2 gap-5 flex flex-col items-center ">
        {cartProduct.length>=1
        ?<div>
           <table className="table-auto">
        <thead>
          <tr>
            <th>product</th>
            <th>Name</th>
            <th>Qnti</th>
            <th>Price</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {cartProduct.map((product) => (
            <tr className="border-b-2 font-bold" key={product.id}>
              <td  className="p-1 flex flex-col">
                <img className="  min-w-[80px] max-w-[150px]" src={product.image} alt='dd'/>
                <div className="h-2/5">
                   <div className="flex  gap-1">
                      <button className="btn bg-red3 py-0" onClick={()=>dispatch(decremant(product))}>-1</button>
                      <button  className="btn bg-green2 py-0" onClick={()=>dispatch(addItmes(product))}>+1</button>
                    </div>
                  <button  onClick={()=>dispatch(deletItme(product.id))} className=' py-0 bg-red2 text-[#000] my-1 font-bold disabled:bg-green3/20 btn'>Delet</button>
                </div>
              </td>
              <td className="border-x p-2">{product.productName}</td>
              <td className="border-x p-2">{product.quantity}</td>
              <td className="border-x p-2">${product.price.toFixed(2)}</td>
              <td>${product.totalPrice.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
        : <div>
          <h1 className="text-bold">No product in your cart...!</h1>
          <button className="btn bg-green2" onClick={()=>navigat('/')}>Go shooping</button>
        </div>}
       
        
        <div className="border font-bold p-3 flex flex-col gap-2 text-center shadow-lg border-gray-lghit rounded-lg">
          <h1 className=" my-2">Order summary</h1>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>0$</span>
          </div>
          <div className="flex justify-between">
            <span >Estimated shoping</span>
            <span>0$</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Total</span>
            <span className="text-red1">{totalAmount}$</span>
          </div>
          <button className="btn bg-gray-darck px-5 mx-auto">checkout Now</button>
          <div className="flex justify-between items-center">
            <span>Paymend methodes</span>
            <span className="flex justify-between items-center gap-1">
              <FaCcVisa size={40}/>
              <FaCcPaypal size={40}/>
              <img className='w-10 h-10' src="/src/assets/poste-algerie-logo-B0ECB89429-seeklogo.com.png"/>
              <img className='w-10 h-10' src="/src/assets/mastercard-2.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart