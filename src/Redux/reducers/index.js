import { combineReducers } from "redux";
import {
  addToCartReducer,
  productReducer,
  selectedProductReducer,
} from "./productReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  productInCart: addToCartReducer,
});
