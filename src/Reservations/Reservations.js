
import React from "react";
import "../Reservations/Reservations.css"
import ReservationsCard from "../ReservationCard/ReservationCard"


const Reservations = ({reservations}) => {
    const cards = reservations.map(card => {
        return (<ReservationsCard
        id={card.id}
        key={card.id}
        name={card.name}
        date={card.date}
        time={card.time}
        numberOfGuests={card.number} />)
    })
    
    return(
        <>
        {cards}
        </>
    )
}

export default Reservations