import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Tablas.css';

const tope = [];

function addTope(quantity) {
  const startId = tope.length;
  for (let i = 1; i <= quantity; i++) {
    const id = startId + i;
    tope.push({
      id: id,
      price: 410 + ' UF',
    });
  }
}

addTope(1);

const cellEditProp = {
  mode: 'click'
};

export default class TablaTope extends Component {
  render() {
    return (
      <BootstrapTable data={ tope } cellEdit={ cellEditProp } className="tabla">
          
          <TableHeaderColumn className="tablaUf t4" dataField='id' isKey={ true }>TOPE ID</TableHeaderColumn>
          <TableHeaderColumn className="tablaUf" dataField='price'>Valor TOPE</TableHeaderColumn>        
      </BootstrapTable>
    );
  }
}
