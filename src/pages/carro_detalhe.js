import React from 'react';
import CarroDetalhesComponent from '../components/carro_detalhe/carro_detalhe';
import NavComponent from '../components/nav/nav';


function CarroDetalhes() {
    const selectedCarId = 1;

    return (
        <div className="Index">
            <NavComponent />
            <CarroDetalhesComponent carId={selectedCarId} />
        </div>
    );
}

export default CarroDetalhes;