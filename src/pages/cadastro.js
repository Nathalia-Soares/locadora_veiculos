import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import CadastroComponent from '../components/cadastro/cadastro';

function Cadastro() {
  return (
    <div className="Index">
      <Analytics />
      <CadastroComponent />
    </div>
  );
}

export default Cadastro;