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

var options = {
  noDataText: 'Cargando....'
}


export default class TablaTope extends Component {
  render() {
    return (
      <div className="tabla">
        <p className="captionuf">Tope de Remuneracion</p>
        <BootstrapTable data={ tope } cellEdit={ cellEditProp } hover = { true }  options={options}>          
            <TableHeaderColumn  dataField='id' isKey={ true } dataAlign="center">FECHA</TableHeaderColumn>
            <TableHeaderColumn  dataField='price' dataAlign="center" >VALOR</TableHeaderColumn>        
        </BootstrapTable>
      </div>
    );
  }
}
