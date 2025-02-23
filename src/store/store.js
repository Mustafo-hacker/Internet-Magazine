import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux-toolkit/cartSlice/cartSlice'; 

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});