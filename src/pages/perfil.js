import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import PerfilComponent from '../components/perfil/perfil';

function Perfil() {
  return (
    <div className="Index">
      <Analytics />
      <PerfilComponent />
    </div>
  );
}

export default Perfil;