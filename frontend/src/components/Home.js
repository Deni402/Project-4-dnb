import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import Card from './Card'

// function orderByDate(arr) {
//   return arr.slice().sort(function (a, b) {
//     const aDate = new Date(a.createdAt)
//     const bDate = new Date(b.createdAt)
//     return bDate - aDate
//   })
// }

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      party: {}
    }
  }
  
  componentDidMount() {
    axios.get(`https://www.skiddle.com/api/v1/events/search/?api_key=${process.env.API_Key}&g=8`)
      .then(res => this.setState({ party: res.data }) )
      .catch(err => console.log(err))
  }
  

  handleSubmit(e) {
    e.preventDefault()
    axios.get('')
      .then(res => this.setState({ party: res.data }))
  }


  handleChange(e) {
    if (e.target.value === '') location.reload()
    else {
      this.setState({ search: e.target.value })
      console.log(this.state.search)
    }
  }

  render() {
    // if (!this.state.party.lenght === 0) return null
    // let recentFour = orderByDate(this.state.party, this.state.party.createdAt)
    // recentFour = recentFour.slice(0, 6)
    console.log('party:', this.state.party)
    if (!this.state.party.results) return null
    return (
      <div className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.party.results.map(result =>
              <div key={result.id}>
                {/* <Link to={`/results/${results.id}`}> */}
                <Card {...result} />
                {/* </Link> */}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

}

export default Home
