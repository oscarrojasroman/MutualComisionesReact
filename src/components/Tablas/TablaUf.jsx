import React, { Component } from 'react';
import { tableActions } from '../../actions/table.actions';

class TablaUf extends Component {
   componentDidMount()
   {
       this.props.dispatch(tableActions.getUf());
   }
    render() {
        const { ufs } = this.props;
        return (
            <div>
                <tbody>
                    <tr>
                        <td>{ufs.value}</td>
                        <td>{ufs.date}</td>
                    </tr>
                    
                </tbody>
                
            </div>
        );
    }
}

TablaUf.propTypes = {

};

export default TablaUf;
