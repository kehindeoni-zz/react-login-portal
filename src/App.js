import React, { Component } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from './PrivateRoute.js';
import { history } from './helpers';
import { alertActions } from './actions';
import { HomePage } from './components/HomePage';
import { LoginPageContainer } from './components/LoginPage';
import { RegisterPageContainer } from './components/RegisterPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginPage: true,
      showRegisterPage: props.showRegisterPage
    };
  }

  render() {
    return (
      <div className="container">
        <Switch>
          <PrivateRoute exact path='/' component={HomePage} />
          <Route path="/login" component={LoginPageContainer} />
          <Route path="/register" component={RegisterPageContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
// { App as App };
