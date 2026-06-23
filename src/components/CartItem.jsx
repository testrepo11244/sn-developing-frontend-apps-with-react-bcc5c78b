import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-icon">
          🛒
          <span className="cart-count">
            {cartItems.reduce((c, i) => c + i.quantity, 0)}
          </span>
        </Link>
      </nav>

      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/plants">Continue shopping</Link>.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Plant</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="cart-item-info">
                    <img src={item.thumbnail} alt={item.name} className="cart-thumb" />
                    <span>{item.name}</span>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleDecrease(item)}
                    >
                      –
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemove(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            <button className="btn btn-primary" onClick={() => alert('Checkout coming soon!')}>
              Checkout
            </button>
            <Link to="/plants" className="btn btn-secondary continue-btn">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;