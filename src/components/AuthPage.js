import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';
import PropTypes from 'prop-types'

class AuthPage extends Component {
  constructor(props) {
    super(props);

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

    const { username, password } = this.state;

    this.props.onHandleSubmit(username, password);
  }

  buttonText() {
    const { buttonText, fetching, fetchingText } = this.props.dataProps;
    return fetching ? fetchingText : buttonText;
  }

  render() {
    const { username, password, submitted } = this.state;
    const { error, pageText, linkText, link } = this.props.dataProps;

    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>{ pageText }</h2>
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
          { error &&
            <div className="alert alert-danger" role="alert">{error}</div>
          }
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.handleSubmit}>{this.buttonText()}</button>
            <Link to={link}> <button className="btn btn-link">{linkText}</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

export default AuthPage;
