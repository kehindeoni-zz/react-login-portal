import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';
import AuthPage from './AuthPage';

export class RegisterPage extends Component {
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
      buttonText: 'Register',
      pageText: 'Register',
      linkText: 'Cancel',
      loggingInText: 'Signing Up',
      loggingIn: loggingIn,
      error: error,
      link: '/login'
    }

    return <AuthPage onHandleSubmit={this.handleSubmit} dataProps={props} />;
  }
}

// complete the below function
function mapStateToProps(state) {

}


export { RegisterPage as TestRegisterPage };


