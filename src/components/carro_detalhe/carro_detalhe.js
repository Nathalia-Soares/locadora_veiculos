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
                    <p>Diárias à partir de R${carroDetalhe.price}</p>
                </div>

                <div className="car-specs">
                    <p><strong>Marca:</strong> {carroDetalhe.brand}</p>
                    <p><strong>Nome do Veículo:</strong> {carroDetalhe.model}</p>
                    <p><strong>Ano/Modelo:</strong> {carroDetalhe.year}</p>
                    <p><strong>Categoria:</strong> {carroDetalhe.category}</p>
                    <p><strong>Combustível:</strong> {carroDetalhe.fuel}</p>
                    <p><strong>Câmbio:</strong> {carroDetalhe.transmission}</p>
                    <p><strong>Número de Portas:</strong> {carroDetalhe.doors}</p>
                    <p><strong>Cores:</strong></p>
                    <div className="colors">
                        {carroDetalhe.colors.map((color, index) => (
                            <label key={index}>
                                <input type="radio" name="color" value={color} /> {color}
                            </label>
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