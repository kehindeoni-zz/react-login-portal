import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute.js';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { LoginPageContainer } from './components/LoginPage';
import { RegisterPageContainer } from './components/RegisterPage';

export class App extends React.Component  {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <PrivateRoute exact path='/' component={HomePage} />
            <Route exact path="/login" component={LoginPageContainer} />
            <Route exact path="/register" component={RegisterPageContainer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
