// src/Perfil.js
import React from "react";
import { useNavigate } from 'react-router-dom';
import perfil from "./../../assets/perfil.png";
import "./perfil.css";

function PerfilComponent() {
    const navigate = useNavigate();
    return (
        <div className="perfil">
            <div className="perfil-container">
                <div className="perfil-header">
                    <h1>PERFIL</h1>
                    <div className="perfil-avatar">
                        <img
                            src={perfil}
                            alt="Avatar do usuário"
                            className="perfil-imagem"
                        />
                    </div>
                </div>

                <div className="perfil-detalhes">
                    <div className="campo">
                        <label>Nome Completo:</label>
                        <p>Leonardo dos Santos Almeida</p>
                    </div>

                    <div className="campo">
                        <label>Username:</label>
                        <p>Leo_Almeida</p>
                    </div>

                    <div className="campo">
                        <label>Data de Nascimento:</label>
                        <p>17/04/1989</p>
                    </div>

                    <div className="campo">
                        <label>CPF:</label>
                        <p>123.456.789.01</p>
                    </div>

                    <div className="campo">
                        <label>Telefone:</label>
                        <p>11-99999-8888</p>
                    </div>

                    <div className="campo">
                        <label>CEP:</label>
                        <p>06700-000</p>
                    </div>

                    <div className="campo">
                        <label>Endereço:</label>
                        <p>Rua 1, Centro, Cotia - SP</p>
                    </div>

                    <div className="campo">
                        <label>Número:</label>
                        <p>256</p>
                    </div>
                </div>

                <div className="perfil-acoes">
                    <button className="voltar" onClick={() => navigate(-1)}>Voltar</button>
                    <button className="alterar">Alterar Perfil</button>
                    <button className="excluir">Excluir Perfil</button>
                </div>
            </div>
        </div>
    );
};

export default PerfilComponent;
