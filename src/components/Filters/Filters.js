import React, { useEffect, useState } from 'react';
import { mouseflow } from 'react-mouseflow';
import './Filters.css';

const Filters = () => {
  const [variant, setVariant] = useState('A');

  useEffect(() => {
    // Carregar Mouseflow
    mouseflow.initialize('f69f3fb0-f0bd-4160-b813-e6410a4b054f'); // Substitua pelo seu ID do projeto Mouseflow
  }, []);

  mouseflow.newPageView('/');
  // Adicionar tag do Mouseflow para rastrear a variante
  if (mouseflow.initialized()) {
    mouseflow.tag('tag', `FiltersVariant${selectedVariant}`);
  }

  const handleButtonClick = (button) => {
    // Rastreia o clique nos botões usando o Mouseflow
    if (mouseflow) {
      mouseflow('track', 'Filters Button Click', { button });
    }
  };

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
