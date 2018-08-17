import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import News from './components/News/News';
import Navbar from './components/NavBar/CustomNavbar';
import Login from "./components/Login/Login";
import Cotizacion from './components/Cotizaciones';
import Calcular from './containers/Calcular';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/login" component={Login} />
          <Route path="/cotizacion" component={Cotizacion} />
          <Route path="/calcular" component={Calcular} />
          

        </div>
      </Router>
    );
  }
}

export default App;
