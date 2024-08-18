import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = ({ addToCart, message, setMessage, cart }) => {
    const products = [
        { id: 1, name: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/150', description: 'Detailed description for Product 1', manufacturer: 'Manufacturer 1' },
        { id: 2, name: 'Product 2', price: 29.99, image: 'https://via.placeholder.com/150', description: 'Detailed description for Product 2', manufacturer: 'Manufacturer 2' },
        { id: 3, name: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150', description: 'Detailed description for Product 3', manufacturer: 'Manufacturer 3' },
        { id: 4, name: 'Product 4', price: 49.99, image: 'https://via.placeholder.com/150', description: 'Detailed description for Product 4', manufacturer: 'Manufacturer 4' },
        { id: 5, name: 'Product 5', price: 59.99, image: 'https://via.placeholder.com/150', description: 'Detailed description for Product 5', manufacturer: 'Manufacturer 5' },
        { id: 6, name: 'Product 6', price: 69.99, image: 'https://via.placeholder.com/150', description: 'Detailed description for Product 6', manufacturer: 'Manufacturer 6' },
    ];

  return (
    <div className="container">
      <h2 className="mb-4">Our Products</h2>
      <div className="row">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            cart={cart}
            setMessage={setMessage}
          />
        ))}
        {message && <div className="alert alert-info mt-4">{message}</div>}
      </div>
    </div>
  );
};

export default Products;