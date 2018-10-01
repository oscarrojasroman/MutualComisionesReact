import React from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Tablas.css';

const uf = [];

function addUf(quantity) {
  const startId = uf.length;
  for (let i = 1; i < quantity; i++) {
    const id = startId + i;
    uf.push({
      id: id,
      price: 29150.44 + i 
    });
  }
}

addUf(5);

const cellEditProp = {
  mode: 'click'
};

export default class ClickToEditTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ uf } cellEdit={ cellEditProp }>
          <TableHeaderColumn className="tablaUf t4" dataField='id' isKey={ true }>UF ID</TableHeaderColumn>
          <TableHeaderColumn className="tablaUf" dataField='price'>Valor UF</TableHeaderColumn>        
      </BootstrapTable>
    );
  }
}
