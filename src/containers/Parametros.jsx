import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TablaPyme from '../components/Tablas/TablaPyme';
import TablaFullRegion from '../components/Tablas/TablaFullRegion';
import TablaGestorComercial from '../components/Tablas/TablaGestorComercial';
import TablaUf from '../components/Tablas/TablaUf';
import './Calcular.css';
import TablaTope from '../components/Tablas/TablaTope';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (

  <div className={classes.root}>   
      <Grid className="wrapper">
        <Grid className="calculateTable1" >
          <Paper className={classes.paper}>
          <Tabs>
            <TabList className="card-header p"> 
            <ul className="nav-justified">         
              <Tab className="tab">RANGOS</Tab>
              <Tab className="tab">UF</Tab>
              <Tab className="tab">TOPE</Tab>
            </ul> 
            </TabList>

            <TabPanel>
              <div className="t2 t">
                <TablaPyme/>
              </div>
              <div className="t">
                <TablaFullRegion />
              </div>              
              <div className="t">
                <TablaGestorComercial/>
              </div>
              
            </TabPanel>

            <TabPanel>
              <div className="tUf">
               <TablaUf/>
              </div>
            </TabPanel>
            <TabPanel>
              <TablaTope/>
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