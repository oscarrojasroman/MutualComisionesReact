import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'react-tabs/style/react-tabs.css';
import './CargaDeDatos.css'
import { IoIosDocument, IoIosCloudUpload} from 'react-icons/io';
import { FilePond } from 'react-filepond';
import './filepound.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid className="wrapper">
        <Grid className="calculateTable">

          <div className="form-group">
            <div className="card-header color-secundary">
              <p className="p"><IoIosDocument /> CARGA DE ARCHIVOS</p>
            </div>
            <div>
              <br />
              <div className="divGroup">
                <IoIosCloudUpload className="iconCloud" />
                <FilePond className="cargaArchivos" labelIdle='Cargar Archivo Cotizacion.xlsx' 
                  server="http://localhost:5000/api/wwwroot/Comisiones" method="POST"/>
              </div>                
              <br />
              <div className="divGroup">
                <IoIosCloudUpload className="iconCloud"/>
                <FilePond className="cargaArchivos" labelIdle='Cargar Archivo Planta.xlsx' />
              </div>
              <br />
              <div className="divGroup">
                <IoIosCloudUpload className="iconCloud"/>
                <FilePond className="cargaArchivos" labelIdle='Cargar Archivo Ventas.xlsx' />
              </div>
              <br />
              <div className="divGroup">
                <IoIosCloudUpload className="iconCloud"/>
                <FilePond className="cargaArchivos" labelIdle='Cargar Archivo Referidos.xlsx' />
              </div>
              <br />

            </div>
          </div>     
                 <button className="btn btn-add-file p">Validar Archivos</button>


        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);