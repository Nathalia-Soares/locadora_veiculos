import React, { useEffect, useState } from 'react';
import { mouseflow } from 'react-mouseflow';
import './Filters.css';

const Filters = () => {
  const [variant, setVariant] = useState('A');

  useEffect(() => {
    // Carregar Mouseflow
    mouseflow.initialize(process.env.MOUSEFLOW_ID); // Substitua pelo seu ID do projeto Mouseflow
    document.head.appendChild(mouseflow);

    // Definir variante A ou B (de forma aleatória)
    const selectedVariant = Math.random() < 0.5 ? 'A' : 'B';
    setVariant(selectedVariant);

    mouseflow.newPageView('/');
    // Adicionar tag do Mouseflow para rastrear a variante
    if (mouseflow.initialized()) {
      mouseflow.tag('tag', `FiltersVariant${selectedVariant}`);
    }

    return () => {
      document.head.removeChild(mouseflow);
    };
  }, []);

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
