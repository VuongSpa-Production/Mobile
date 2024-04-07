import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Product = {
    data: any;
}

type CartState = {
    products: Product[];
};  

const initialState: CartState = {
    products: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<Product>) => {
            state.products = state.products.filter((product) => product !== action.payload);
        },
        clearCart: (state) => {
            state.products = [];
        },
    },
}); 

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const reducer = cartSlice.reducer;
