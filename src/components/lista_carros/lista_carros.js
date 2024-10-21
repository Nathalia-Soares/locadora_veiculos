import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListaCarrosDados from './../../assets/dados/carros.json';
import filterIcon from './../../assets/Filter Search.svg';
import searchIcon from './../../assets/Search Button.svg';
import './lista_carros.css';

const ListaCarrosComponent = () => {
  const [carros, setCarros] = useState([]);
  const [selectedCarId, setSelectedCarId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setCarros(ListaCarrosDados);
  }, []);

  const handleCardClick = (id) => {
    setSelectedCarId(id);
  };

  const handleDadosClick = () => {
    if (selectedCarId !== null) {
      navigate(`/carro_id/${selectedCarId}`);
    }
  };

  return (
    <div className="car-list-container">
      <header className="header">
        <div className="search-bar">
          <input type="text" placeholder="Insira um veículo:" />
          <button className="filter-button">
            <img src={filterIcon} width="35px" alt="Filter" />
          </button>
          <button className="search-button">
            <img src={searchIcon} width="40px" alt="Search" />
          </button>
        </div>
      </header>

      <div className="car-list">
        {carros.map((carro) => (
          <div
            key={carro.id}
            className={`car-card ${selectedCarId === carro.id ? 'selected' : ''}`}
            onClick={() => handleCardClick(carro.id)}
          >
            <img src={carro.image} alt={carro.name} className="car-image" />
            <div className="car-info">
              <h2>{carro.name}</h2>
              <p>{carro.type}</p>
              <p>
                <span className={`status-dot ${carro.available ? 'available-dot' : 'unavailable-dot'}`}>
                  {carro.available ? 'Disponível' : 'Indisponível'}
                </span>
                <br />
                Na unidade {carro.location}{' '}
                <a href="#">(Consultar demais unidades)</a>
              </p>
              <p>Diárias à partir de R${carro.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="footer-buttons">
        <button className="footer-button" onClick={handleDadosClick}>Dados do veículo</button>
        <button className="footer-button">Alugar veículo</button>
      </div>
    </div>
  );
};

export default ListaCarrosComponent;