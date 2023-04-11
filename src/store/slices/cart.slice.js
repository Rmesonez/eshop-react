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
        addToCart: (state, action) => {
            return [...state, action.payload];
        },
        deleteProductCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const getCartItemsThunk = () => (dispatch) => {
    axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/cart', getConfig())
    .then((res) => {
        // dispatch(setCartItems(res?.data))
        console.log(res?.data)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const addToCartThunk = (product) => (dispatch) => {
    axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/cart', product, getConfig())
    .then((res) => {
        console.log(res?.data)
        // dispatch(addToCart(res?.data))
    })
    .catch((error) => {
        console.log(error)
    })
}

export const deleteProductCartThunk = (id) => (dispatch) => {
    axios.delete(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`, getConfig())
    .then((res) => {
        console.log(res?.data)
        // dispatch(deleteProductCart(id))
    })
    .catch((error) => {
        console.log(error)
    })
}


export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;