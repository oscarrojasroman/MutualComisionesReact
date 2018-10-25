import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button, ButtonGroup} from 'react-bootstrap';
import img from './../../img/dolar.png';
import './Modal.css';
import {Table} from 'react-bootstrap';




export default class ModalInicio extends Component {

    constructor(props, context) {
        super(props, context);

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    
        this.handleHide = this.handleHide.bind(this);
        this.state = {
          show: true ,
          date:date
        };
      }
    
      handleHide() {
        this.setState({ show: false });
      }

      yourChangeHandler(event){
        alert(event.target.value);
             
      }
      



       
      render() {
        
        return (
          <div>

            <Modal
              show={this.state.show}
              onHide={this.handleHide}
              className="modalinicio"
              aria-labelledby="contained-modal-title"
              
             
            >
              <Modal.Header closeButton className="modalHeader">
                <img src={img} alt="dolar" className="dolar"/>
                <div id="contained-modal-title " className="center">
                Valor UF
                </div>
                
              </Modal.Header>

              <Modal.Body>
              <Table responsive className="tablaResultadoComision">
                <thead>
                  <tr>
                    <th>Valor Actual</th>
                    <th>Fecha de Proceso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>$28.576</td>
                    <td> {this.state.date} </td>
                  </tr>
                </tbody>
              </Table>
        
              </Modal.Body>

                <Modal.Footer className="modalFooter">
                  <ButtonGroup >
                    <Button onClick={this.handleHide}>Cerrar</Button>
                  </ButtonGroup>
               
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
    
}

