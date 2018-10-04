import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

 

import './Modal.css';
import { IoIosPlay } from 'react-icons/io';

export default class CalculoVeda extends Component {

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
              <IoIosPlay/> Ejecutar Veda
            </Button>
    
            <Modal
              show={this.state.show}
              onHide={this.handleHide}
              container={this}
              aria-labelledby="contained-modal-title"
              
            >
              <Modal.Header closeButton>
                <h1 id="contained-modal-title">
                 Calculo Veda
                </h1>
              </Modal.Header>
              <Modal.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Razón Social</th>
                    <th>N° Contrato</th>
                    <th>N° de Trabajadores</th>
                    <th>Macrosegmento</th>
                    <th>RUT Vendedor</th>
                    <th>RUT Supervisor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>OCRE SPA</td>
                    <td>272606</td>
                    <td>1</td>
                    <td>PYME</td>
                    <td>15480963-5</td>
                    <td>12153853-9</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>SERVICIOS INTEGRALES CACCIUTTOLO LTDA</td>
                    <td>277488</td>
                    <td>182</td>
                    <td>Coorporativo</td>
                    <td>14449517-9</td>
                    <td>8871593-4</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>SOCIEDAD TECHOS VIENTO PUELCHE LIMITADA</td>
                    <td>279829</td>
                    <td>52</td>
                    <td>PYME</td>
                    <td>15624875-5</td>
                    <td>9854623-3</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>SERVICIOS Y PROYECTOS AMBIENTALES S.A.</td>
                    <td>265884</td>
                    <td>30</td>
                    <td>PYME</td>
                    <td>13654846-5</td>
                    <td>10254689-1</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>YASNA PAOLA MALDONADO VASQUEZ</td>
                    <td>225465</td>
                    <td>1</td>
                    <td>Trabajador Independiente</td>
                    <td>14258695-9</td>
                    <td>12548958-3</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>HERESMANN Y SOLARI LIMITADA</td>
                    <td>254987</td>
                    <td>14</td>
                    <td>PYME</td>
                    <td>13654987-5</td>
                    <td>10654347-5</td>
                  </tr>
                </tbody>
              </Table>
              </Modal.Body>
                <Modal.Footer>
                <Button onClick={this.handleHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
    
}

