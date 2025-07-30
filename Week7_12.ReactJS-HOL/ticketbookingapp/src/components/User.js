import React, { useState } from 'react';

function User({ username }) {
  const flights = [
    { id: 1, route: 'Chennai → Bangalore', price: 2500 },
    { id: 2, route: 'Delhi → Mumbai', price: 3200 },
    { id: 3, route: 'Hyderabad → Goa', price: 1800 },
  ];

  const [bookedFlight, setBookedFlight] = useState(null);

  const handleBooking = (flight) => {
    setBookedFlight(flight);
  };

  return (
    <div className="card">
      <h2>Hello, {username}! Book Your Flight</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.route} - ₹{flight.price}{' '}
            <button onClick={() => handleBooking(flight)}>Book</button>
          </li>
        ))}
      </ul>

      {bookedFlight && (
        <div className="confirmation">
          <h3>🎉 Booking Confirmed!</h3>
          <p>You have booked: <strong>{bookedFlight.route}</strong></p>
          <p>Price: ₹{bookedFlight.price}</p>
        </div>
      )}
    </div>
  );
}

export default User;
