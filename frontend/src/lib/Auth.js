import jwt from 'jsonwebtoken'

class Auth {
  static setToken(token) {
    localStorage.setItem('token', token)
  }

  static getToken() {
    return localStorage.getItem('token')
  }
  static removeToken() {
    return localStorage.removeItem('token')
  }
 
  static isAuthenticated() {
    return this.getToken()
  
  }
  static logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
  static getPayload() {
    return jwt.decode(this.getToken())
  }
}
 
export default Auth