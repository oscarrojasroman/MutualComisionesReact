import React, { Component } from 'react'
import './Home.css';
import img from '../../img/bienvenido.png';


export default class Home extends Component {
  render() {
    return (
     <div>
       <img src={img} alt="Welcome" className="welcome"></img>
     </div>
    )
  }
}
