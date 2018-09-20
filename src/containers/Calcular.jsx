import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabla from './../components/Tablas/Tablas';
import CargaDeDatos from './../components/Datos/CargaDeDatos';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TablaPyme from '../components/Tablas/TablaPyme';
import TablaFullRegion from '../components/Tablas/TablaFullRegion';
import TablaGestorComercial from '../components/Tablas/TablaGestorComercial';


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
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>    
            <h2>App Comisiones Automaticas</h2>     
          </Paper>                 
        </Grid>        
        <Grid item xs={4} >
                  
          <Paper className={classes.paper}>            
            <CargaDeDatos/>            
          </Paper>
        </Grid>
        <Grid item xs={8} >
          <Paper className={classes.paper}>
          <Tabs>
            <TabList>              
              <Tab>Tabla de datos</Tab>
              <Tab>Pyme</Tab>
              <Tab>Full Region</Tab>
              <Tab>Gestor Comercial</Tab>
            </TabList>

            <TabPanel>
             <Tabla/>
            </TabPanel>
            <TabPanel>
            <TablaPyme/>
            </TabPanel>
            <TabPanel>
            <TablaFullRegion/>
            </TabPanel>
            <TabPanel>
            <TablaGestorComercial/>
            </TabPanel>
          </Tabs>           
          </Paper>
        </Grid>       
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);