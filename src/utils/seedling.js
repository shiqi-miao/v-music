// import Cookies from 'js-cookie'

// const LoginKey = 'hasLogin'
export function getToken() {
  // return Cookies.get(LoginKey);
  return sessionStorage.getItem('TOKEN')
}

export function setToken(token) {
  // return Cookies.set(LoginKey, "1")
  if(token){
    return sessionStorage.setItem('TOKEN', token)
  }
}

export function removeToken() {
  // return Cookies.remove(LoginKey)
  return sessionStorage.removeItem('TOKEN')
}
