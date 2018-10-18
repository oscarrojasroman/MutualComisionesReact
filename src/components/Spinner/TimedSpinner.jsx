import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import 'font-awesome/css/font-awesome.css';


export default class TimedSpinner extends Component{

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      initialTimerMilliseconds: (!!props.initialTimerMilliseconds) ? props.initialTimerMilliseconds : 2000,
      timeoutTimerMilliseconds: (!!props.timeoutTimerMilliseconds) ? props.timeoutTimerMilliseconds : 7000,
      timeoutMessage: (!!this.props.children) ? (<div>{this.props.children}</div>) : (<div>Timeout</div>),
      content: (<i className="fa fa-circle-o-notch fa-spin" style={{'fontSize': '18px'}}/>),
    }
    this.initialTimer = null
  }

 //       content: (!!this.props.children) ? this.props.children : (<div>Timeout</div>),

  componentDidMount = () => {
    this.initialTimer = setTimeout(() => {
      this.setState({
        visible: true,
        content: (<i className="fa fa-circle-o-notch fa-spin" style={{'fontSize': '18px'}}/>),
      })}, this.state.initialTimerMilliseconds)
    this.timeoutTimer = setTimeout(() => {
      this.setState({
        visible: true,
        content: this.state.timeoutMessage,
      })}, this.state.timeoutTimerMilliseconds)
  }

  componentWillUnmount() {
    clearTimeout(this.initialTimer)
    clearTimeout(this.timeoutTimer)
   }

  render() {
    console.log(this.state, this.props)
    console.log(this.state.content)
    return (!!this.state.visible) ? this.state.content : null
  }
}