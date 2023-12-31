import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
cartItmes:[],
totalAmount:0,
totalQuntity:0
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItmes:(state,action) => {
      const newItmes = action.payload
      const existItmes = state.cartItmes.find(itm => itm.id === newItmes.id)
      
      state.totalQuntity++
      
      if(!existItmes){
        state.cartItmes.push({
          id:newItmes.id,
          productName:newItmes.productName,
          image:newItmes.imgUrl,
          price:newItmes.price,
          quantity:1,
          totalPrice:newItmes.price
        })
        toast.success(`${newItmes.productName} it is add in your cart` )
      }else{
        existItmes.quantity++
        existItmes.totalPrice=Number(existItmes.totalPrice)+(newItmes.price)
        toast.success(`add anther${newItmes.productName} ` )
      }
      state.totalAmount = state.cartItmes.reduce((total,item) => total+Number(item.price) * Number(item.quantity),0)
     
    },
    deletItme:(state,action) => {
      const id= action.payload
      const existItme=state.cartItmes.find(itm =>itm.id === id)
      if(existItme){
       state.cartItmes=state.cartItmes.filter(itm=>itm.id !== id) 
       state.totalQuntity=state.totalQuntity-existItme.quantity
       toast.info(`Delet`)
      }
       state.totalAmount = state.cartItmes.reduce((total,item) => total+Number(item.price) * Number(item.quantity),0)
    },
    decremant:(state,action)=>{
      const newItmes = action.payload
      const existItme=state.cartItmes.find(itm =>itm.id ===newItmes. id)
      existItme.quantity--
      existItme.totalPrice=newItmes.price * existItme.quantity
      state.totalQuntity=state.totalQuntity- 1
        state.totalAmount = state.cartItmes.reduce((total,item) => total+Number(item.price) * Number(item.quantity),0)
      toast.info(`decremant one`)   
      }
  }
});


export const {addItmes,deletItme,decremant} = CartSlice.actions

export default CartSlice.reducer