import React, { Component } from 'react';
import CalculoComision from '../Modal/CalculoComision';


class Tablas extends Component {
    render() {
        return (
            <div className="tablaButton">
                <h3 className="titleCalculo">CÁLCULO</h3>
                <p className="textCalculo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <CalculoComision/>      
            </div>
        );
    }
}

Tablas.propTypes = {

};

export default Tablas;