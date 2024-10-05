import React, { useState, useEffect } from 'react';
import Productlist from './Productlist';

const TortoiseDiyaProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    import('../json/tortoise-diya-products.json')
      .then(data => setProducts(data.default))
      .catch(error => console.error('Error loading tortoise diya products:', error));
  }, []);

  const addToCart = (product) => {
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    const existingItemIndex = existingCartItems.findIndex(
      (item) => item.productID === product.productID
    );

    if (existingItemIndex !== -1) {
      existingCartItems[existingItemIndex].quantity += 1;
    } else {
      existingCartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
    alert('Item added to cart!');
  };

  return (
    <div className="container mx-auto px-1 py-8">
      <h1 className="text-3xl font-bold mb-6"> Tortoise Diya Collection </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <Productlist
            key={product.productID}
            productID={product.productID}
            product_name={product.product_name}
            product_desc={product.product_desc}
            image={product.image}
            price={product.price}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default TortoiseDiyaProducts;