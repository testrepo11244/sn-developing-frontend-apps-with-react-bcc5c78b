import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import './ProductList.css';

const plantData = [
  // Category: Succulents
  {
    id: 'suc-1',
    name: 'Aloe Vera',
    price: 12.99,
    category: 'Succulents',
    thumbnail: '/images/aloe.jpg',
  },
  {
    id: 'suc-2',
    name: 'Echeveria',
    price: 9.5,
    category: 'Succulents',
    thumbnail: '/images/echeveria.jpg',
  },
  {
    id: 'suc-3',
    name: 'Jade Plant',
    price: 14.0,
    category: 'Succulents',
    thumbnail: '/images/jade.jpg',
  },
  // Category: Foliage
  {
    id: 'fol-1',
    name: 'Monstera Deliciosa',
    price: 29.99,
    category: 'Foliage',
    thumbnail: '/images/monstera.jpg',
  },
  {
    id: 'fol-2',
    name: 'ZZ Plant',
    price: 24.5,
    category: 'Foliage',
    thumbnail: '/images/zz.jpg',
  },
  {
    id: 'fol-3',
    name: 'Snake Plant',
    price: 19.99,
    category: 'Foliage',
    thumbnail: '/images/snake.jpg',
  },
  // Category: Flowering
  {
    id: 'flo-1',
    name: 'African Violet',
    price: 15.0,
    category: 'Flowering',
    thumbnail: '/images/violet.jpg',
  },
  {
    id: 'flo-2',
    name: 'Peace Lily',
    price: 22.0,
    category: 'Flowering',
    thumbnail: '/images/peace-lily.jpg',
  },
  {
    id: 'flo-3',
    name: 'Anthurium',
    price: 27.5,
    category: 'Flowering',
    thumbnail: '/images/anthurium.jpg',
  },
];

const categories = ['Succulents', 'Foliage', 'Flowering'];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedIds, setAddedIds] = useState([]);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedIds((prev) => [...prev, product.id]);
  };

  const isAdded = (id) => addedIds.includes(id);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="product-list-page">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-icon">
          🛒
          {totalCartCount > 0 && <span className="cart-count">{totalCartCount}</span>}
        </Link>
      </nav>

      {categories.map((cat) => (
        <section key={cat}>
          <h2>{cat}</h2>
          <div className="product-grid">
            {plantData
              .filter((p) => p.category === cat)
              .map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.thumbnail} alt={product.name} className="product-thumb" />
                  <h3>{product.name}</h3>
                  <p>${product.price.toFixed(2)}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(product)}
                    disabled={isAdded(product.id)}
                  >
                    {isAdded(product.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;