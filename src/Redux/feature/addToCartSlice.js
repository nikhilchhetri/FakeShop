import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
    name: "addToCart",
    initialState: [],
    reducers: {
        addToCart: (state, action)=>{
            state.push(action.payload);
        }
    }
});

export const {addToCart} = addToCartSlice.actions;
export default addToCartSlice.reducer;