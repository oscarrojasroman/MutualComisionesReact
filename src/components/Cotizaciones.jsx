import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon } from 'react-bootstrap';
import Table from './Tablas/Tablas';

class Cotizaciones extends Component {
    render() {
        return (
            <div>           
             <Table/>
              <Button bsStyle="primary" bsSize="large" block>
              <Glyphicon glyph=" glyphicon glyphicon-play" /> 
                 Ejecutar
              </Button>
            </div>
        );
    }
}

Cotizaciones.propTypes = {

};

export default Cotizaciones;