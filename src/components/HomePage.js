import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.handleLogout && this.props.handleLogout();
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2 align="center">Welcome! You have successfully logged in.</h2>
        <p align="center">
          <Link to='/login'> <button className="btn btn-link" onClick={this.handleLogout()}>Logout</button></Link>
        </p>
      </div>
    );
  }
}

const  mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => dispatch(userActions.logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
