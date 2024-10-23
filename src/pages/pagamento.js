import React from 'react';
import PagamentoComponent from '../components/pagamentos/pagamento';
import NavComponent from '../components/nav/nav';


function Pagamento() {
    const selectedCarId = 1;

    return (
        <div className="Index">
            <NavComponent />
            <PagamentoComponent carId={selectedCarId} />
        </div>
    );
}

export default Pagamento;