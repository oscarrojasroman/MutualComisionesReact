import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import './Tablas.css';

class TablaFullRegion extends Component {
    render() {
        return (
            <div>
                 <Table responsive className="tabla">
                 <caption className="caption">FULL REGION</caption>
                <thead>
                  <tr>
                    <th>Tramo</th>
                    <th>Cantidad Trabajadores</th>
                    <th>Comision</th>
                    <th>Premio</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>10</td>
                    <td>0.17</td>
                    <td>0</td>                   
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>50</td>
                    <td>0.17</td>
                    <td>0.2</td>                   
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>100</td>
                    <td>0.17</td>
                    <td>0.18</td>                  
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>300</td>
                    <td>0.18</td>
                    <td>0.24</td>                  
                  </tr>
                </tbody>
              </Table>             
            </div>
        );
    }
}

TablaFullRegion.propTypes = {

};

export default TablaFullRegion;