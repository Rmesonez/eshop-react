import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import  getConfig from "../../helpers/getConfig";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        setCartItems: (state, action) => {
            return action.payload;
        },
    }
});

export const getCartItemsThunk = () => (dispatch) => {
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/cart', getConfig())
    .then((res) => {
        dispatch(setCartItems(res?.data))
        // console.log(res?.data)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const addCartItemThunk = (data) => (dispatch) => {
    axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/cart', data, getConfig())
    .then((res) => {
        dispatch(getCartItemsThunk())
        console.log(res?.data)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const deleteCartItemThunk = (id) => (dispatch) => {
    axios.delete(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`, getConfig())
    .then((res) => {
        dispatch(getCartItemsThunk())
    })
    .catch((error) => {
        console.log(error)
    })
}

export const updateCartItemThunk = (id, data) => (dispatch) => {
    axios.put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`, data, getConfig())
    .then((res) => {
        dispatch(getCartItemsThunk())
    })
    .catch((error) => {
        console.log(error)
    })
}

export const cartCheckoutThunk = () => (dispatch) => {
    axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', {} , getConfig())
    .then((res) => {
        dispatch(getCartItemsThunk())
    })
    .catch((error) => {
        console.log(error)
    })
}



export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;