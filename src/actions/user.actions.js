import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './alert.actions';
import { history, store } from '../helpers';

export const userActions = {
  login,
  logout,
  register
};

function loginRequest() { return { type: userConstants.LOGIN_REQUEST }; }

function login(username, password) {
  function loginRequestSuccess(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function loginFailure(error) { return { type: userConstants.LOGIN_FAILURE, error }; }

  return dispatch => {
    dispatch(loginRequest());
    userService.login(username, password).then( response => {
      history.push('/');
    }).catch(message => {
      dispatch(alertActions.error(message));
      dispatch(loginFailure(message));
    });
  };
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(username, password) {
  function registerRequest() { return { type: userConstants.REGISTER_REQUEST }; }
  function registerFailure(error) { return { type: userConstants.REGISTER_FAILURE, error }; }

  return (dispatch) => {
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

