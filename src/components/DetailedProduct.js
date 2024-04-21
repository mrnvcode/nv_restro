import React, { useState, useEffect} from 'react';

import db from '../firebase';

const DetailedProduct = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await db.collection('products').doc(match.params.id).get();
      setProduct({ id: match.params.id, data: data.data() });
    };

    fetchProduct();
  }, [match.params.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <img src={product.data.image} alt={product.data.name} />
      <h3>{product.data.name}</h3>
      <p>Price: {product.data.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default DetailedProduct;