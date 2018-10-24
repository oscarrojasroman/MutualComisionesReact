import React, { Component } from 'react';
import { Popover,OverlayTrigger} from 'react-bootstrap';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import './PopOver.css';

const popoverBottom = (
    <Popover id="popover-positioned-bottom" title="Valor Uf">
      <strong>Valor UF!</strong> $28764
    </Popover>
  );

class PopOver extends Component {
    render() {
        return (
            <div>
                <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom} >
                  <IoIosHelpCircleOutline className="pop"/>
                </OverlayTrigger>   
            </div>
        );
    }
}

PopOver.propTypes = {

};

export default PopOver;