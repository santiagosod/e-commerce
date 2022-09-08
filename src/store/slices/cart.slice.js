import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getConfig } from "../../services/utils";

const cartSlice = createSlice({
    name: 'cart',
    initialState: null,
    reducers:{
        setCart: (state, action) => action.payload
    }
})

export const { setCart } = cartSlice.actions

export default cartSlice.reducer

let URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

export const getCartInfo = () => (dispatch) => {
    return axios.get(URL, getConfig())
    .then(res => dispatch(setCart(res.data.data.cart.products)))
    .catch(err => dispatch(setCart(null)))
}

export const addToCartAction = (productId, quantity) => (dispatch) => {
    const item = {id: productId, quantity: quantity}
    return axios.post(URL, item, getConfig())
    .then(res => dispatch(getCartInfo()))
    .catch(err => console.log(err))
}