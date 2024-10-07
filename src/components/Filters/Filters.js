import React, { useEffect, useState } from 'react';
import './Filters.css';

const Filters = () => {
  const [variant, setVariant] = useState('A');

  useEffect(() => {
    // Carregar Mouseflow
    const mouseflowScript = document.createElement('script');
    mouseflowScript.src = 'https://cdn.mouseflow.com/projects/YOUR_PROJECT_ID.js'; // Substitua pelo seu ID do projeto Mouseflow
    mouseflowScript.async = true;
    document.head.appendChild(mouseflowScript);

    // Definir variante A ou B (de forma aleatória)
    const selectedVariant = Math.random() < 0.5 ? 'A' : 'B';
    setVariant(selectedVariant);

    // Adicionar tag do Mouseflow para rastrear a variante
    if (window.mouseflow) {
      window.mouseflow('tag', `FiltersVariant${selectedVariant}`);
    }

    return () => {
      document.head.removeChild(mouseflowScript);
    };
  }, []);

  const handleButtonClick = (button) => {
    // Rastreia o clique nos botões usando o Mouseflow
    if (window.mouseflow) {
      window.mouseflow('track', 'Filters Button Click', { button });
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
