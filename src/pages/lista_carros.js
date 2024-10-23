import React from 'react';
import ListaCarrosComponent from '../components/lista_carros/lista_carros';
import NavComponent from '../components/nav/nav';

function ListaCarros() {
  return (
    <div className="Index">
      <NavComponent />
      <ListaCarrosComponent />
    </div>
  );
}

export default ListaCarros;