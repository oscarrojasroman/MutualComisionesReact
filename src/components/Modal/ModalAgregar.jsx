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

      handleChange(event){
        if(event.target.value =="asd"){
          this.value == 'FullRegion'
        }
        else if (event.target.value=="bar"){
          this.value == 'ASD'
        }
        else if (event.target.value=="GestorComercial"){
          this.value == 'Gestor'
        }


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
                <FormControl componentClass="select" placeholder="select">
                    <option value="foo">Full Region</option>
                    <option value="bar">Pyme</option>
                    <option value="asd">Gestor Comercial</option>
                </FormControl>
            </FormGroup>

                  {this.value}
                
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

