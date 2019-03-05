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
function loginFailure(error) { return { type: userConstants.LOGIN_FAILURE, error }; }
function registerRequest() { return { type: userConstants.REGISTER_REQUEST }; }
  // function registerSuccess(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
function registerFailure(error) { return { type: userConstants.REGISTER_FAILURE, error }; }

function login(username, password) {
  return dispatch => {
    dispatch(loginRequest());
    userService.login(username, password).then( response => {
      dispatch(history.push('/'));
    }).catch(error => {
      dispatch(loginFailure(error));
    });
  };
}

function logout() {
    // complete this function
}

function register(username, password) {
  return (dispatch, store) => {
    dispatch(loginRequest());
    userService.register(username, password).then( response => {
      dispatch(history.push('/login'));
    }).catch(error => {
      dispatch(registerFailure(error));
    });
  };

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user }; }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user }; }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error }; }
}

