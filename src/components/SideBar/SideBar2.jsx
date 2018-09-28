import React, { Component } from 'react';
import './SideBar.css';
import { IoIosArrowForward } from 'react-icons/io';

class SideBar2 extends Component {
    render() {
        return (        
            <div>                
                <ul className="ul">
                    <div className="MenuAside-title-box">
                        <p className="MenuAside-title">MENÚ</p>
                    </div>
                    <li className='li MenuAside-options-list-item'><a className="a" href="/">Home   <IoIosArrowForward/></a></li>
                    <li className='li MenuAside-options-list-item'><a className="a" href="/Cargadearchivos">Carga de Archivos   <IoIosArrowForward/></a></li>
                    <li className='li MenuAside-options-list-item'><a className="a" href="/Parametros">Parametrizacion   <IoIosArrowForward/></a></li>
                    <li className='li MenuAside-options-list-item'><a className="a" href="/Calcular">Calculo   <IoIosArrowForward/></a></li>
                    <li className='li MenuAside-options-list-item'><a className="a" href="/Reporte">Reporte   <IoIosArrowForward/></a></li>
                </ul>
                
            </div>
        );
    }
}

SideBar2.propTypes = {

};

export default SideBar2;
