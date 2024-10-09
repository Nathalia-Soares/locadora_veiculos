import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [variant, setVariant] = useState('A');

  const handleMenuClick = (item) => {
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
