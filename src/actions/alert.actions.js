import { alertConstants } from '../constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
  return () => {console.log('here')};
}

function error(message) {
}

function clear() {
}
