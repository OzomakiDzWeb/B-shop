import { createSlice } from '@reduxjs/toolkit'

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
      }else{
        existItmes.quantity++
        existItmes.totalPrice=Number(existItmes.totalPrice)+(newItmes.price)
      }
      state.totalAmount = state.cartItmes.reduce((total,item) => total+Number(item.price) * Number(item.quantity),0)
     
    },
    deletItme:(state,action) => {
      const id= action.payload
      const existItme=state.cartItmes.find(itm =>itm.id === id)
      if(existItme){
       state.cartItmes=state.cartItmes.filter(itm=>itm.id !== id) 
       state.totalQuntity=state.totalQuntity-existItme.quantity
      }
       state.totalAmount = state.cartItmes.reduce((total,item) => total+Number(item.price) * Number(item.quantity),0)
    }
  }
});


export const {addItmes,deletItme} = CartSlice.actions

export default CartSlice.reducer