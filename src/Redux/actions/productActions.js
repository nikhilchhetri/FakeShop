import { ActionTypes } from "../constants/action-types";

const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

const removeSelectedProducts = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: product,
  };
};
