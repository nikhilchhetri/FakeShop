import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
};

export const productListSlice = createSlice({
    name: 'products',
    initialState : [],
    reducers: {
        productsList: (state, action) => {
            console.log(action);
            state.push(...action.payload);
        }
    }
});


export const { productsList } = productListSlice.actions;

export default productListSlice.reducer;
