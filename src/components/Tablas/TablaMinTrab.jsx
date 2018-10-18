import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Tablas.css';

const cellEditProp = {
  mode: 'click'
};

var options = {
    noDataText: 'Cargando....'
  }
  

export default class TablaMinTrab extends Component {
    state = {
        data:[
            {id: 1,rango: 'Pyme', cantidadTrabajadores:300},
            {id: 2,rango: 'FullRegion', cantidadTrabajadores:400},
            {id: 3,rango: 'GestorComercial', cantidadTrabajadores:500},
            {id: 4,rango: 'GestorComercial', cantidadTrabajadores:500}
        ]
    }
  render() {
    return (
        <div className="tablaMeta"> 
            <p className="captionp">Meta Mensual</p>
                <BootstrapTable data={ this.state.data } cellEdit={ cellEditProp } hover = { true }  options={options}>          
                    <TableHeaderColumn  dataField='id' isKey={ true } className="headertable" dataAlign="center">Id</TableHeaderColumn>
                    <TableHeaderColumn  dataField='rango' className="headertable" dataAlign="center">Rango</TableHeaderColumn>     
                    <TableHeaderColumn  dataField='cantidadTrabajadores' className="headertable" dataAlign="center">Trabajadores</TableHeaderColumn>
                </BootstrapTable>
      </div>
       
    );
  }
}
