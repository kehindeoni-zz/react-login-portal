import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const userActions = {
    login,
    logout,
    register
};

function loginRequest() { return { type: userConstants.LOGIN_REQUEST }; }
  // function loginRequestSuccess(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function loginFailure(error) { return { type: userConstants.LOGIN_FAILURE, error } }

function login(username, password) {
  return dispatch => {
    dispatch(loginRequest());
    userService.login(username, password).then( response => {
      //handle successful login
    }).catch(error => {
      dispatch(loginFailure(error));
    });
  };
}

function logout() {
    // complete this function
}

function register(user) {
  // return the promise using fetch which dispatches appropriately

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user }; }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user }; }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error }; }
}

