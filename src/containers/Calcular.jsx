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
import './Calcular.css';

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
        <Grid className="calculateTable" >
          <Paper className={classes.paper}>
          <Tabs>
            <TabList className="card-header p">           
              <Tab>Pyme</Tab>
              <Tab>Full Region</Tab>
              <Tab>Gestor Comercial</Tab>
            </TabList>

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