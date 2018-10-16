import React, { Component } from 'react';
import ResultadoComision from '../Modal/ResultadoComision';


class Tablas extends Component {
    render() {
        return (
            <div className="tablaButton">
                <h3 className="titleCalculo">CÁLCULO</h3>
                <p className="textCalculo">Resultado del calculo de comision</p>
                <ResultadoComision/>      
            </div>
        );
    }
}

Tablas.propTypes = {

};

export default Tablas;