import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products.slice'
import loading from './slices/isLoading.slice'
import users from './slices/users.slice'
import cart from './slices/cart.slice'



export default configureStore({
    reducer: {
        products,
        loading,
        users,
        cart
    }
})
//store