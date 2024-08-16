import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";
import App from "./App";
import Cart from "./components/Cart";
import SignUp from "./components/SignUp";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductListing />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
