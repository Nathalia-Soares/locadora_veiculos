import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png';

function IndexComponent() {
    return (
        <div className="index">
            <div className="container">
                <div className="logo-container">
                    <img
                        src={logo}
                        alt="Logo"
                        className="logo"
                    />
                </div>
                <div className="buttons-container">
                    <Link to="/login" className="btn">Login</Link>
                    <Link to="/cadastro" className="btn">Cadastrar</Link>
                </div>
            </div>
        </div>
    );
}

export default IndexComponent;
