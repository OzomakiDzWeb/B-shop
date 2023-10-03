import { useDispatch, useSelector } from "react-redux";
import {addItmes,decremant, deletItme} from '../redux/CartSlice'

  const data = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];
  const Cart = () => {
  const cartProduct = useSelector((state) => state.cart.cartItmes)
   const dispatch=useDispatch()
   const isProducexist=(id)=> {
       
  return cartProduct.some(obj => obj.id === id);
}
  return (
    <div>
      <h1>Cart Shooping </h1>
      <div className="sm:grid grid-cols-2 flex flex-col ">
        <div>
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
        <div></div>
      </div>
    </div>
  )
}

export default Cart