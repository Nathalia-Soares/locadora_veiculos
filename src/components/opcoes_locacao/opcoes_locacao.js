import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CarrosDetalhes from './../../assets/dados/carros.json';
import './opcoes_locacao.css';

function OpcoesLocacaoComponent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [carroDetalhe, setCarroDetalhe] = useState(null);
    const [rentalDays, setRentalDays] = useState(2);
    const [automaticTransmission, setAutomaticTransmission] = useState(false);
    const [accidentInsurance, setAccidentInsurance] = useState(false);
    const [multimediaKit, setMultimediaKit] = useState(false);
    const [returnToOtherUnit, setReturnToOtherUnit] = useState(false);

    useEffect(() => {
        const carro = CarrosDetalhes.find(carro => carro.id === parseInt(id));
        setCarroDetalhe(carro);
    }, [id]);

    if (!carroDetalhe) {
        return <div>Carregando...</div>;
    }

    const basePricePerDay = carroDetalhe.price;
    const automaticTransmissionPrice = 40;
    const accidentInsurancePrice = 20;
    const multimediaKitPrice = 25;
    const returnPrice = returnToOtherUnit ? 30 : 0;

    const totalPrice =
        rentalDays * basePricePerDay +
        (automaticTransmission ? automaticTransmissionPrice * rentalDays : 0) +
        (accidentInsurance ? accidentInsurancePrice * rentalDays : 0) +
        (multimediaKit ? multimediaKitPrice * rentalDays : 0) +
        returnPrice;

    const handleVoltarClick = () => {
        navigate('/lista_carros');
    };

    const handlePagamentoClick = () => {
        navigate(`/carro_id/pagamento/${id}`);
    };

    return (
        <div className="rental-options-container">
            <h2>OPÇÕES DE LOCAÇÃO</h2>
            <div className="car-info">
                <img src={carroDetalhe.image} alt={carroDetalhe.name} className="car-image" />
                <div className="car-details">
                    <h3>{carroDetalhe.name}</h3>
                    <p>{carroDetalhe.type}</p>
                    <p>
                        <span className={`status ${carroDetalhe.available ? 'available' : 'unavailable'}`}>
                            {carroDetalhe.available ? 'Disponível' : 'Indisponível'}
                        </span> na unidade {carroDetalhe.location}
                    </p>
                </div>
            </div>
            <div className="rental-options">
            <h2>OPCIONAIS</h2>
                <label className="rental-days-label">
                    <input
                        type="number"
                        value={rentalDays}
                        onChange={(e) => setRentalDays(parseInt(e.target.value))}
                        min="1"
                        className="small-input"
                    />
                    <p>Dias de Locação:</p>
                </label>
                <label className="optional-item">
                    <input
                        type="checkbox"
                        checked={automaticTransmission}
                        onChange={(e) => setAutomaticTransmission(e.target.checked)}
                    />
                    <p>Câmbio Automático (+R$40/dia)</p>
                </label>
                <label className="optional-item">
                    <input
                        type="checkbox"
                        checked={accidentInsurance}
                        onChange={(e) => setAccidentInsurance(e.target.checked)}
                    />
                    <p>Seguro contra Acidentes (+R$20/dia)</p>
                </label>
                <label className="optional-item">
                    <input
                        type="checkbox"
                        checked={multimediaKit}
                        onChange={(e) => setMultimediaKit(e.target.checked)}
                    />
                    <p>Kit Multimídia (+R$25/dia)</p>
                </label>
                <label className="optional-item">
                    <input
                        type="checkbox"
                    />
                    <p>Nota Fiscal (+R$0/dia)</p>
                </label>
            </div>
            <div className="return-options">
            <h2>DEVOLUÇÃO</h2>
                <label>
                    <input
                        type="checkbox"
                        checked={!returnToOtherUnit}
                        onChange={() => setReturnToOtherUnit(false)}
                    />
                    Na unidade selecionada (Cotia) - R$0
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={returnToOtherUnit}
                        onChange={() => setReturnToOtherUnit(true)}
                    />
                    Outra unidade - R$30
                </label>
            </div>

            <div className="total-price">
                <p>Total: R${totalPrice}</p>
            </div>

            <div className="footer-buttons">
                <button className="footer-button" onClick={handleVoltarClick}>Voltar</button>
                <button className="footer-button" onClick={handlePagamentoClick}>Pagamento</button>
            </div>
        </div>
    );
}

export default OpcoesLocacaoComponent;