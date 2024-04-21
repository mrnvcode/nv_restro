import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import db from '../firebase';
import Product from './Product';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKvdZ5pe_ihP2lwmHSb4D7nZrflVWUtT0",
  authDomain: "nv-restro.firebaseapp.com",
  projectId: "nv-restro",
  storageBucket: "nv-restro.appspot.com",
  messagingSenderId: "151398752004",
  appId: "1:151398752004:web:d16a61697b04898baaba51",
  measurementId: "G-6SX0C4CZC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await db.collection('products').get();
      setProducts(data.docs.map(doc => ({ id: doc.id, data: doc.data() })));
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;