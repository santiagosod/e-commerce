import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/product.slice";
import cart from "./slices/cart.slice";
import totalPrice from "./slices/totalCart.slice";

export default configureStore({
    reducer:{
        products,
        cart,
        totalPrice
    }
})