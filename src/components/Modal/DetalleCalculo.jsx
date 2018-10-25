import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button, ButtonGroup } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import img from './../../img/checkResultado.jpeg';

import './Modal.css';


var options = {
  noDataText: 'Cargando....'
}

export default class CalculoComision extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div>

        {/* <Button onClick={() => this.setState({ show: true })}> Detalle </Button> */}

        <Modal
          show={this.props.show}
          onHide={this.props.handleHide}
          aria-labelledby="contained-modal-title"
          dialogClassName="custom-modal"

        >
          <Modal.Header closeButton className="modalHeader">
            <img src={img} alt="check" className="checkResultado" />
            <div id="contained-modal-title " className="center">
              Detalle Comision
                </div>

          </Modal.Header>

          <Modal.Body>
            <BootstrapTable data={this.props.data} pagination options={options}>
              <TableHeaderColumn dataField='processNumber' isKey className="headers">Numero de Proceso</TableHeaderColumn>
              <TableHeaderColumn dataField='processDate' className="headers">Fecha</TableHeaderColumn>
              <TableHeaderColumn dataField={'fiscalId'.concat('verificatorDigit')} className="headers">RUT</TableHeaderColumn>
              <TableHeaderColumn dataField='name' className="headers">Nombre</TableHeaderColumn>
              <TableHeaderColumn dataField='paymentConcept' className="headers">Concepto de Pago</TableHeaderColumn>
              <TableHeaderColumn dataField='paymentAmount' className="headers">Monto</TableHeaderColumn>
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

