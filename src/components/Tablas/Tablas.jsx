import React, { Component } from 'react';
import CalculoComision from '../Modal/CalculoComision';
import CalculoVeda from '../Modal/CalculoVeda';

class Tablas extends Component {
    render() {
        return (
            <div className="tablaButton">
                <CalculoComision/>
                <CalculoVeda/>            
              
            </div>
        );
    }
}

Tablas.propTypes = {

};

export default Tablas;