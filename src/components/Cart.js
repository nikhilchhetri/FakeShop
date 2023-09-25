import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.productInCart.cart);
  return (
    <div className="ui container">
      <h2 className="ui header">Your Cart</h2>
      <div className="ui divided items">
        {cartItems.map((item) => (
          <div className="item" key={item.id}>
            <img className="ui small image" src={item.image} alt={item.title} />
            <div className="content">
              <Link to={`/product/${item.id}`} className="header">
                {item.title}
              </Link>
              <div className="description">
                <p>Price: ${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
