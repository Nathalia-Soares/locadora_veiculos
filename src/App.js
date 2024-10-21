import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/index';
import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Perfil from './pages/perfil';
import ListaCarros from './pages/lista_carros';
import './App.css';
import CarroDetalhes from './pages/carro_detalhe';

function App() {
  return (
    <div className="App">
      <Analytics />
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/lista_carros" element={<ListaCarros />} />
          <Route path="/carro_id/:id" element={<CarroDetalhes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
