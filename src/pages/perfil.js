import React from 'react';
import PerfilComponent from '../components/perfil/perfil';
import NavComponent from '../components/nav/nav';

function Perfil() {
  return (
    <div className="Index">
      <NavComponent />
      <PerfilComponent />
    </div>
  );
}

export default Perfil;