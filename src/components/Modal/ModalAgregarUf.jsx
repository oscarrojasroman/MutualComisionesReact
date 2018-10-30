import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button, ButtonGroup,ControlLabel,FormGroup,FormControl} from 'react-bootstrap';
import img from './../../img/mas.png';
import './Modal.css';
import { IoIosAdd, IoIosSave } from 'react-icons/io';
import { parametersActions } from '../../actions';
import { connect } from 'react-redux';



class ModalAgregarUf extends Component {

    constructor(props, context) {
        super(props, context);
        
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

 
        this.handleHide = this.handleHide.bind(this);
        this.state = {
          date: date,
          show: false,
          value: 0,        
          submitted: false
        };

        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
      }

      
    
      handleHide() 
      {
        this.setState({ show: false });
      }

      handleSelectChange = (event) =>
      {
        this.setState({
          result: event.target.value,
          sellerType: event.target.value
        })
      }

      handleChange(e) 
      {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      }
    
      handleSubmit(e)
     {
          e.preventDefault();
      
          this.setState({ submitted: true });
          const { value, date } = this.state;
          const { dispatch } = this.props;
          if (value && date) 
          {
              dispatch(parametersActions.addUf(value, date));              
          }   

      }

 
      render() {

        let addParametersBody = null;
        const { add } = this.props;
        const {value,submitted }= this.state;        

       
          addParametersBody =
            <FormGroup >
                  <FormControl type="date" placeholder="Fecha" className="formAgregar" defaultValue={this.state.date} name="date"  onChange={this.handleChange}/>
                    {    
                        submitted && ! value &&
                        <div className="help-block">La Fecha es requerida</div>
                    }
                  <FormControl type="number" placeholder="Valor" className="formAgregar" name="value"  onChange={this.handleChange}/>
                    {    
                        submitted && ! value &&
                        <div className="help-block">El Valor es requerido</div>
                    }
            </FormGroup>;
        

        
        return (
          <div>
            <ButtonGroup className="botonesEnLinea botonesAgregar">
              <Button onClick={() => this.setState({ show: true })}  className="btn-add-file1"><IoIosAdd/>Agregar </Button>
              <Button  className="btn-add-file1"><IoIosSave/>Guardar</Button>
            </ButtonGroup>

            <Modal
              show={this.state.show}
              onHide={this.handleHide}
              
              aria-labelledby="contained-modal-title"
              dialogClassName="custom-modal"
             
            >
              <Modal.Header closeButton className="modalHeader">
                <img src={img} alt="check" className="checkResultado mas"/>
                <div id="contained-modal-title " className="center">
                 Agregar
                </div>
                
              </Modal.Header>

              <Modal.Body>

              <FormGroup controlId="formControlsSelect" >
                <ControlLabel>Seleccione Parametro</ControlLabel>
                <FormControl componentClass="select" placeholder="select" onClick={this.handleSelectChange}>
                    <option value="UF">UF</option>
                </FormControl>
              </FormGroup>                 
                 <div>                   
                   {addParametersBody}
                 </div>
                
              </Modal.Body>

                <Modal.Footer className="modalFooter">
                  <ButtonGroup >                   
                    <Button onClick={this.handleSubmit}>Guardar</Button>
                      {
                        add                        
                      }                          
                    <Button onClick={this.handleHide}>Cerrar</Button>
                  </ButtonGroup>
               
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
  }
    

function mapStateToProps(state) {
  const { add } = state.add;
  return {
      add
  };
}

const connectedModalAgregar = connect(mapStateToProps)(ModalAgregarUf);
export { connectedModalAgregar as ModalAgregarUf };
 