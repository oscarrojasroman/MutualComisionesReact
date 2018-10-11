import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './Tablas.css';

const cellEditProp = {
  mode: 'click'
};

export default class TablaGestorComercial extends Component {
    state = {
        data:[
            {id: 1,cantidadTrabajadores: 10, comision:0.17, premio: 0},
            {id: 2,cantidadTrabajadores: 50, comision:0.17, premio: 0.2},
            {id: 3,cantidadTrabajadores: 100, comision:0.17, premio: 0.18},
            {id: 4,cantidadTrabajadores: 300, comision:0.18, premio: 0.24}
        ]
    }
  render() {
    return (
        <div className="tablafull"> 
            <p className="captiong">Gestor Comercial</p>
      <BootstrapTable data={ this.state.data } cellEdit={ cellEditProp } >          
          <TableHeaderColumn  dataField='id' isKey={ true } dataAlign="center">Tramo</TableHeaderColumn>
          <TableHeaderColumn  dataField='cantidadTrabajadores' dataAlign="center">Trabajadores</TableHeaderColumn>     
          <TableHeaderColumn  dataField='comision' dataAlign="center">Comision</TableHeaderColumn>
          <TableHeaderColumn  dataField='premio' dataAlign="center">Premio</TableHeaderColumn>         
      </BootstrapTable>
      </div>
       
    );
  }
}
