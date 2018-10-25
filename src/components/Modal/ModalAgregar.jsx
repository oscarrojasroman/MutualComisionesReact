import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button, ButtonGroup,ControlLabel,FormGroup,FormControl} from 'react-bootstrap';
import img from './../../img/checkResultado.jpeg';
import './Modal.css';
import { IoIosAdd } from 'react-icons/io';

export default class ModalAgregar extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleHide = this.handleHide.bind(this);
        this.state = {
          show: false,
          value: "asd"
        };
        this.value="";
      }
    
      handleHide() {
        this.setState({ show: false });
      }

      handleSelectChange = (event) => {
        this.setState({
          result: event.target.value
        })
      }

      render() {
        
        return (
          <div>
            <Button onClick={() => this.setState({ show: true })}  className="btn-add-file1"><IoIosAdd/>Agregar </Button>

            <Modal
              show={this.state.show}
              onHide={this.handleHide}
              
              aria-labelledby="contained-modal-title"
              dialogClassName="custom-modal"
             
            >
              <Modal.Header closeButton className="modalHeader">
                <img src={img} alt="check" className="checkResultado"/>
                <div id="contained-modal-title " className="center">
                 Agregar
                </div>
                
              </Modal.Header>

              <Modal.Body>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Seleccione Parametro</ControlLabel>
                <FormControl componentClass="select" placeholder="select" onClick={this.handleSelectChange}>
                    <option value="Full Region">Full Region</option>
                    <option value="Pyme">Pyme</option>
                    <option value="Gestor Comercial">Gestor Comercial</option>
                </FormControl>
            </FormGroup>
                 <div>
                   
                   {this.state.result}
                 </div>
                
              </Modal.Body>

                <Modal.Footer className="modalFooter">
                  <ButtonGroup >
                    <Button >Guardar</Button>
                    <Button onClick={this.handleHide}>Cerrar</Button>
                  </ButtonGroup>
               
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
    
}

