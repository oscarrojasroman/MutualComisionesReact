import React, { Component } from 'react';
//import {Table} from 'react-bootstrap';
import { Button, Glyphicon } from 'react-bootstrap';

class Tablas extends Component {
    render() {
        return (
            <div>
              {/*  <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Razón Social</th>
                    <th>N° Contrato</th>
                    <th>N° de Trabajadores</th>
                    <th>Macrosegmento</th>
                    <th>RUT Vendedor</th>
                    <th>RUT Supervisor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>OCRE SPA</td>
                    <td>272606</td>
                    <td>1</td>
                    <td>PYME</td>
                    <td>15480963-5</td>
                    <td>12153853-9</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>SERVICIOS INTEGRALES CACCIUTTOLO LTDA</td>
                    <td>277488</td>
                    <td>182</td>
                    <td>Coorporativo</td>
                    <td>14449517-9</td>
                    <td>8871593-4</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>SOCIEDAD TECHOS VIENTO PUELCHE LIMITADA</td>
                    <td>279829</td>
                    <td>52</td>
                    <td>PYME</td>
                    <td>15624875-5</td>
                    <td>9854623-3</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>SERVICIOS Y PROYECTOS AMBIENTALES S.A.</td>
                    <td>265884</td>
                    <td>30</td>
                    <td>PYME</td>
                    <td>13654846-5</td>
                    <td>10254689-1</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>YASNA PAOLA MALDONADO VASQUEZ</td>
                    <td>225465</td>
                    <td>1</td>
                    <td>Trabajador Independiente</td>
                    <td>14258695-9</td>
                    <td>12548958-3</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>HERESMANN Y SOLARI LIMITADA</td>
                    <td>254987</td>
                    <td>14</td>
                    <td>PYME</td>
                    <td>13654987-5</td>
                    <td>10654347-5</td>
                  </tr>
                </tbody>
              </Table>*/}
              <Button className="btn btn-primary button" bsSize="large" block>
              <Glyphicon glyph=" glyphicon glyphicon-play" /> 
                 Ejecutar Comision
              </Button>
              <Button className="btn btn-primary button" bsSize="large" block>
              <Glyphicon glyph=" glyphicon glyphicon-play" /> 
                 Ejecutar Veda
              </Button>
            </div>
        );
    }
}

Tablas.propTypes = {

};

export default Tablas;