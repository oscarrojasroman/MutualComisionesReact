import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button, ButtonGroup,ControlLabel,FormGroup,FormControl} from 'react-bootstrap';
import img from './../../img/mas.png';
import './Modal.css';
import { IoIosAdd, IoIosSave } from 'react-icons/io';
import { parametersActions } from '../../actions';
import { connect } from 'react-redux';

class ModalAgregar extends Component {

    constructor(props, context) {
        super(props, context);
        
        this.handleHide = this.handleHide.bind(this);
        this.state = {
          show: false,
          id: 0,
          workerMaximunAmount: 0,
          commissionFactor: 0,
          commissionGift : 0,  
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
          id: event.target.value
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
          const { id, workerMaximunAmount,commissionFactor,commissionGift } = this.state;
          const { dispatch } = this.props;
          if (id && workerMaximunAmount && commissionFactor && commissionGift) 
          {
              dispatch(parametersActions.add(id, workerMaximunAmount,commissionFactor,commissionGift));
              
          }   

      }

 
      render() {

        let addParametersBody = null;
        const { add } = this.props;
        const { workerMaximunAmount,commissionFactor,commissionGift,submitted }= this.state;        

        addParametersBody= 
           <FormGroup onSubmit={this.handleSubmit}>
                  <FormControl 
                  type="number" 
                  name ="workerMaximunAmount" 
                  placeholder="Cantidad de Trabajadores" 
                  className="formAgregar"
                  onChange={this.handleChange}/>
                  
                   {    
                     submitted && !workerMaximunAmount &&
                      <div className="help-block">La cantidad de Trabajadores es requerida</div>
                    }

                  <FormControl 
                  type="number" 
                  name="commissionFactor" 
                  placeholder="Porcentaje Comision"
                  className="formAgregar"
                  onChange={this.handleChange}/>
                   {    
                     submitted && !commissionFactor &&
                      <div className="help-block">El porcentaje de comision es requerido</div>
                    }

                  <FormControl 
                  type="number" 
                  name="commissionGift" 
                  placeholder="Porcentaje Premio" 
                  className="formAgregar"
                  onChange={this.handleChange}/>
                   {    
                     submitted && !commissionGift &&
                      <div className="help-block">El porcentaje de premio es requerido</div>
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
                    <option value="1" >Full Region</option>
                    <option value="2">Pyme</option>
                    <option value="3">Gestor Comercial</option>
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

const connectedModalAgregar = connect(mapStateToProps)(ModalAgregar);
export { connectedModalAgregar as ModalAgregar };
 