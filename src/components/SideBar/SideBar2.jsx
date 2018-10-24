import React, { Component } from 'react';
import './SideBar.css';
import { IoIosArrowForward, IoIosHome, IoIosDocument, IoIosBuild, IoIosCalculator, IoIosClipboard } from 'react-icons/io';
import PopOver from './../PopOver/PopOver';
class SideBar2 extends Component {
    render() {
        return (        
                          
                <div className="ul">
                    <div className="MenuAside-title-box">
                        <p className="MenuAside-title">MENÚ</p>
                    </div>
                    <div>
                    <li className='li MenuAside-options-list-item'><a className="a" href="/"><IoIosHome/>Home   <IoIosArrowForward/></a></li>
                    <li className='li MenuAside-options-list-item'><a className="a" href="/Cargadearchivos"><IoIosDocument/>Carga de Archivos   <IoIosArrowForward/></a></li>
                    <li className='li MenuAside-options-list-item'><a className="a" href="/Parametros"><IoIosBuild/>Parametrizacion   <IoIosArrowForward/></a></li>
                    <li className='li MenuAside-options-list-item'><a className="a" href="/Calcular"><IoIosCalculator/>Calcular  <IoIosArrowForward/></a></li>
                    <li className='li MenuAside-options-list-item'><a className="a" href="/Reporte"><IoIosClipboard/>Reporte   <IoIosArrowForward/></a></li>
                    <PopOver/>
                    </div>                   
               
                
            </div>
        );
    }
}

SideBar2.propTypes = {

};

export default SideBar2;
