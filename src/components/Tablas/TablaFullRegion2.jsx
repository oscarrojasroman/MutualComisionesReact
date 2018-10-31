import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Tablas.css';
import { config } from './../../helpers/config';


function onAfterSaveCell(row, cellName, cellValue) {
  alert(`Cambiar celda ${cellName} al valor ${cellValue}`);

  let rowStr = '';
  for (const prop in row) {
    rowStr += prop + ': ' + row[prop] + '\n';
  }

  alert('Nuevos Valores :\n' + rowStr);
}

function onBeforeSaveCell(row, cellName, cellValue) {
  return true;
}

function onRowSelect(row, isSelected, e) {
  if (isSelected ) {
    alert('The selection only work on key which less than 3');
    return false;
  }
}


const cellEditProp = {
  mode: 'click',
  
  beforeSaveCell: onBeforeSaveCell, 
  afterSaveCell: onAfterSaveCell 
};

const selectRowProp = {
  mode: 'radio',
  clickToSelect: true,
  onSelect: onRowSelect,
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
                <BootstrapTable data={ fullList } cellEdit={ cellEditProp } hover = { true } options={options} selectRow={ selectRowProp }>  
                    <TableHeaderColumn  dataField='workerMaximunAmount' isKey={ true } dataAlign="center">Trabajadores</TableHeaderColumn>     
                    <TableHeaderColumn  dataField='commissionFactor' dataAlign="center">Comision</TableHeaderColumn>
                    <TableHeaderColumn  dataField='commissionGift' dataAlign="center">Premio</TableHeaderColumn>    
            </BootstrapTable>
            </div>
            
       </div>
       
    );
  }
}
