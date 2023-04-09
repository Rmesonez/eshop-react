import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products.slice'
import loading from './slices/isLoading.slice'
import users from './slices/users.slice'
import shoppingCart from './slices/cart.slice'



export default configureStore({
    reducer: {
        products,
        loading,
        users,
        shoppingCart
    }
})
//store