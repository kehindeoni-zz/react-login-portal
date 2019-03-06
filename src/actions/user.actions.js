import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './alert.actions';
import { history } from '../helpers';

export const userActions = {
  login,
  logout,
  register
};

function login(username, password) {
  function request() { return { type: userConstants.LOGIN_REQUEST }; }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error }; }

  return dispatch => {
    dispatch(request());
    userService.login(username, password).then( response => {
      dispatch(success());
      history.push('/home');
    }).catch(message => {
      dispatch(alertActions.error(message));
      dispatch(failure(message));
    });
  };
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(username, password) {
  function request() { return { type: userConstants.REGISTER_REQUEST }; }
  function success() { return { type: userConstants.REGISTER_SUCCESS }; }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error }; }

  return (dispatch) => {
    dispatch(request());
    userService.register(username, password).then( response => {
      dispatch(success());
      dispatch(alertActions.success('Registration Successful'));
      history.push('/login');
    }).catch(message => {
      dispatch(alertActions.error(message));
      dispatch(failure(message));
    });
  };
}

