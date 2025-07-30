import React from 'react';

function Guest() {
  const flights = [
    { id: 1, route: 'Chennai → Bangalore', price: 2500 },
    { id: 2, route: 'Delhi → Mumbai', price: 3200 },
    { id: 3, route: 'Hyderabad → Goa', price: 1800 },
  ];

  return (
    <div className="card">
      <h2>Browse Flights</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>{flight.route} - ₹{flight.price}</li>
        ))}
      </ul>
      <p><em>Please login to book a ticket.</em></p>
    </div>
  );
}

export default Guest;
