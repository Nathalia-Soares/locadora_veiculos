import React, { useState } from 'react';
import './StoreCard.css';

const StoreCard = ({ store }) => {
  const [variant, setVariant] = useState('A');

  return (
    <div className={`store-card variant-${variant}`}>
      <img src={store.image} alt={store.name} className={`store-image variant-${variant}`} />
      <div className="store-info">
        <h3>{store.name}</h3>
        <p>{store.type} • {store.distance} km</p>
        <p>{store.deliveryTime} min • {store.fee}</p>
      </div>
    </div>
  );
};

export default StoreCard;
