import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from './PrivateRoute.js';
import { HomePage } from './components/HomePage';
import { LoginPageContainer } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <PrivateRoute exact path='/' component={HomePage} />
        <Route path="/login" component={LoginPageContainer} />
        <Route path="/register" component={RegisterPage} />
      </div>
    );
  }
}

export default withRouter(App);
