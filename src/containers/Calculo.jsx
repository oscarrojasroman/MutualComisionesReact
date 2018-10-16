import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'react-tabs/style/react-tabs.css';
import './Calcular.css';
import Tablas from '../components/Tablas/Tablas';
import { IoIosCalculator } from 'react-icons/io';


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
      <Grid className="wrapper3">
        <Grid className="tableCalculos" >
           <div className="card-header1 color-secundary">
               <p className="p titleTable"><IoIosCalculator/> CÁLCULO</p>
            </div>
              <Tablas/>
        </Grid>       
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);