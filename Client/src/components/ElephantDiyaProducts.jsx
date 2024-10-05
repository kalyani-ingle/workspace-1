import React, { useState, useEffect } from 'react';
import Productlist from './Productlist';

const ElephantDiyaProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    import('../json/elephant-diya-products.json')
      .then(data => setProducts(data.default))
      .catch(error => console.error('Error loading tortoise diya products:', error));
  }, []);

  return (
    <div className="container mx-auto px-1 py-8">
      <h1 className="text-3xl font-bold mb-6"> Elephant Diya Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <Productlist
            key={product.productID}
            productID={product.productID}
            product_name={product.product_name}
            product_desc={product.product_desc}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ElephantDiyaProducts;