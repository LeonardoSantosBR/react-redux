import { createSlice } from "@reduxjs/toolkit"



export const userSlice= createSlice({
    name: 'username',
    initialState:{
        name: '',
        isLoggedIn: false
    },
    reducers:{
        Login(state, {payload}){
           return {...state, isLoggedIn: true ,name: payload}
        },
        Logout(state){
           return {...state, isLoggedIn: false, name: ''}
        }
    }
})
export const {Login, Logout}= userSlice.actions

export default userSlice.reducer

export const SelectUser = (state: object)=> state.user