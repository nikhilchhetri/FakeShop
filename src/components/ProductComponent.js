import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Card, Image } from "semantic-ui-react";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Grid.Column key={id} mobile={16} tablet={8} computer={4}>
        <Link to={`/product/${id}`}>
          <Card>
            <Image src={image} alt={title} />
            <Card.Content>
              <Card.Header>{title}</Card.Header>
              <Card.Meta>
                <span className="price">${price}</span>
              </Card.Meta>
              <Card.Meta>{category}</Card.Meta>
            </Card.Content>
          </Card>
        </Link>
      </Grid.Column>
    );
  });

  return (
    <Grid stackable columns={4}>
      {" "}
      {Object.keys(products).length === 0 ? <div>...Loading</div> : renderList}
    </Grid>
  );
};

export default ProductComponent;
