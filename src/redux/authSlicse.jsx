import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 isLoggedIn:false,
 email:null,
 useName:null,
 useID:null
}

const authSlicse = createSlice({
  name: 'auth',
  initialState,
  reducers: {
     SE_ACTIV_USER:(state,action)=>{
          const {email,useName,useID}=action.payload
          state.isLoggedIn=true
          state.email=email
          state.useName=useName
          state.useID=useID
     },
       REMOVE_ACTIV_USER:(state,action)=>{
          state.isLoggedIn=false
          state.email=null
          state.useName=null
          state.useID=null
     },
  }
});

export const {SE_ACTIV_USER,REMOVE_ACTIV_USER} = authSlicse.actions
export const selectIsLoggIn=(state)=>state.auth.isLoggedIn
export const selectEmail=(state)=>state.auth.email
export const selectuUseName=(state)=>state.auth.useName
export const selectuUseID=(state)=>state.auth.useID
export default authSlicse.reducer