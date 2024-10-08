import React, { useEffect, useState } from 'react';  
import { mouseflow } from 'react-mouseflow';
import './Filters.css';

const Filters = () => {
  const [variant, setVariant] = useState('A');

  useEffect(() => {
    mouseflow.initialize(process.env.MOUSEFLOW_ID);
  }, []);

  const handleButtonClick = (button) => {
    // Rastreia o clique nos botões usando o Mouseflow
    if (mouseflow) {
      mouseflow('track', 'Filters Button Click', { button });
    }
  };

  mouseflow('tag', `FiltersVariant${variant}`);

  return (
    <div className={`filters variant-${variant}`}>
      {['Ordenar', 'Entrega Grátis', 'Vale-refeição', 'Distância', 'Entrega Parceira', 'Super Restaurantes', 'Filtros', 'Limpar'].map((button) => (
        <button key={button} onClick={() => handleButtonClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default Filters;