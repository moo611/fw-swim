// src/utils/auth.js
export function setUser(user) {
  const str = JSON.stringify(user)
  localStorage.setItem('user', str);
}

export function getUser() {
  const user = JSON.parse(localStorage.getItem('user'))
  return user;
}
export function setToken(token){
  localStorage.setItem('token',token)
}

export function getToken(){
  return localStorage.getItem('token')
}


export function clear() {
  localStorage.removeItem('user');
  localStorage.removeItem('token')
  
}


