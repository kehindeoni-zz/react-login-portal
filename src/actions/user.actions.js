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
      console.log(response, 'hhfhfh')
      // dispatch(loginRequestSuccess())
      dispatch(history.push('/'));
    }).catch(message => {
      dispatch(alertActions.error(message));
      dispatch(loginFailure(message));
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
      dispatch(alertActions.success('Registration Successful'));
      // dispatch(history.push('/login'));
    }).catch(message => {
      dispatch(alertActions.error(message));
      dispatch(registerFailure(message));
    });
  };
}

