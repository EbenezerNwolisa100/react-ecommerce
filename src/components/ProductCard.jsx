import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart, cart }) => {
  const [message, setMessage] = useState('');

  const isInCart = cart.some(item => item.id === product.id);

  const handleAddToCart = () => {
    if (isInCart) {
      setMessage('Product has already been added to cart');
    } else {
      addToCart(product);
      setMessage('');
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${product.price.toFixed(2)}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <Link to={`/products/${product.id}`} className="btn btn-link">
            View Details
          </Link>
          {message && <div className="alert alert-warning mt-2">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
