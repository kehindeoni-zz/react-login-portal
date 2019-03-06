import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userActions, alertActions } from '../actions';
import PropTypes from 'prop-types';
import AuthPage from './AuthPage';

export class TestLoginPage extends Component {
  static propTypes = {
    alertMessage: PropTypes.string.isRequired,
    alertType: PropTypes.string.isRequired,
    clearAlert: PropTypes.func,
    onLoginUser: PropTypes.func
  }
  
  static defaultProps = {
    alertMessage: "",
    alertType: "",
    clearAlert: () => {},
    onLoginUser: () => {}
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearAlert = this.clearAlert.bind(this);
  }

  componentDidMount() {
    this.clearAlert();
  }

  clearAlert() {
    this.props.clearAlert && this.props.clearAlert();
  }

  handleSubmit(username, password) {
    if (username && password) {
      this.props.onLoginUser(username, password);
    }
  }

  render() {
    const { alertMessage, alertType } = this.props;

    let props = {
      buttonText: 'Login',
      pageText: 'Login',
      linkText: 'Register',
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestLoginPage);

