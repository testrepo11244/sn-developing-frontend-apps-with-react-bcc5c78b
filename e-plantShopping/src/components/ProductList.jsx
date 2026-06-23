import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import { Link } from 'react-router-dom';
import './ProductList.css';

const plantData = [
  {
    category: 'Succulents',
    plants: [
      {
        id: 'suc1',
        name: 'Aloe Vera',
        price: 12.99,
        image:
          'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 'suc2',
        name: 'Echeveria',
        price: 9.5,
        image:
          'https://images.unsplash.com/photo-1524594151045-2c6e0c5b5c5b?auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 'suc3',
        name: 'Jade Plant',
        price: 14.0,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 'suc4',
        name: 'Zebra Plant',
        price: 11.25,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 'suc5',
        name: 'Haworthia',
        price: 10.0,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 'suc6',
        name: 'Gasteria',
        price: 13.5,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
    ],
  },
  {
    category: 'Foliage',
    plants: [
      {
        id: 'fol1',
        name: 'Monstera Deliciosa',
        price: 29.99,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 'fol2',
        name: 'Philodendron',
        price: 24.5,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 'fol3',
        name: 'Pothos',
        price: 19.99,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 'fol4',
        name: 'ZZ Plant',
        price: 27.0,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 'fol5',
        name: 'Snake Plant',
        price: 22.5,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 'fol6',
        name: 'Calathea',
        price: 25.0,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
    ],
  },
  {
    category: 'Flowering',
    plants: [
      {
        id: 'flo1',
        name: 'African Violet',
        price: 15.99,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 'flo2',
        name: 'Peace Lily',
        price: 18.5,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 'flo3',
        name: 'Anthurium',
        price: 21.0,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 'flo4',
        name: 'Kalanchoe',
        price: 13.75,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 'flo5',
        name: 'Bromeliad',
        price: 16.5,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
      {
        id: 'flo6',
        name: 'Orchid',
        price: 30.0,
        image:
          'https://images.unsplash.com/photo-1587308223846-6c5c9c5e5c5e?auto=format&fit=crop&w=400&q=60',
      },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedIds, setAddedIds] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setAddedIds((prev) => [...prev, plant.id]);
  };

  const isAdded = (id) => addedIds.includes(id);

  return (
    <div className="product-list">
      {plantData.map((category) => (
        <section key={category.category} className="category-section">
          <h2 className="category-title">{category.category}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {category.plants.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price.toFixed(2)}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(plant)}
                  disabled={isAdded(plant.id)}
                >
                  {isAdded(plant.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductList;