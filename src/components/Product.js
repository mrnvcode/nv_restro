import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <img src={product.data.image} alt={product.data.name} />
        <h3>{product.data.name}</h3>
        <p>Price: {product.data.price}</p>
      </Link>
    </div>
  );
};

export default Product;