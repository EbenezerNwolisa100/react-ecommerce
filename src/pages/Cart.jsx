import React from 'react';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="list-group mb-4">
            {cart.map((product) => (
              <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{product.name}</h5>
                  <p>Price: ${product.price.toFixed(2)}</p>
                  <div className="d-flex align-items-center">
                    <button className="btn btn-sm btn-secondary me-2" onClick={() => updateQuantity(product.id, -1)}>-</button>
                    <span>{product.quantity}</span>
                    <button className="btn btn-sm btn-secondary ms-2" onClick={() => updateQuantity(product.id, 1)}>+</button>
                  </div>
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
