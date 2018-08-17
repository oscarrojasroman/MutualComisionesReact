import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Table} from 'react-bootstrap';
import { Button, Glyphicon } from 'react-bootstrap';

class TablaGestorComercial extends Component {
    render() {
        return (
            <div>
                 <Table responsive>
                <thead>
                  <tr>
                    <th>Tramo</th>
                    <th>Cantidad Trabajadores</th>
                    <th>UF</th>
                    <th>UFcita</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>1-10</td>
                    <td>0.18</td>
                    <td>0</td>                   
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>11-50</td>
                    <td>0.18</td>
                    <td>0.2</td>                   
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>51-100</td>
                    <td>0.18</td>
                    <td>0.18</td>                  
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>101-300</td>
                    <td>0.18</td>
                    <td>0.24</td>                  
                  </tr>
                </tbody>
              </Table>             
            </div>
        );
    }
}

TablaGestorComercial.propTypes = {

};

export default TablaGestorComercial;