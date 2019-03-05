import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';
import PropTypes from 'prop-types'

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    // reset login status

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearFiedErrors() {
    if(this.state.submitted) {
      this.setState({ submitted: false });
    }
  }

  handleUsernameChange(e) {
    this.clearFiedErrors();

    this.setState({ username: e.target.value });
  }

  handlePasswordChange (e) {
    this.clearFiedErrors();

    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state

    if (username && password) {
      this.props.OnLoginUser();
    }

  }

  render() {
    const { username, password, submitted } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form">
          <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control username" name="username" onChange={this.handleUsernameChange} />
            {submitted && !username &&
              <div className="help-block">Username is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" onChange={this.handlePasswordChange} />
            {submitted && !password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
            <Link to="/register"> <button className="btn btn-link">Register</button></Link>

          </div>
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.object.isRequired
}

 const  mapStateToProps = (state) => {
   const { alert } = state;
   return {
     alert
   };
 }

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPage));

export { LoginPageContainer as TestLoginPage };
