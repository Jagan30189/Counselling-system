import React, { useState } from 'react';

const ProductList = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <strong>{product.name}</strong> - ${product.price}
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((cartProduct, index) => (
          <li key={index}>{cartProduct.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;