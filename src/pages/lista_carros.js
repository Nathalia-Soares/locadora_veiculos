import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import ListaCarrosComponent from '../components/lista_carros/lista_carros';

function ListaCarros() {
  return (
    <div className="Index">
      <Analytics />
      <ListaCarrosComponent />
    </div>
  );
}

export default ListaCarros;