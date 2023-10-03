import {combineReducers, configureStore } from "@reduxjs/toolkit";  
import authReducer from './authSlicse'
import cartSlice from './CartSlice'

export const rootReducer=combineReducers({
     auth:authReducer,
     cart: cartSlice  }
)

export const  store=configureStore({
     reducer:rootReducer,
})