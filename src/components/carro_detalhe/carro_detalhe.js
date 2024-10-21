import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CarrosDetalhes from './../../assets/dados/carros.json';
import './carro_detalhe.css';

function CarroDetalhesComponent() {
    const { id } = useParams();
    const [carroDetalhe, setCarroDetalhe] = useState(null);

    useEffect(() => {
        const carro = CarrosDetalhes.find(carro => carro.id === parseInt(id));
        setCarroDetalhe(carro);
    }, [id]);

    if (!carroDetalhe) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="car-detail-container">

            <div className="car-detail-card">
                <img src={carroDetalhe.image} alt={carroDetalhe.name} className="car-image" />
                <h2>{carroDetalhe.name}</h2>
                <div className="car-header">
                    <p>
                        <span className={`status-dot ${carroDetalhe.available ? 'available-dot' : 'unavailable-dot'}`}>
                            {carroDetalhe.available ? 'Disponível' : 'Indisponível'}
                        </span>
                        <br />
                        Unidade {carroDetalhe.location}
                    </p>
                    <h3>Diárias à partir de R${carroDetalhe.price}</h3>
                </div>

                <div className="car-specs">
                    <p>Marca:</p>
                    <h3>{carroDetalhe.brand}</h3>
                    <p>Nome do Veículo:</p>
                    <h3>{carroDetalhe.model}</h3>
                    <p>Ano/Modelo:</p>
                    <h3>{carroDetalhe.year}</h3>
                    <p>Categoria:</p>
                    <h3>{carroDetalhe.category}</h3>
                    <p>Combustível:</p>
                    <h3>{carroDetalhe.fuel}</h3>
                    <p>Câmbio:</p>
                    <h3>{carroDetalhe.transmission}</h3>
                    <p>Número de Portas:</p>
                    <h3>{carroDetalhe.doors}</h3>
                    <p>Cores:</p>
                    <div className="colors">
                        {carroDetalhe.colors.map((color, index) => (
                            <div key={index} className="color-item">
                                <div className="color-indicator" style={{ backgroundColor: color }} title={color}></div>
                                <span className="color-name">{color}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="footer-buttons">
                <button className="footer-button">Voltar</button>
                <button className="footer-button">Alugar veículo</button>
            </div>
        </div>
    );
}

export default CarroDetalhesComponent;