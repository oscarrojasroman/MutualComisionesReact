import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomNavbar from '../NavBar/CustomNavbar';
import SideBar2 from '../SideBar/SideBar2';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
     null
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <div>
        <CustomNavbar/>
        <SideBar2/>
      </div>
    );
  }

  return null;
};

class Header extends Component {
  render() {
    return (
    <div>   
        <LoggedOutView currentUser={this.props.currentUser} />
        <LoggedInView currentUser={this.props.currentUser} />
      </div>      
    );
  }
}

export default Header;
