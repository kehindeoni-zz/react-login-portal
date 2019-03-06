export const userService = {
  login,
  logout,
  register
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch('/users/authenticate', requestOptions)
    .then(handleResponse)
    .then(function(data) {
      localStorage.setItem('user', JSON.stringify(data));
      return data;
    });
}

function logout() {
  localStorage.removeItem('user');
}

function register(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch('/users/register', requestOptions).then(handleResponse);
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
}
