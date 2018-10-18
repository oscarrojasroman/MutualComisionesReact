import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Tablas.css';
import { config } from './../../helpers/config';
import Moment from 'react-moment';
import { CSVLink } from "react-csv";

const cellEditProp = {
  mode: 'click'
};

var options = {
  noDataText: 'Cargando....'
}


export default class ClickToEditTable extends Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }

  componentDidMount(){
    fetch(config.apiUrl + '/Ufparameter').then((Response)=>Response.json())
    .then((findresponse)=>{
      //console.log(findresponse)
      this.setState({
        data:findresponse
      })
    })
  }


 
  render() {

    const dateFormatter = (cell) => (
      <Moment format="DD/MM/YYYY">
        {cell}
      </Moment>
    );

    return (
      <div className="tablaU">
      <p className="captionuf">UF</p>
      <BootstrapTable data={ this.state.data} cellEdit={ cellEditProp } hover = { true }  options={options}>
          <TableHeaderColumn dataField='date' isKey={ true } dataFormat={dateFormatter} dataAlign="center" >FECHA UF</TableHeaderColumn> 
          <TableHeaderColumn dataField='value' dataAlign="center">Valor UF</TableHeaderColumn>    
      </BootstrapTable>
      
      </div>
    );
  }
}
