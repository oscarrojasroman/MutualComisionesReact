import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button, ButtonGroup } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import img from './../../img/checkResultado.jpeg';
import { config } from './../../helpers/config';
import './Modal.css';


var options = {
  noDataText: 'Cargando....'
}

export default class CalculoComision extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      data:[]
    };
  }

  handleHide() {
    this.setState({ show: false });
  }

  url = config.apiUrl+ '/Commission';

  
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

    let fullList = this.state.data./* filter(dat => dat.sellerType.id === 1). */map(dat => dat);
    return (
      <div>
        <Modal
          show={this.props.show}
          onHide={this.props.handleHide}
          aria-labelledby="contained-modal-title modaleDetalle"
          dialogClassName="custom-modal"

        >
          <Modal.Header closeButton className="modalHeader">
            <img src={img} alt="check" className="checkResultado" />
            <div id="contained-modal-title " className="center">
              Detalle Comision
                </div>

          </Modal.Header>

          <Modal.Body>
            <BootstrapTable data={ fullList } pagination options={options}>
              <TableHeaderColumn dataField='id' isKey className="headers">Numero de Proceso</TableHeaderColumn>
              <TableHeaderColumn dataField='processDate' className="headers" dataAlign="center" dataSort>Fecha</TableHeaderColumn>
              <TableHeaderColumn dataField='fiscalId' className="headers" dataAlign="center" dataSort>RUT</TableHeaderColumn>
              <TableHeaderColumn dataField='name' className="headers" dataAlign="center" dataSort>Nombre</TableHeaderColumn>
              <TableHeaderColumn dataField='paymenConcept' className="headers" dataAlign="center" dataSort>Concepto de Pago</TableHeaderColumn>
              <TableHeaderColumn dataField='paymentAmount' className="headers" dataAlign="center" dataSort>Monto</TableHeaderColumn>
            </BootstrapTable>
          </Modal.Body>

          <Modal.Footer className="modalFooter">
            <ButtonGroup >
              <Button >Excel</Button>
              <Button onClick={this.props.handleHide}>Cerrar</Button>
            </ButtonGroup>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }

}

