import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'react-tabs/style/react-tabs.css';
import './CargaDeDatos.css'
import { IoIosDocument, IoIosCloudUpload } from 'react-icons/io';
import { FilePond, File, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
                      <p className="p"><IoIosDocument/> CARGA DE ARCHIVOS</p>
                    </div>
                    <div>
                      <br/>
                       <FilePond allowMultiple={true} maxFiles={1} className="cargaArchivos" />
                      <br/>
                        <FilePond allowMultiple={true} maxFiles={1} className="cargaArchivos"/>
                      <br/>
                        <FilePond allowMultiple={true} maxFiles={1} className="cargaArchivos"/>
                      <br/>
                        <FilePond allowMultiple={true} maxFiles={1} className="cargaArchivos"/>
                      <br/>
                      
                    </div>                  
                    <button className="btn btn-add-file p">Validar Archivos</button>
                </div>
          
        </Grid>       
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);