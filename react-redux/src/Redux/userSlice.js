import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: '',
        islogged: false,
    },
    reducers: {
        changeUser(state, {payload}){
            return {...state, islogged:true, user:payload}
        },
        logout(state){
            return {...state, islogged:false, user:''}
        }
    }
})
export const {changeUser, logout} = userSlice.actions

export const selectUser= state=> state.user

export default userSlice.reducer