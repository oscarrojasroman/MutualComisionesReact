import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Tablas.css';
import { config } from '../../helpers/config';

const cellEditProp = {
  mode: 'click'
};

export default class TablaPyme2 extends Component {
    constructor(){
        super();
        this.state={
          data:[]
        }
      }
    
      componentDidMount(){
        fetch(config.apiUrl + '/SellerRangeparameter').then((Response)=>Response.json()).
        then((findresponse)=>{
          //console.log(findresponse)
          this.setState({
            data:findresponse
          })
        })
      }

  render() {
    let dataList = this.state.data.filter(dat => dat.sellerType === 'Pyme').map(dat => dat);

    return (
        <div className="tablapyme"> 
            <p className="captionp">Pyme</p>
      <BootstrapTable data={ dataList } cellEdit={ cellEditProp } >          
          <TableHeaderColumn  dataField='workerMaximunAmount' isKey={ true } className="headertable" dataAlign="center">Trabajadores</TableHeaderColumn>     
          <TableHeaderColumn  dataField='commissionFactor' className="headertable" dataAlign="center">Comision</TableHeaderColumn>
          <TableHeaderColumn  dataField='commissionGift' className="headertable" dataAlign="center">Premio</TableHeaderColumn>         
      </BootstrapTable>
      </div>
       
    );
  }
}
