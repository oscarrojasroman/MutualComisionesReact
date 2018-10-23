import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button, ButtonGroup } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import img from './../../img/checkResultado.jpeg';

import './Modal.css';



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
            <Button bsStyle="primary">Ejecutar</Button>
            <Button onClick={() => this.setState({ show: true })}> Detalle 
            </Button>
            
            <Button onClick={this.handleHide}>Close</Button>
    
            <Modal
              show={this.state.show}
              onHide={this.handleHide}
              
              aria-labelledby="contained-modal-title"
              dialogClassName="custom-modal"
             
            >
              <Modal.Header closeButton>
                <img src={img} alt="check" className="checkResultado"/>
                <div id="contained-modal-title " className="center">
                 Detalle Comision
                </div>
                
              </Modal.Header>

              <Modal.Body>
                <BootstrapTable data={ [] } pagination>
                    <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                </BootstrapTable>
              </Modal.Body>

                <Modal.Footer>
                  <ButtonGroup>
                    <Button bsStyle="primary">Ejecutar</Button>
                    <Button >Excel</Button>
                    <Button onClick={this.handleHide}>Close</Button>
                  </ButtonGroup>
               
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
    
}

