import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CarrosDetalhes from './../../assets/dados/carros.json';
import './pagamento.css';

function PagamentoComponent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [installments, setInstallments] = useState(1);
  const [carroDetalhe, setCarroDetalhe] = useState(null);

  useEffect(() => {
    const carro = CarrosDetalhes.find(carro => carro.id === parseInt(id));
    setCarroDetalhe(carro);
  }, [id]);

  if (!carroDetalhe) {
    return <div>Carregando...</div>;
  }

  const totalPrice = carroDetalhe.price * 1; // Ajuste conforme necessário
  const installmentValue = (totalPrice / installments).toFixed(2);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleInstallmentChange = (event) => {
    setInstallments(Number(event.target.value));
  };

  return (
    <div className="payment-container">
      <h2>Pagamentos</h2>

      <div className="car-info">
        <img src={carroDetalhe.image} alt={carroDetalhe.name} className="car-image" />
        <div className="car-details">
          <h3>{carroDetalhe.name}</h3>
          <p>{carroDetalhe.type}</p>
          <p>
            <span className={`status ${carroDetalhe.available ? 'available' : 'unavailable'}`}>
              {carroDetalhe.available ? 'Disponível' : 'Indisponível'}
            </span> na unidade {carroDetalhe.location}
            <br />
            Diárias a partir de R${carroDetalhe.price}
          </p>
        </div>
      </div>

      <div className="total-price">
        <p>Preço Total: R${totalPrice}</p>
      </div>

      <div className="payment-options">
        <h2>PAGAMENTO</h2>
        <label>
          <input
            type="checkbox"
            value="credit"
            checked={paymentMethod === 'credit'}
            onChange={handlePaymentChange}
          />
          Cartão de Crédito
        </label>
        <label>
          <input
            type="checkbox"
            value="debit"
            checked={paymentMethod === 'debit'}
            onChange={handlePaymentChange}
          />
          Cartão de Débito
        </label>
        <label>
          <input
            type="checkbox"
            value="pix"
            checked={paymentMethod === 'pix'}
            onChange={handlePaymentChange}
          />
          PIX
        </label>
        <label>
          <input
            type="checkbox"
            value="boleto"
            checked={paymentMethod === 'boleto'}
            onChange={handlePaymentChange}
          />
          Boleto
        </label>
      </div>

      {paymentMethod === 'credit' && (
        <div className="installments">
          <h2>DADOS DO CARTÃO</h2>
          <div className="form-group">
            <label>Número do Cartão:</label>
            <input
              type="text"
              name="cartao"
              required
            />
          </div>
          <div className="form-group">
            <label>Nome do Titular:</label>
            <input
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label>Validade:</label>
            <input
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label>CVV:</label>
            <input
              type="text"
              required
            />
          </div>
          <label>
            Parcelas:
            <select value={installments} onChange={handleInstallmentChange}>
              <option value="1">1x de R${installmentValue}</option>
              <option value="2">2x de R${(totalPrice / 2).toFixed(2)}</option>
              <option value="3">3x de R${(totalPrice / 3).toFixed(2)}</option>
              <option value="4">4x de R${(totalPrice / 4).toFixed(2)}</option>
            </select>
          </label>
        </div>
      )}

      <div className="footer-buttons">
        <button className="footer-button" onClick={() => navigate(-1)}>Voltar</button>
        <button className="footer-button">Confirmar Pagamento</button>
      </div>
    </div>
  );
}

export default PagamentoComponent;
