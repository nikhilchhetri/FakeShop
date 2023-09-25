import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state) => state.productInCart.cart);
  return (
    <div className="ui inverted menu">
      <div className="ui container">
        <Link to={"/"} className="header item">
          <h2>FakeShop</h2>
        </Link>
        <div className="right menu">
          <Link to={"/cart"} className="item">
            <h3>Cart - {cartItems.length}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
