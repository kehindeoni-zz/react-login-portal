import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';
import PropTypes from 'prop-types';
import AuthPage from './AuthPage';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(username, password) {
    if (username && password) {
      this.props.OnLoginUser(username, password);
    }
  }

  render() {
    const { error, loggingIn } = this.props;

    let props = {
      buttonText: 'Login',
      pageText: 'Login',
      linkText: 'Register',
      loggingInText: 'Logging In',
      loggingIn: loggingIn,
      error: error,
      link: '/register'
    }

    return <AuthPage onHandleSubmit={this.handleSubmit} dataProps={props} />;
  }
}

LoginPage.propTypes = {
  history: PropTypes.object.isRequired
}

const  mapStateToProps = (state) => {
  const { alert, authentication } = state;
  return {
    error: authentication.error,
    loggingIn: authentication.loggingIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    OnLoginUser: (username, password) => dispatch(userActions.login(username, password))
  }
}

export const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPage));

export { LoginPageContainer as TestLoginPage };
