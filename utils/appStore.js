import { configureStore } from "@reduxjs/toolkit";
import cartSice from "./cartSice";


const appStore = configureStore({
    reducer :{
        cart :cartSice,
    }
});

export default appStore;