import { Component } from "react";
import "../Form/Form.css"

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            date: '',
            time: '',
            numberOfGuests: ''
        }

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitReservation = (event) => {
        event.preventDefault()
        const newCard = {
            id: Date.now(),
            ...this.state
        }
        this.props.addReservation(newCard)
    }
    render() {
        return (
            <>
                <form>
                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={this.state.name}
                        onChange={event => this.handleChange(event)}
                    />

                    <input
                        type='text'
                        placeholder='Date'
                        name='date'
                        value={this.state.date}
                        onChange={event => this.handleChange(event)}
                    />

                    <input
                        type='text'
                        placeholder='Time'
                        name='time'
                        value={this.state.time}
                        onChange={event => this.handleChange(event)}
                    />
                    <input
                        type='number'
                        placeholder='Number of Guests'
                        name='numberOfGuests'
                        value={this.state.numberOfGuests}
                        onChange={event => this.handleChange(event)}
                    />
                    <button className="reservation-button" onClick={event => this.submitReservation(event)}>Make Reservation</button>


                </form>

            </>
        )
    }
}


export default Form;