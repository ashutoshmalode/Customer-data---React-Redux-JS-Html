import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './customer'

const store = configureStore({
    reducer : {
        customer : customerReducer
    }
}) 
export default store;