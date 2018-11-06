import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Tablas.css';
import { config } from './../../helpers/config';
import { parametersActions } from '../../actions';
import { connect } from 'react-redux';


class TablaFullRegion2 extends Component {
    constructor(props){
        super(props);
        this.state={
          data:[]
        }
      }

      
      onAfterSaveCell(row, cellName, cellValue) {
        alert(`Cambiar celda ${cellName} al valor ${cellValue}`);

        let rowStr = '';
        for (const prop in row) {
          rowStr += prop + ': ' + row[prop] + '\n';
        }

        const { dispatch } = this.props;
        dispatch(parametersActions.update(row.id,row.sellerType,row.workerMaximunAmount,row.commissionFactor,row.commissionGift)); 

        alert('Nuevos Valores :\n' + rowStr);
      }

      onBeforeSaveCell(row, cellName, cellValue) {
        return true;
      }

      cellEditProp = {
        mode: 'click',
        
        beforeSaveCell: this.onBeforeSaveCell, 
        afterSaveCell: this.onAfterSaveCell 
      };

      selectRowProp = {
        mode: 'checkbox',
    }
      
      url = config.apiUrl+ '/SellerRangeParameter';
      
      options = {
        noDataText: 'Cargando....'
      }


      componentDidMount(){
        fetch(this.url).then((Response)=>Response.json())
        .then((findresponse)=>{
          console.log(findresponse)
          this.setState({
            data:findresponse
          })
        })
      }

  render() {
    let fullList = this.state.data.filter(dat => dat.sellerType.id === 1).map(dat => dat);
    return (
        <div className="tablafull">
            <p className="captionf">Full Region</p>
            <div>
                <BootstrapTable data={ fullList } cellEdit={ this.cellEditProp } hover = { true } options={this.options} /* deleteRow = { true } selectRow={this.selectRowProp} */>  
                    <TableHeaderColumn  dataField='workerMaximunAmount' isKey={ true } dataAlign="center" dataSort>Trabajadores</TableHeaderColumn>     
                    <TableHeaderColumn  dataField='commissionFactor' dataAlign="center" >Comision</TableHeaderColumn>
                    <TableHeaderColumn  dataField='commissionGift' dataAlign="center" dataSort>Premio</TableHeaderColumn> 
                </BootstrapTable>
            </div>
       </div>
       
    );
  }
}

function mapStateToProps(state) {
  const { update } = state.update;
  return {
    update
  };
}

const connectedTablaFullRegion2 = connect(mapStateToProps)(TablaFullRegion2);
export { connectedTablaFullRegion2 as TablaFullRegion2 };
 
