const users = new Map();

export function register(username, password) {
  // TODO: hash password before storing
  users.set(username, password);
  return { username };
}

export function login(username, password) {
  const stored = users.get(username);
  if (stored === password) {
    return { token: `fake-token-${username}` };
  }
  return null;
}

export function getUser(username) {
  return users.get(username);
}
