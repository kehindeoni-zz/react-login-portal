import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute.js';
import HomePage from './components/HomePage';
import LoginPageContainer from './components/LoginPage';
import RegisterPageContainer from './components/RegisterPage';

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
            <Route path="/login" component={LoginPageContainer} />
            <Route path="/register" component={RegisterPageContainer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
