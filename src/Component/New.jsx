import React , { useState } from 'react';
import './New.css'; 
import {RxCross2 } from "react-icons/rx";

const New = () => {
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
  const cssStyle={
    color:'black',
    marginLeft:'20px',
    margintop:'20px',
    fontSize: '40px',
    boxshadow: '0px 0px 10px black',
  }

  const cssStyles={
   
    color:'white',
    background:'#ff9933',
  borderRadius:'30px',
  padding:' 10px 30px',
  float: 'right',
  border:'2px solid goldenrod',
  boxshadow: '0px 0px 10px black',
  fontSize: '2 rem'
  
 
  }
  return (
    <div>
   
    <h1 style={cssStyle}>Client List<br/></h1>
    <span className='dash'>Dashboard/Clients</span>
    
    
      <button className="add-client-btn" onClick={togglePopup} style={cssStyles}>
       + Add Client
      </button>
      
      

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Add Client </h2>
            <button className='cross' > <RxCross2/></button>
            <form>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                formTarget='_blank'
                value={clientDetails.name}
                onChange={handleInputChange}
              />
<br/>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                value={clientDetails.email}
                onChange={handleInputChange}
              />
              <br/>

              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={clientDetails.phone}
                onChange={handleInputChange}
              />
              <br/>

              <button type="button" onClick={addClient} style={cssStyles}>
                Add
              </button>
            </form>
          </div>
        </div>
      )}
      {/* <table className="client-table">
        <thead > 
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
    
   
  )
 
}

export default New