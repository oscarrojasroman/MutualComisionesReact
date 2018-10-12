import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './Tablas.css';
import { config } from '../../helpers/config';

const cellEditProp = {
  mode: 'click'
};

export default class TablaGestorComercial extends Component {
    constructor(){
        super();
        this.state={
          data:[]
        }
      }
    
      componentDidMount(){
        fetch(config.apiUrl + '/SellerRangeparameter').then((Response)=>Response.json()).
        then((findresponse)=>{
          console.log(findresponse)
          this.setState({
            data:findresponse
          })
        })
      }
  render() {
    let dataList = this.state.data.filter(dat => dat.employeeMacroSegment === 'Gestor Comercial').map(dat => dat);
    return (
        <div className="tablafull"> 
            <p className="captiong">Gestor Comercial</p>
      <BootstrapTable data={ dataList } cellEdit={ cellEditProp } >          
          <TableHeaderColumn  dataField='workerMaximunAmount' isKey={ true } dataAlign="center">Trabajadores</TableHeaderColumn>     
          <TableHeaderColumn  dataField='commissionFactor' dataAlign="center">Comision</TableHeaderColumn>
          <TableHeaderColumn  dataField='commissionGift' dataAlign="center">Premio</TableHeaderColumn>         
      </BootstrapTable>
      </div>
       
    );
  }
}
