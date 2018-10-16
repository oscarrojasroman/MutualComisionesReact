import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CalculoComision from './CalculoComision';
 

import './Modal.css';
import { IoIosPlay } from 'react-icons/io';

export default class ResultadoComision extends Component {

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
            <Button bsStyle="primary" bsSize="large" className="btnCalculos"onClick={() => this.setState({ show: true })}>
              <IoIosPlay className="iconPlay"/>
              <br/> 
              Ejecutar  
            </Button>
    
            <Modal
              show={this.state.show}
              onHide={this.handleHide}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <h1 id="contained-modal-title">
                 Calculo Comision
                </h1>
              </Modal.Header>
              <Modal.Body>
              <Table responsive>
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
                    <td>1</td>
                    <td>OCRE SPA</td>
                    <td>272606</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
              </Modal.Body>
                <Modal.Footer>  
                    <div className="botonesEnLinea">
                        <Button bsStyle="primary">Ejecutar</Button>
                        <Button onClick={this.handleHide}>Close</Button>
                        <CalculoComision />
                    </div>              
                
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
}

