import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, doc, setDoc, deleteDoc } from 'firebase/firestore';
import db from '../firebase';
import { Button, Card } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import '../styles/AllProducts.css';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productCollection = collection(db, 'products');
                const snapshot = await getDocs(productCollection);
                const productList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productList);
            } catch (error) {
                console.error('Error fetching products: ', error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = async (productId) => {
        try {
            const cartCollectionRef = collection(db, 'cart');
            const cartSnapshot = await getDocs(cartCollectionRef);
            
            if (cartSnapshot.empty) {
                // Cart collection does not exist, create it
                await setDoc(doc(db, 'cart', 'initial'), { message: 'This is the initial cart' });
            }

            // Add the product to the cart
            await addDoc(cartCollectionRef, { productId });
            alert('Product added to cart!');

            if (!cartSnapshot.empty) {
                await deleteDoc(doc(db, 'cart', 'initial'));
            }

        } catch (error) {
            console.error('Error adding product to cart: ', error);
        }
    };

    return (
        <div>
            <Header />
            <section>
                <div className='allProductsPage'>
                    <h2>All Products</h2>
                    <div className='productList'>
                        {products.map(product => (
                            <div key={product.id} className='productContainer'>
                                <Card className='productCard' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product.image} className='productImage' />
                                    <Card.Body className='productBody'>
                                        <Card.Title className='productTitle'>{product.name}</Card.Title>
                                        <Card.Text className='productDescription'>
                                            {product.description}
                                        </Card.Text>
                                        <Card.Text>${product.price}</Card.Text>
                                        <Button onClick={() => handleAddToCart(product.id)} className='addToCartButton'>Add to Cart</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AllProducts;
