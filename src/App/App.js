import React, { Component } from 'react';
import Reservations from "../Reservations/Reservations"
import './App.css';
import Form from '../Form/Form';

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

addReservation = (newReservation) => {
  this.setState({ 
  reservations: [...this.state.reservations, newReservation]
  })

}
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
        <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
