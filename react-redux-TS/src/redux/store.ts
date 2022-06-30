import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";


const Store= configureStore({
    reducer:{
      user: useReducer
    }
})
export default  Store