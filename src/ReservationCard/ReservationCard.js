import React from "react";
import '../ReservationCard/ReservationCard.css'

function ReservationCard({name, date, time, numberOfGuests}) {
return (
    <div className="single-card-container">
    <h3 className="card-text">{name}</h3>
    <p className="card-text">{date}</p>
    <p className="card-text">{time}</p>
    <p className="card-text">Number Of Guests:{numberOfGuests}</p>
    <button className="cancel-button">Cancel</button>
    </div>
)
}

export default ReservationCard