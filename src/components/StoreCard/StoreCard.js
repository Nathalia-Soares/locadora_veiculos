import React, { useEffect, useState } from 'react';
import { mouseflow } from 'react-mouseflow';
import './StoreCard.css';

const StoreCard = ({ store }) => {
  const [variant, setVariant] = useState('A');

  useEffect(() => {
    // Carregar Mouseflow
    const mouseflowScript = document.createElement('script');
    mouseflow.initialize(process.env.MOUSEFLOW_ID); // Substitua pelo seu ID do projeto Mouseflow
    mouseflow.src = `https://cdn.mouseflow.com/projects/${process.env.MOUSEFLOW_ID}.js`; // Substitua pelo seu ID do projeto Mouseflow
    mouseflowScript.async = true;
    document.head.appendChild(mouseflowScript);

    // Definir variante (A ou B) de forma aleatória ou por lógica de distribuição
    const selectedVariant = Math.random() < 0.5 ? 'A' : 'B';
    setVariant(selectedVariant);

    // Rastrear a variante no Mouseflow
    if (window.mouseflow) {
      window.mouseflow('tag', `StoreCardVariant${selectedVariant}`);
    }

    return () => {
      document.head.removeChild(mouseflowScript);
    };
  }, []);

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