import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/BestSellingProducts.css'; // Corrected import statement

function BestSellingProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productCollection = collection(db, 'products');
      const snapshot = await getDocs(productCollection);
      const productList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <section className="bestSellingProducts">
      <div className="bsp_div">
        <h2>Best Selling Products</h2>
        <div className="productList">
          {products.map((product) => (
            <div key={product.id} className="productContainer">
              <Card className="productCard">
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="productImage"
                />
                <Card.Body className="productBody">
                  <Card.Title className="productTitle">{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text className="productPrice">$ {product.price}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <Button variant="primary" className="viewAllProductsButton">
          <Link to="/Products" className="link">View All Products</Link>
        </Button>
      </div>
    </section>
  );
}

export default BestSellingProducts;
