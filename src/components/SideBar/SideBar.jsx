import React, { Component } from 'react';
import { bubble as Menu } from "react-burger-menu";
import './SideBar.css';

class SideBar extends Component {
    render() {
        return (
            <div>
                 <Menu>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>

                 </Menu>
            </div>
        );
    }
}

SideBar.propTypes = {

};

export default SideBar;