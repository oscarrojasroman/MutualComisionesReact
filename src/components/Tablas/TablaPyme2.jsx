import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Tablas.css';

const cellEditProp = {
  mode: 'click'
};

export default class TablaPyme2 extends Component {
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
        <div className="tablapyme"> 
            <p className="captionp">Pyme</p>
      <BootstrapTable data={ this.state.data } cellEdit={ cellEditProp } >          
          <TableHeaderColumn  dataField='id' isKey={ true } className="headertable" dataAlign="center">Tramo</TableHeaderColumn>
          <TableHeaderColumn  dataField='cantidadTrabajadores' className="headertable" dataAlign="center">Trabajadores</TableHeaderColumn>     
          <TableHeaderColumn  dataField='comision' className="headertable" dataAlign="center">Comision</TableHeaderColumn>
          <TableHeaderColumn  dataField='premio' className="headertable" dataAlign="center">Premio</TableHeaderColumn>         
      </BootstrapTable>
      </div>
       
    );
  }
}
