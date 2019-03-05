import React, {Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';
import PropTypes from 'prop-types';
import AuthPage from './AuthPage';

export class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(username, password) {
    if (username && password) {
      this.props.onRegisterUser(username, password);
    }
  }

  render() {
  	// console.log(history, 'ddhhdh')
    const { error, fetching } = this.props;
    let props = {
      buttonText: 'Register',
      pageText: 'Register',
      linkText: 'Cancel',
      fetchingText: 'Signing Up',
      fetching: fetching,
      error: error,
      link: '/login'
    }

    return <AuthPage onHandleSubmit={this.handleSubmit} dataProps={props} />;
  }
}

RegisterPage.propTypes = {
  history: PropTypes.object.isRequired
}

const  mapStateToProps = (state) => {
  const { alert, authentication } = state;
  return {
    error: authentication.error,
    fetching: authentication.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRegisterUser: (username, password) => dispatch(userActions.register(username, password))
  }
}

export const RegisterPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RegisterPage));

export { RegisterPageContainer as TestRegisterPage };
