import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Button, ButtonGroup } from 'react-bootstrap';
import CalculoComision from './DetalleCalculo';
import img from './../../img/checkResultado.jpeg';

import './Modal.css';
import { IoIosPlay } from 'react-icons/io';

export default class ResultadoComision extends Component {

  constructor(props, context) {
    super(props, context);

    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      showDetalleComision: false,
      date: date
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div>
        <Button bsSize="large" className="btnCalculos" onClick={() => this.setState({ show: true })}>
          <IoIosPlay className="iconPlay" />
          <br />
          Ejecutar
            </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton className="modalHeader">
            <img src={img} alt="check" className="checkResultado" />
            <div id="contained-modal-title" className="center">
              Cálculo Comision
                </div>
          </Modal.Header>
          <Modal.Body>
            <Table responsive className="tablaResultadoComision">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>RUT</th>
                  <th>Monto Total</th>
                  <th>Fecha de Proceso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ejemplo</td>
                  <td>11.111.111-1</td>
                  <td>202.000.000</td>
                  <td> {this.state.date} </td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer className="modalFooter">

            <CalculoComision
              show={this.state.showDetalleComision}
              handleHide={() => this.setState({ showDetalleComision: false })}
              data={[]}
            />

            <ButtonGroup className="botonesEnLinea">
              <Button bsStyle="primary">Ejecutar</Button>
              <Button onClick={() => this.setState({ showDetalleComision: true })}>Detalle</Button>
              <Button onClick={this.handleHide}>Cerrar</Button>
            </ButtonGroup>


          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

