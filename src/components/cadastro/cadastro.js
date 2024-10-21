import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './cadastro.css';

function CadastroComponent() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    username: '',
    dataNascimento: '',
    cpf: '',
    telefone: '',
    cep: '',
    numero: '',
    cnh: null,
    termos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cnh: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="cadastro">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Sobrenome:</label>
          <input
            type="text"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Telefone:</label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>CEP:</label>
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Número:</label>
          <input
            type="text"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Upload CNH:</label>
          <input type="file" name="cnh" onChange={handleFileChange} required />
        </div>

        <div className="form-group-checkbox">
          <input
            type="checkbox"
            name="termos"
            checked={formData.termos}
            onChange={handleChange}
            required
          />
          <label>
            Aceito os termos de uso do app.{' '}
            <a href="/termos" target="_blank">
              Clique aqui para ler os termos
            </a>
          </label>
        </div>
        <Link to="/login" className="btn-submit">Cadastrar</Link>
      </form>
    </div>
  );
}

export default CadastroComponent;
