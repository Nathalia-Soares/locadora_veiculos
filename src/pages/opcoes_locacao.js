import React from 'react';
import OpcoesLocacaoComponent from '../components/opcoes_locacao/opcoes_locacao';
import NavComponent from '../components/nav/nav';


function OpcaoLocacao() {
    const selectedCarId = 1;

    return (
        <div className="Index">
            <NavComponent />
            <OpcoesLocacaoComponent carId={selectedCarId} />
        </div>
    );
}

export default OpcaoLocacao;