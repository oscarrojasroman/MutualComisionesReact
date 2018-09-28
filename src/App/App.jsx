import React, { Component } from 'react';
import './App.css';
import { Router, Route} from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import News from '../components/News/News';
import Navbar from '../components/NavBar/CustomNavbar';
import { Login } from '../components/Login';
import Cotizacion from '../components/Cotizaciones';
import Calcular from '../containers/Calcular';
import Calcular2 from '../containers/Calcular2';
import {PrivateRoute }  from '../components/PrivateRoute/PrivateRoute';
import { alertActions } from '../actions';
import { history } from '../helpers';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SideBar2 from '../components/SideBar/SideBar2';
import CargaDeDatos from '../components/Datos/CargaDeDatos';
import { APP_LOAD , REDIRECT} from '../constants/actionTypes';
import agent from '../reducers/agent';
import { store } from '../reducers/store';


const mapStateToProps = state => {
  const { alert } = state;
  return {
    alert
  }
};

const mapDispatchToProps = dispatch => ({
  onLoad:(payload, token) =>
    dispatch({ type:APP_LOAD,  payload, token, skipTraking: true }),
  onRedirect:() =>
    dispatch({type:REDIRECT})
});

class App extends Component {
  constructor(props) {
    super(props);

   
} 

  componentWillReceiveProps(nextProps){
    if(nextProps.redrectTo){
      store.dispatch(push(nextProps.redrectTo));
      this.props.onRedirect()
    }
  }

  componentWillMount(){
    const token = window.localStorage.getItem('jwt');
    if(token){
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() :null, token);
  }

  render() {
    const { alert } = this.props;
   
        return (      
                    <div className="grid responsive" >                    
                    <Router history={history}>
                      <div>
                          <Navbar/>                      
                          <SideBar2 />
                          <PrivateRoute exact path="/" component={Home} />
                          <PrivateRoute path="/about" component={About} />
                          <PrivateRoute path="/news" component={News} />                        
                          <PrivateRoute path="/cotizacion" component={Cotizacion} />
                          <PrivateRoute path="/parametros" component={Calcular} />
                          <PrivateRoute path="/calcular" component={Calcular2} />
                          <PrivateRoute path="/cargadearchivos" component={CargaDeDatos} />
                          <PrivateRoute path="/reporte"/>
                          <Route path="/login" component={Login} />
 
                        
                               
                      </div>  
                                      
                    </Router>
                    {
                          alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                  </div>
        );
  }
}




const connectedApp = connect(mapStateToProps,mapDispatchToProps)(App);
export  { connectedApp as App };
