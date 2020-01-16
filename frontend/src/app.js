import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Home from './components/Home'
// import SecureRoute from './components/SecureRoute'
// import FlashMessages from './components/FlashMessages'
import 'bulma'
import './style.scss'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      party: []

    }
  }

  componentDidMount(){
    axios.get('/api/party/')
      .then(res => {
        this.setState({ party: res.data })
      })

  }

  render(){
    console.log(this.state.party)
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)