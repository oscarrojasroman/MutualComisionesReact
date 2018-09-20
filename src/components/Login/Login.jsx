import React, { Component } from "react";
import "./Login.css";
import logo from "./../../img/logo.png";
import { connect } from 'react-redux';
import { userActions } from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);

     // reset login status
    this.props.dispatch(userActions.logout());


    this.state = {
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
        dispatch(userActions.login(email, password));
         
    }

   
}

  render() {
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
    return (      
      <div className="col-md-6 col-md-offset-3">
      <img src={logo} className="logo2" />
          <h2>Login</h2>
          <form name="form" onSubmit={this.handleSubmit}>
              <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                  <label>email</label>
                  <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
                  {submitted && !email &&
                      <div className="help-block">Email is required</div>
                  }
              </div>
              <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                  <label>Password</label>
                  <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                  {submitted && !password &&
                      <div className="help-block">Password is required</div>
                  }
              </div>
              <div className="form-group">
                  <button className="btn btn-primary">Login</button>
                  {
                      loggingIn                      
                  }
              </div>
          </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
      loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login }; 