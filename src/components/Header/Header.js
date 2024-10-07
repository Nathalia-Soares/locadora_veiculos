import React, { useEffect, useState } from 'react';
import { mouseflow } from 'react-mouseflow';
import './Header.css';

const Header = () => {
  const [variant, setVariant] = useState('A');

  useEffect(() => {
    // Carregar Mouseflow
    const mouseflowScript = document.createElement('script');
    mouseflow.initialize(process.env.MOUSEFLOW_ID); // Substitua pelo seu ID do projeto Mouseflow
    mouseflow.src = `https://cdn.mouseflow.com/projects/${process.env.MOUSEFLOW_ID}.js`; // Substitua pelo seu ID do projeto Mouseflow
    mouseflow.async = true;
    document.head.appendChild(mouseflowScript);

    // Definir variante A ou B (de forma aleatória)
    const selectedVariant = Math.random() < 0.5 ? 'A' : 'B';
    setVariant(selectedVariant);

    // Adicionar tag do Mouseflow para rastrear a variante
    if (window.mouseflow) {
      window.mouseflow('tag', `HeaderVariant${selectedVariant}`);
    }

    return () => {
      document.head.removeChild(mouseflowScript);
    };
  }, []);

  const handleMenuClick = (item) => {
    // Rastreia o clique no item do menu usando o Mouseflow
    if (window.mouseflow) {
      window.mouseflow('track', 'Header Menu Click', { menuItem: item });
    }
  };

  return (
    <header className={`header variant-${variant}`}>
      <div className="logo">iFome</div>
      <nav>
        <ul>
          {['Início', 'Restaurantes', 'Mercados', 'Bebidas', 'Farmácias', 'Pets', 'Shopping'].map((item) => (
            <li key={item} onClick={() => handleMenuClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
      {/* Barra de busca */}
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <button>Buscar</button>
      </div>
      <div className="user-info">
        <span>Av. Paulista, 800</span>
        <span>R$ 0,00 (0 itens)</span>
      </div>
    </header>
  );
};

export default Header;
