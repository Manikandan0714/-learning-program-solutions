import React from 'react';
import './App.css';
import urbanHubImg from './URBANHUB.jpeg';
import techSpaceImg from './TECHSPACE.jpeg';
import startupImg from './STARTUP.jpeg';

function App() {
  const offices = [
    {
      name: "Urban Hub",
      rent: 55000,
      address: "123 Main Street, Chennai",
      image: urbanHubImg
    },
    {
      name: "Tech Space",
      rent: 62000,
      address: "456 Tech Park Road, Bangalore",
      image: techSpaceImg
    },
    {
      name: "Startup Zone",
      rent: 48000,
      address: "789 Startup Avenue, Hyderabad",
      image: startupImg
    }
  ];

  const title = <h1 className="heading">Office Space Rental Listings</h1>;

  return (
    <div className="container">
      {title}
      {offices.map((office, index) => (
        <div key={index} className="card">
          <img src={office.image} alt={office.name} className="image" />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p>
            <strong>Rent:</strong>
            <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
              {' '}Rs. {office.rent}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
