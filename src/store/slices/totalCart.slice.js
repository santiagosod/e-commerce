import { createSlice } from "@reduxjs/toolkit";

const totalPrice = createSlice({
    name:'total',
    initialState: 0,
    reducers:{
        setTotal: (state, action) => state + action.payload,
        setTotalEmpty: (state, action) => state = action.payload,
        setTotalDelete: (state, action) => state - action.payload
    }
})

export default totalPrice.reducer

export const { setTotal, setTotalEmpty, setTotalDelete } = totalPrice.actions

export const setTotalPrice = (quantity, price) => (dispatch) => {
    return dispatch(setTotal(quantity * price))
}

export const setTotalDeleteThunk = (quantity, price) => (dispatch) => {
    return dispatch(setTotalDelete(quantity * price))
}

export const setTotalCheckout = () => (dispatch) => {
    return dispatch(setTotalEmpty(0))
}