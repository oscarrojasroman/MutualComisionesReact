import React, { Component } from 'react';


class CargaDeDatos extends Component {
    render() {
        

        return (            
               <div class="form-group">
                    <label>Carga de Archivos XLS</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                    <input type="file" class="form-control-file" id="exampleFormControlFile2"/>
                    <input type="file" class="form-control-file" id="exampleFormControlFile3"/>
                    <input type="file" class="form-control-file" id="exampleFormControlFile4"/>
                </div>
            
        );
    }
}

CargaDeDatos.propTypes = {

};

export default CargaDeDatos;