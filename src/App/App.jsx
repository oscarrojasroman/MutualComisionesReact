import React, { Component } from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Navbar from '../components/NavBar/CustomNavbar';
import { Login } from '../components/Login';
import Calcular from '../containers/Parametros';
import Calculo from '../containers/Calculo';
import {PrivateRoute }  from '../components/PrivateRoute/PrivateRoute';
import { history } from '../helpers';
import { connect } from 'react-redux';
import SideBar2 from '../components/SideBar/SideBar2';
import CargaDeDatos from '../components/CargaDeDatos/CargaDeDatos';
import { APP_LOAD , REDIRECT } from '../constants/actionTypes';



const mapStateToProps = ( state )=> {
  const { alert } = state;
  return {
    alert,
    loggedIn: state.authentication.loggedIn

  }
};

const mapDispatchToProps = dispatch => ({
  onLoad:(payload, token) =>
    dispatch({ type:APP_LOAD,  payload, token, skipTraking: true }),
  onRedirect:() =>
    dispatch({type:REDIRECT})
});

class App extends Component {

  render() {
    const { alert } = this.props;
    const { loggedIn } = this.props;
    if(loggedIn === true )
    {
      return (      
        <div className="grid" >                    
        <Router history={history}>
          <div>                            
                <Navbar />                      
                <SideBar2 />                     
                <PrivateRoute exact path="/" component={Home} />                     
                <PrivateRoute path="/parametros" component={Calcular} />
                <PrivateRoute path="/calcular" component={Calculo} />
                <PrivateRoute path="/cargadearchivos" component={CargaDeDatos} />
                <PrivateRoute path="/#"/>
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
        return (      
                            
                            <Route path="/" component={Login} />                               
                     
                  
        );
  }
}




const connectedApp = connect(mapStateToProps,mapDispatchToProps)(App);
export  { connectedApp as App };
