import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button, ButtonGroup,ControlLabel,FormGroup,FormControl} from 'react-bootstrap';
import img from './../../img/mas.png';
import './Modal.css';
import { IoIosAdd } from 'react-icons/io';
import { parametersActions } from '../../actions';
import { connect } from 'react-redux';


class ModalAgregar extends Component {

    constructor(props, context) {
        super(props, context);
        
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

 
        this.handleHide = this.handleHide.bind(this);
        this.state = {
          date: date,
          show: false,
          sellerType: "",
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
          const { sellerType, workerMaximunAmount,commissionFactor,commissionGift } = this.state;
          const { dispatch } = this.props;
          if (sellerType && workerMaximunAmount && commissionFactor && commissionGift) 
          {
              dispatch(parametersActions.add(sellerType, workerMaximunAmount,commissionFactor,commissionGift));
          }   
      }

 
      render() {

        let addParametersBody = null;
        const { add } = this.props;
        const { workerMaximunAmount,commissionFactor,commissionGift,submitted }= this.state;        

        if(this.state.result === "Full Region" || this.state.result ==="Pyme" || this.state.result ==="Gestor Comercial")
        {

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

        }       
        else if (this.state.result ==="UF")
        {
          addParametersBody = <FormGroup >
                  <FormControl type="date" placeholder="Fecha" className="formAgregar" defaultValue={this.state.date}/>
                  <FormControl type="number" placeholder="Valor" className="formAgregar"/>
                </FormGroup>;
        }

        
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
                <img src={img} alt="check" className="checkResultado mas"/>
                <div id="contained-modal-title " className="center">
                 Agregar
                </div>
                
              </Modal.Header>

              <Modal.Body>

              <FormGroup controlId="formControlsSelect" >
                <ControlLabel>Seleccione Parametro</ControlLabel>
                <FormControl componentClass="select" placeholder="select" onClick={this.handleSelectChange}>
                    <option value="Full Region" >Full Region</option>
                    <option value="Pyme">Pyme</option>
                    <option value="Gestor Comercial">Gestor Comercial</option>
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
                      {add}                                     
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
 