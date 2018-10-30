import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Tablas.css';
import { config } from './../../helpers/config';


const cellEditProp = {
  mode: 'click'
};

const url = config.apiUrl+ '/SellerRangeparameter';

var options = {
  noDataText: 'Cargando....'
}

export default class TablaFullRegion2 extends Component {
    constructor(){
        super();
        this.state={
          data:[]
        }
      }

      

      componentDidMount(){
        fetch(url).then((Response)=>Response.json())
        .then((findresponse)=>{
          //console.log(findresponse)
          this.setState({
            data:findresponse
          })
        })
      }

      

  render() {
    let fullList = this.state.data.filter(dat => dat.sellerType === 'Full Region').map(dat => dat);
    return (
        <div className="tablafull">
            <p className="captionf">Full Region</p>
            <div>
                <BootstrapTable data={ fullList } cellEdit={ cellEditProp } hover = { true } options={options}>  
                    <TableHeaderColumn  dataField='workerMaximunAmount' isKey={ true } dataAlign="center">Trabajadores</TableHeaderColumn>     
                    <TableHeaderColumn  dataField='commissionFactor' dataAlign="center">Comision</TableHeaderColumn>
                    <TableHeaderColumn  dataField='commissionGift' dataAlign="center">Premio</TableHeaderColumn>    
            </BootstrapTable>
            </div>
            
       </div>
       
    );
  }
}
