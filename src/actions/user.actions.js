import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './alert.actions';
import { history } from '../helpers';

export const userActions = {
  login,
  logout,
  register
};

function loginRequest() { return { type: userConstants.LOGIN_REQUEST }; }
function loginRequestSuccess(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
function loginFailure(error) { return { type: userConstants.LOGIN_FAILURE, error }; }
function registerRequest() { return { type: userConstants.REGISTER_REQUEST }; }
  // function registerSuccess(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
function registerFailure(error) { return { type: userConstants.REGISTER_FAILURE, error }; }

function login(username, password) {
  return dispatch => {
    dispatch(loginRequest());
    userService.login(username, password).then( response => {
      localStorage.setItem('user', JSON.stringify(response));
      history.push('/');
    }).catch(message => {
      dispatch(alertActions.error(message));
      dispatch(loginFailure(message));
    });
  };
}

function logout() {
  return dispatch => {
    localStorage.removeItem('user');
  }
}

function register(username, password) {
  return (dispatch, store) => {
    dispatch(loginRequest());
    userService.register(username, password).then( response => {
      dispatch(alertActions.success('Registration Successful'));
      history.push('/login');
    }).catch(message => {
      dispatch(alertActions.error(message));
      dispatch(registerFailure(message));
    });
  };
}

