import React, { Component } from 'react';
import ResultadoComision from '../Modal/ResultadoComision';


class Tablas extends Component {
    render() {
        return (
            <div className="tablaButton">
                <h3 className="titleCalculo">CÁLCULO</h3>
                <p className="textCalculo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis</p>
                <ResultadoComision/>      
            </div>
        );
    }
}

Tablas.propTypes = {

};

export default Tablas;