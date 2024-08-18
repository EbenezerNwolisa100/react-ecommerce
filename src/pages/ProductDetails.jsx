import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ addToCart, cart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
        const products = [
            { id: 1, name: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/150', description: 'Detailed description for Product 1', manufacturer: 'Manufacturer 1' },
            { id: 2, name: 'Product 2', price: 29.99, image: 'https://via.placeholder.com/150', description: 'Detailed description for Product 2', manufacturer: 'Manufacturer 2' },
            { id: 3, name: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150', description: 'Detailed description for Product 3', manufacturer: 'Manufacturer 3' },
            { id: 4, name: 'Product 4', price: 49.99, image: 'https://via.placeholder.com/150', description: 'Detailed description for Product 4', manufacturer: 'Manufacturer 4' },
            { id: 5, name: 'Product 5', price: 59.99, image: 'https://via.placeholder.com/150', description: 'Detailed description for Product 5', manufacturer: 'Manufacturer 5' },
            { id: 6, name: 'Product 6', price: 69.99, image: 'https://via.placeholder.com/150', description: 'Detailed description for Product 6', manufacturer: 'Manufacturer 6' },
        ];
      const productData = products.find(p => p.id === parseInt(productId));
      setProduct(productData);
    };

    fetchProduct();
  }, [productId]);

  const isInCart = product && cart.some(item => item.id === product.id);

  const handleAddToCart = () => {
    if (isInCart) {
      setMessage('Product has already been added to cart');
    } else {
      addToCart(product);
      setMessage('');
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>${product.price.toFixed(2)}</h3>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Manufacturer:</strong> {product.manufacturer}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
          {message && <div className="alert alert-warning mt-2">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;