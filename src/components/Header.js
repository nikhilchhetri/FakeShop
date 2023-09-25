import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

const Header = () => {
  const cartItems = useSelector((state) => state.productInCart.cart);

  return (
    <Menu inverted>
      <Container>
        <Menu.Item as={Link} to="/" header>
          <h2>FakeShop</h2>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as={Link} to="/cart">
            <h3>Cart - {cartItems.length}</h3>
          </Menu.Item>
          <Menu.Item as={Link} to="/signup">
            <h3>Sign up</h3>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Header;
