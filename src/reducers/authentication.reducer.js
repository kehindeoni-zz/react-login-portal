import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};

const initialState = {
  fetching: false,
  loggedIn: true,
  user: {}
}

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}
