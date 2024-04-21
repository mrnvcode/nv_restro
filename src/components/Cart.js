import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc, deleteDoc } from 'firebase/firestore'; // Import deleteDoc for deleting documents
import db from '../firebase';
import Header from './Header';
import Footer from './Footer';
import '../styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartCollection = collection(db, 'cart');
        const snapshot = await getDocs(cartCollection);
        const cartItemList = await Promise.all(
          snapshot.docs.map(async (docSnapshot) => {
            const productId = docSnapshot.data().productId;
            const productDoc = await getDoc(doc(db, 'products', productId));
            if (productDoc.exists()) {
              const productData = productDoc.data();
              return { id: docSnapshot.id, productId, quantity: 1, ...productData }; // Include productId
            } else {
              console.error('Product does not exist for productId:', productId);
              return null;
            }
          })
        );
        setCartItems(cartItemList.filter(item => item !== null));
      } catch (error) {
        console.error('Error fetching cart items: ', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleQuantityChange = (itemId, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + change } : item
      )
    );
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteDoc(doc(db, 'cart', itemId)); // Delete document with itemId
      setCartItems(prevItems => prevItems.filter(item => item.id !== itemId)); // Remove item from cartItems
      console.log('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div>
      <Header />
      <section className="cartSection">
        <h2 className="cartHeading">Shopping Cart</h2>
        <div className="cartItemList">
          {cartItems.map(item => (
            <div key={item.id} className="cartItem">
              <div className="cartItemDetails">
                <h3 className="productName">{item.name}</h3>
                <p className="productPrice">${item.price.toFixed(2)}</p>
                <p className="productId">Product ID: {item.productId}</p> {/* Display productId */}
              </div>
              <div className="quantityControl">
                <button className="quantityButton" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                <span className="quantity">{item.quantity}</span>
                <button className="quantityButton" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
              <p className="productTotalPrice">${(item.price * item.quantity).toFixed(2)}</p>
              <button className="deleteButton" onClick={() => handleDeleteItem(item.id)}>Delete</button> {/* Delete button */}
            </div>
          ))}
        </div>
        <div className="cartTotal">
          <p className="totalText">Total:</p>
          <p className="totalPrice">${calculateTotalPrice()}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
