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
import { IoIosShuffle, IoIosCash, IoIosHand,IoIosSave } from 'react-icons/io';
import TablaMinTrab from '../components/Tablas/TablaMinTrab';
import TablaMeses from '../components/Tablas/TablaMeses';

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
      <Grid className="wrapper3">
        <Grid className="calculateTable1" >
          
          <Tabs>
            <TabList className="card-header1"> 
            <ul className="nav-justified nav1">         
              <Tab className="tab"><IoIosShuffle/> RANGOS</Tab>
              <Tab className="tab"><IoIosCash/>METAS</Tab>
              <Tab className="tab"><IoIosHand/>UF</Tab>
              <Tab className="tab"><IoIosShuffle/>GENERALES</Tab>
              <Tab className="tab"><IoIosCash/> G.CUENTAS</Tab>
              <Tab className="tab"><IoIosHand/>VEDA</Tab>
            </ul> 
            </TabList>            
            {/* TAB RANGOS */}
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

            {/* TAB METAS */}
              <TabPanel>
              <div className="tUf">
                <TablaMinTrab/>
                </div>
              </TabPanel>

            {/* TAB UF*/}
              <TabPanel>
                <div className="tUf">
                <TablaUf/>
                </div>
              </TabPanel>

              {/* TAB GENERAL*/}
              <TabPanel>
                <div className="tUf">
                <TablaTope/>
                <TablaMeses/>
                </div>
              </TabPanel>

              {/* TAB GRANDES CUENTAS*/}
              <TabPanel>
                <div className="tUf">
                <TablaUf/>
                </div>
              </TabPanel>

              {/* TAB VEDA*/}
              <TabPanel>
                <div className="tUf">
                <TablaUf/>
                </div>
              </TabPanel>
             
          </Tabs> 
          <button className="btn btn-add-file1"><IoIosSave/>  Guardar Cambios</button>      
          <button className="btn btn-add-file1"><IoIosSave/>  Guardar Cambios</button>
        </Grid> 
            
      </Grid>
      
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);