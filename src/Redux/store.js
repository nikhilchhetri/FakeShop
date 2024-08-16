import { configureStore } from "@reduxjs/toolkit";
import productListReducer  from "./feature/productListSlice";
import selectedProductReducer from "./feature/selectedProductSlice";
import addToCartReducer from "./feature/addToCartSlice";
export const store = configureStore({
  reducer:{
    productList: productListReducer,
    selectedProduct: selectedProductReducer,
    cartProduct: addToCartReducer,
  }
});

