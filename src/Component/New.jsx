import React, { useState } from 'react';
import './New.css';
import { RxCross2 } from "react-icons/rx";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";

function New() {
  const [clients, setClients] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [clientDetails, setClientDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const addClient = () => {
    setClients((prevClients) => [...prevClients, clientDetails]);
    setClientDetails({
      name: '',
      email: '',
      phone: '',
    });
    togglePopup();
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="navbar-heading">Client<br/>Dashboard /<span> Clients</span>
          </h1>
          <div className="icon">
          <BsFillGrid3X3GapFill className="icon1" />
      <HiBars3 className="icon2" />
      </div>
       
        <button className="add-client-btn" onClick={togglePopup}>
          +Add Client
        </button>
      
      </nav>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Add Client</h2>
            <button className="cross" onClick={closePopup}>
              {" "}
              <RxCross2 />
            </button>
            <form>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={clientDetails.name}
                onChange={handleInputChange}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={clientDetails.email}
                onChange={handleInputChange}
              />

              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={clientDetails.phone}
                onChange={handleInputChange}
              />

              <button type="button" onClick={addClient}>
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default New;