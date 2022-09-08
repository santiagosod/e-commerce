import { createSlice } from "@reduxjs/toolkit";
import { get } from "../../services/utils";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers:{
        setProducts: (state, action) => action.payload
    }
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer

export const getAllProducts = () => (dispatch) => {
    return get('products/')
    .then(res => dispatch(setProducts(res.data.data.products)))
    .catch(err => console.log(err))
}

export const filterProductsCategory = id => (dispatch) => {
    return get(`products?category=${id}`)
    .then(res => dispatch(setProducts(res.data.data.products)))
    .catch(er => console.log(err))
}

export const filterProductsName = name => (dispatch) => {
    return get(`products?query=${name}`)
    .then(res => dispatch(setProducts(res.data.data.products)))
    .catch(err => console.log(err))
}