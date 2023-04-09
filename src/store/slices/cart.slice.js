import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        cartItems: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            state.cartItems++;
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            state.cartItems--;
        },
        clearCart: (state) => {
            state.cart = [];
            state.cartItems = 0;
        },
    },
});


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;
export const selectCartItems = (state) => state.cart.cartItems;


export default cartSlice.reducer;