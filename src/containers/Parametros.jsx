import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TablaPyme2 from '../components/Tablas/TablaPyme2';
import TablaFullRegion2 from '../components/Tablas/TablaFullRegion2';
import TablaGestorComercial2 from '../components/Tablas/TablaGestorComercial2';
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
          
          <Tabs>
            <TabList className="card-header1 p"> 
            <ul className="nav-justified">         
              <Tab className="tab">RANGOS</Tab>
              <Tab className="tab">UF</Tab>
              <Tab className="tab">TOPE</Tab>
            </ul> 
            </TabList>

            <TabPanel>
              <div className="t2 ">
                <TablaPyme2/>
              </div>
              <div className="t">
                <TablaFullRegion2 />
              </div>              
              <div className="t">
                <TablaGestorComercial2/>
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
          
        </Grid>       
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);