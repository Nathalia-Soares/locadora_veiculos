import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import CarroDetalhesComponent from '../components/carro_detalhe/carro_detalhe';


function CarroDetalhes() {
    const selectedCarId = 1;

    return (
        <div className="Index">
            <Analytics />
            <CarroDetalhesComponent carId={selectedCarId} />
        </div>
    );
}

export default CarroDetalhes;