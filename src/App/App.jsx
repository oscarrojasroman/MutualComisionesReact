import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import News from '../components/News/News';
import Navbar from '../components/NavBar/CustomNavbar';
import { Login } from '../components/Login';
import Cotizacion from '../components/Cotizaciones';
import Calcular from '../containers/Calcular';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import { alertActions } from '../actions';
import { history } from '../helpers';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
}

  render() {
    const { alert } = this.props;
    return (      
                  <div>                      
                    <Router history={history}>
                      <div>
                      
                        <Navbar />
                        <PrivateRoute exact path="/" component={Home} />
                        <PrivateRoute path="/about" component={About} />
                        <PrivateRoute path="/news" component={News} />
                        <Route path="/login" component={Login} />
                        <PrivateRoute path="/cotizacion" component={Cotizacion} />
                        <PrivateRoute path="/calcular" component={Calcular} />     
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

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export  { connectedApp as App };
