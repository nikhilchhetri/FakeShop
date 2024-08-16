import { createSlice } from "@reduxjs/toolkit";

export const selectedProductSlice = createSlice({
    name: "selectedProduct",
    initialState: {},
    reducers: {
        selectedProducts: (state, action)=>{
            state = {...action.payload};
            return state;
        }
    }
});

export const {selectedProducts} = selectedProductSlice.actions;
export default selectedProductSlice.reducer;
