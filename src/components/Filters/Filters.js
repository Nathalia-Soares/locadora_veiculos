import React, { useState } from 'react';
import './Filters.css';

const Filters = () => {
  const [variant, setVariant] = useState('A');

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