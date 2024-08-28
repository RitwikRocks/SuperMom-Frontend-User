import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice.js";

const store = configureStore(
    {
        reducer:{
            product:productSlice,    
        }
    }
);

export default store;