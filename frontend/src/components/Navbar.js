import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../lib/Auth'


class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      active: false
    }
    this.logout = this.logout.bind(this)
    this.toggleActive = this.toggleActive.bind(this)
  }

  logout() {
    Auth.removeToken()
    this.props.history.push('/')
  }
  toggleActive() {
    this.setState({ active: !this.state.active })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ active: false })
    }
  }
  render() {
    return (
      <nav className="navbar is-fixed-top is-black" role="navigation" aria-label="main navigation" >
        <div className="navbar-brand">
          <Link to="/" >
            <img className="logo" src="https://i.imgur.com/zRlyO37.png" />
          </Link>
          <a role="button" className={`navbar-burger${this.state.active ? ' is-active' : ''}`}
            onClick={this.toggleActive}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div>
        </div>
        <div className={`navbar-menu${this.state.active ? ' is-active' : ''}`}>
          <div className="navbar-start">
            <Link to="/books" className="navbar-item">Party collection</Link>
            {Auth.isAuthenticated() && <Link to="/party/new" className="navbar-item">Add a new event</Link>}
          </div>
          <div className="navbar-end">
            {Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().sub}`} className="navbar-item">Profile</Link>}
            {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
            {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}
            {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.logout}>Logout</a>}
          </div>
        </div>
      </nav >
    )
  }
}

export default withRouter(Navbar)