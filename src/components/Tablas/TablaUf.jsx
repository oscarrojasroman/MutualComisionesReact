import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Tablas.css';
import { config } from './../../helpers/config';

const cellEditProp = {
  mode: 'click'
};

export default class ClickToEditTable extends Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }

  componentDidMount(){
    fetch(config.apiUrl + '/Ufparameter').then((Response)=>Response.json()).
    then((findresponse)=>{
      console.log(findresponse)
      this.setState({
        data:findresponse
      })
    })
  }

  render() {
    return (
      <div className="tabla">
      <p className="captionuf">UF</p>
      <BootstrapTable data={ this.state.data } cellEdit={ cellEditProp } >
          <TableHeaderColumn dataField='date' isKey={ true }>FECHA UF</TableHeaderColumn>
          <TableHeaderColumn dataField='value'>Valor UF</TableHeaderColumn>        
      </BootstrapTable>
      </div>
    );
  }
}
