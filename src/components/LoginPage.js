import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, alertActions } from '../actions';
import PropTypes from 'prop-types';
import AuthPage from './AuthPage';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearAlert = this.clearAlert.bind(this);
  }

  componentDidMount() {
    this.clearAlert();
  }

  clearAlert() {
    this.props.clearAlert();
  }

  handleSubmit(username, password) {
    if (username && password) {
      this.props.onLoginUser(username, password);
    }
  }

  render() {
    const { alertMessage, fetching, alertType } = this.props;

    let props = {
      buttonText: 'Login',
      pageText: 'Login',
      linkText: 'Register',
      fetchingText: 'Logging In',
      alertMessage: alertMessage,
      alertType: alertType,
      link: '/register'
    }

    return <AuthPage onHandleSubmit={this.handleSubmit} clearAlert={this.clearAlert} dataProps={props} />;
  }
}

const  mapStateToProps = (state) => {
  const { alert } = state;

  return {
    alertMessage: alert.message,
    alertType: alert.type
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUser: (username, password) => dispatch(userActions.login(username, password)),
    clearAlert: () => dispatch(alertActions.clear())
  }
}

export const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

export { LoginPageContainer as TestLoginPage };
