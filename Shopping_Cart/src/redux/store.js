import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products/productReducer'
import cartReducer from './carts/cartReducers'
import pageReducer from './page/pageReducer'

export const store = configureStore ({
    reducer: {
        products: productReducer,
        carts: cartReducer,
        pages:pageReducer,
    },
    devTools: true,
})