import React, {Component } from 'react';
import { connect } from 'react-redux';

import { userActions, alertActions } from '../actions';
import PropTypes from 'prop-types';
import AuthPage from './AuthPage';

export class TestRegisterPage extends Component {
  static propTypes = {
    alertMessage: PropTypes.string.isRequired,
    alertType: PropTypes.string.isRequired,
    clearAlert: PropTypes.func,
    onRegisterUser: PropTypes.func
  }
  
  static defaultProps = {
    alertMessage: "",
    alertType: "",
    clearAlert: () => {},
    onRegisterUser: () => {}
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearAlert = this.clearAlert.bind(this);
  }

  componentDidMount() {
    this.clearAlert();
  }

  handleSubmit(username, password) {
    if (username && password) {
      this.props.onRegisterUser(username, password);
    }
  }

  clearAlert() {
    this.props.clearAlert && this.props.clearAlert();
  }

  render() {
    const { alertMessage, alertType } = this.props;
    let props = {
      buttonText: 'Register',
      pageText: 'Register',
      linkText: 'Cancel',
      alertMessage: alertMessage,
      alertType: alertType,
      link: '/login'
    }

    return <AuthPage onHandleSubmit={this.handleSubmit} clearAlert={this.clearAlert} dataProps={props} />;
  }
}

const mapStateToProps = (state) => {
  const { alert } = state;
  return {
    alertMessage: alert.message,
    alertType: alert.type
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRegisterUser: (username, password) => dispatch(userActions.register(username, password)),
    clearAlert: () => dispatch(alertActions.clear())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestRegisterPage);
