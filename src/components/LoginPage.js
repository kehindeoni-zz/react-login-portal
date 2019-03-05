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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
  }

  handleSubmit(e) {

  }

  render() {
    const { username, password, submitted } = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form">
          <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control username" name="username" />
            {submitted && !username &&
              <div className="help-block">Username is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password"/>
            {submitted && !password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-group">
            <Link to="/login"><button className="btn btn-primary">Login</button></Link>
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
