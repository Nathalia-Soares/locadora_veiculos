import React, { useState } from 'react';
import logo from './../../assets/logo.png';
import './login.css';
import { Link } from 'react-router-dom';

function LoginComponent() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="links">
          <a href="/forgot-password">Esqueci minha senha</a>
          <a href="/cadastro">Não tenho cadastro</a>
        </div>
        <Link to="/lista_carros" className="login-button">Login</Link>
      </form>
    </div>
  );
}

export default LoginComponent;
