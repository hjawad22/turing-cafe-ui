import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor() {
  super()

this.state = {
reservations: []
}
}

componentDidMount() {
  fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch reservations')
      }
      return response.json()
    })
    .then(reservationData => {
      this.setState({
        reservations: reservationData
      });
      console.log(this.state.reservations)
    })
    .catch(error => {
      console.error(error)
    })
}
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
